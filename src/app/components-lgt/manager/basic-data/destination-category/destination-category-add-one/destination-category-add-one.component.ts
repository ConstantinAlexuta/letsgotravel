import { DestinationCategoryService } from './../destination-category.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { DestinationCategory } from 'src/app/shared/interfaces/destination-category';
import { ActivatedRoute, Router } from '@angular/router';
import { findLastIndex } from 'src/app/shared/functions/findLastIndex';
import { Status } from 'src/app/shared/classes/status';

@Component({
  selector: 'app-destination-category-add-one',
  templateUrl: './destination-category-add-one.component.html',
  styleUrls: ['./destination-category-add-one.component.scss'],
})
export class DestinationCategoryAddOneComponent implements OnInit {
  public destinationCategoryFormGroup!: FormGroup;

  validMessage: string = '';
  // currentRouteUrl: string = this.activatedRoute.toString();
  currentRouteUrl: string = 'DEFAULT';

  constructor(
    private destinationCategoryService: DestinationCategoryService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    // router.events.subscribe((url: any) => {
    this.currentRouteUrl = this.router.url;
    // });
    // console.log(router.url); // to print only path eg:"/login"
  }

  ngOnInit(): void {
    this.destinationCategoryFormGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
    });

    this.isSavedSuccessfully = false;
  }

  createdDestinationCategory!: DestinationCategory;

  readonlyAfterSave = '';
  isAlreadySaved: boolean = false;

  firstAttemptToSaveWasDone: boolean = false;
  messageFailureForFirstAttemptToSave: string =
    'Failure on saving! The attempt to save the item on server was without success. Unknown cause! Please retry.';

  async onSubmit() {
    if (this.destinationCategoryFormGroup.valid) {
      this.validMessage = 'Your new destination category has been submitted.';

      this.destinationCategoryService.createDestinationCategory(
        this.destinationCategoryFormGroup.value
      );

      this.firstAttemptToSaveWasDone = true;

      this.readonlyAfterSave = 'readonly';
      this.isAlreadySaved = true;

      this.isSavedSuccessfully = true;

      await this.getLastNewIdSaved();
      await this.getLastNewIdSaved();
      // this.showNewItemCreatedIdMessage = true;

      // this.getLastNewIdSaved();

      if (this.isSavedSuccessfully) {
        this.showNewItemCreatedId();
      }

      // .subscribe(
      //   (data) => {
      //     this.destinationCategoryFormGroup.reset();
      //     this.isSavedSuccessfully = true;
      //     this.getSavedObjectId();
      //     this.savedItemId = this.updatedDestinationCategories.size;
      //     return true;
      //   },
      //   (error) => {
      //     return Observable.throw(error);
      //   }
      // );
    } else {
      this.validMessage =
        'Please fill out the required fields of the form before submitting!';
      this.isSavedSuccessfully = false;
      this.firstAttemptToSaveWasDone = false;
      this.isAlreadySaved = false;
      this.numberClickedOnSaveWithSuccess = 0;
      this.ifSavingWasWithFailureOnServerSoUnblockFormFields();
    }
  }

  // onSubmit() {
  //   if (this.destinationCategoryFormGroup.valid) {
  //     this.validMessage = 'Your new destination category has been submitted.';
  //     this.destinationCategoryService
  //       .createDestinationCategory(this.destinationCategoryFormGroup.value)
  //       .subscribe(
  //         (data) => {
  //           this.destinationCategoryFormGroup.reset();
  //           this.isSavedSuccessfully = true;
  //           this.getSavedObjectId();
  //           this.savedItemId = this.updatedDestinationCategories.size;
  //           return true;
  //         },
  //         (error) => {
  //           return Observable.throw(error);
  //         }
  //       );
  //   } else {
  //     this.validMessage =
  //       'Please fill out the required fields of the form before submitting!';
  //     this.isSavedSuccessfully = false;
  //   }
  // }

  isSavedSuccessfully: boolean = false;
  savedItemId: number = -1;

  updatedDestinationCategories: any;

  getSavedObjectId() {
    this.destinationCategoryService.getDestinationCategories().subscribe(
      (data) => {
        this.updatedDestinationCategories = data;
      },
      (err) => console.error(err),
      () =>
        console.log(
          'updatedDestinationCategories loaded to find the last offer saved id'
        )
    );
  }

  numberClickedOnSaveWithSuccess: number = 0;
  showMessageOnClikedSaveTwice: boolean = false;
  messageOnClikedSaveTwice: string = 'This item was already saved.';
  onClickSaveTwice() {
    this.numberClickedOnSaveWithSuccess++;
    if (this.numberClickedOnSaveWithSuccess == 2) {
      this.showMessageOnClikedSaveTwice = true;
      this.validMessage = '';
    }
  }

  ifSavingWasWithFailureOnServerSoUnblockFormFields() {
    if (this.firstAttemptToSaveWasDone && !this.isSavedSuccessfully) {
      this.readonlyAfterSave = '';
      this.isAlreadySaved = false;
    }
  }

  reloadThisPage() {
    // this.router.navigate(['../add-one?refresh=1']);
    // this.router.navigate([this.router.url + '?refresh=1']);
    // this.router.navigate([this.currentRouteUrl + '?refresh=1']);
    // this.router.navigate(['../destination-category/add-one']);
    // destination-category/add-one
  }

  reloadComponent() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    // this.router.navigate(['/same-route']);
    this.router.navigate([this.currentRouteUrl]);
  }

  lastNewIdSaved: number = -1;
  async getLastNewIdSaved() {
    this.destinationCategoryService
      .getDestinationCategories()
      .subscribe((data) => {
        // this.lastNewIdSaved = findLastIndex(data, 'name' => true);
        this.lastNewIdSaved = +data.reverse().find((x) => x.id)?.id!;
      });
  }

  goToLastSavedItemView() {
    this.getLastNewIdSaved();
    this.getLastNewIdSaved(); // let them two

    this.router.navigate([
      '../destination-category/view-one',
      +this.lastNewIdSaved,
    ]);
    // 'destination-category/view-one/36/view';
  }

  goToLastSavedItemEditView() {
    this.getLastNewIdSaved();
    this.getLastNewIdSaved(); // let them two

    this.router.navigate([
      // '../destination-category/view-one',
      // +this.lastNewIdSaved,
      // +'edit',
      '../destination-category/view-one/' + +this.lastNewIdSaved + '/edit',
    ]);
    // 'destination-category/view-one/36/edit';
  }

  showNewItemCreatedIdMessage: boolean = false;
  newItemCreatedIdMessage: string = '';
  async showNewItemCreatedId() {
    await this.delay(1000);
    this.getLastNewIdSaved();
    this.getLastNewIdSaved(); // let them two

    // await this.delay(300);
    // this.getLastNewIdSaved();
    await this.delay(2000);
    this.newItemCreatedIdMessage =
      // Success feedback from server database.
      'The new item created has the id ' + +this.lastNewIdSaved + '.';
    this.showNewItemCreatedIdMessage = true;
  }

  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  statuses: Status[] = [
    { value: 'NEW' },
    { value: 'DRAFT' },
    { value: 'DUPLICATE' },
    { value: 'VERIFIED' },
    { value: 'APPROVED' },
    { value: 'ACTIVE' },
    { value: 'INCOMPLETE' },
    { value: 'DISABLED' },
    { value: 'ARCHIVED' },
  ];
  
}
