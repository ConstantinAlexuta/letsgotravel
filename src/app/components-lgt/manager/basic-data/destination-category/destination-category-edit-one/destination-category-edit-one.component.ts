import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DestinationCategoryService } from '../destination-category.service';

@Component({
  selector: 'app-destination-category-edit-one',
  templateUrl: './destination-category-edit-one.component.html',
  styleUrls: ['./destination-category-edit-one.component.scss'],
})
export class DestinationCategoryEditOneComponent implements OnInit {
  public destinationCategoryEditFormGroup!: FormGroup;

  validMessage: string = '';
  // @Input()
  currentId!: number;
  destinationCategory: any;
  newDestinationCategory: any;

  constructor(
    private destinationCategoryService: DestinationCategoryService,
    private activatedRoute: ActivatedRoute
  ) {}

  async ngOnInit(): Promise<void> {
    this.currentId = this.activatedRoute.snapshot.parent?.params.id;
    await this.getDestinationCategory(this.currentId);

    this.destinationCategoryEditFormGroup = new FormGroup({
      id: new FormControl(
        {
          value: this.newDestinationCategory.id,
          disabled: true,
        },
        [Validators.required, Validators.minLength(1), Validators.maxLength(99)]
      ),
      name: new FormControl(
        {
          value: this.newDestinationCategory.name,
          disabled: false,
        },
        [Validators.required, Validators.minLength(1), Validators.maxLength(99)]
      ),
      description: new FormControl(
        {
          value: this.newDestinationCategory.description,
          disabled: false,
        },
        [Validators.required, Validators.minLength(1), Validators.maxLength(99)]
      ),
    });

    this.isSavedSuccessfully = false;
  }

  async getDestinationCategory(id: number) {
    await this.destinationCategoryService.getDestinationCategory(id).subscribe(
      (data) => {
        this.destinationCategory = data;
      },
      (err) => console.error(err),
      () => console.log('destination category with id ' + id + ' was loaded')
    );
  }

  onSubmit() {
    if (this.destinationCategoryEditFormGroup.valid) {
      this.validMessage = 'Your new destination category has been saved.';

      this.destinationCategoryService
        .replaceDestinationCategory(
          this.currentId,
          this.destinationCategoryEditFormGroup.value
        )
        .subscribe(
          (data) => {
            console.log(
              'destinationCategoryService.replaceDestinationCategory  >>> data: ' +
                JSON.stringify(data)
            );
            // this.destinationCategoryEditFormGroup.reset();
            this.destinationCategoryEditFormGroup.disable();

            this.isSavedSuccessfully = true;
            this.getSavedObjectId();
            this.savedItemId = this.updatedDestinationCategories.size;
            return true;
          },
          (error) => {
            return Observable.throw(error);
          }
        );
    } else {
      this.validMessage =
        'Please fill out the required fields of the form before submitting!';
      this.isSavedSuccessfully = false;
    }
  }

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
