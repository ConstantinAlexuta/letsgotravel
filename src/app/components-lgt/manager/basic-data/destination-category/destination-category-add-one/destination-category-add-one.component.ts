import { DestinationCategoryService } from './../destination-category.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { DestinationCategory } from 'src/app/shared/interfaces/destination-category';

@Component({
  selector: 'app-destination-category-add-one',
  templateUrl: './destination-category-add-one.component.html',
  styleUrls: ['./destination-category-add-one.component.scss'],
})
export class DestinationCategoryAddOneComponent implements OnInit {
  public destinationCategoryFormGroup!: FormGroup;

  validMessage: string = '';

  constructor(private destinationCategoryService: DestinationCategoryService) {}

  ngOnInit(): void {
    this.destinationCategoryFormGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });

    this.isSavedSuccessfully = false;
  }

  createdDestinationCategory!: DestinationCategory;

  onSubmit() {
    if (this.destinationCategoryFormGroup.valid) {
      this.validMessage = 'Your new destination category has been submitted.';

      this.destinationCategoryService.createDestinationCategory(
        this.destinationCategoryFormGroup.value
      );

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
}
