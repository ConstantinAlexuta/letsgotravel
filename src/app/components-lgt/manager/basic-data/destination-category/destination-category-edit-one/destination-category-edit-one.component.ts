import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
// import { SHOW_DEBUG } from 'src/app/app.constants';
import { DestinationCategory } from 'src/app/shared/interfaces/destination-category';
import { DestinationCategoryService } from '../destination-category.service';

@Component({
  selector: 'app-destination-category-edit-one',
  templateUrl: './destination-category-edit-one.component.html',
  styleUrls: ['./destination-category-edit-one.component.scss'],
})
export class DestinationCategoryEditOneComponent implements OnInit {
  // @Input()

  constructor(
    private destinationCategoryService: DestinationCategoryService,
    private activatedRoute: ActivatedRoute
  ) {
    this.itemId = +this.activatedRoute.snapshot.parent?.params.id;

    setTimeout(() => {
      this.getItem(this.itemId);
    }, 100);
  }

  getItem(id: number) {
    this.destinationCategoryService.getDestinationCategory(id).subscribe(
      (data) => {
        this.item = data;
      },
      (err) => {
        console.error(err);
      },
      () => {
        console.log('item with id ${id} was loaded');
      }
    );
  }

  submitForm() {
    this.destinationCategoryService.replaceDestinationCategory(
      this.itemId,
      this.itemForm.value
    );
  }

  itemId!: number;
  item!: DestinationCategory;
  readonlyAfterSave = ''; //  && Disable Clear and reload

  itemForm!: FormGroup;

  updateItemForm() {
    this.itemForm.patchValue({
      id: this.item.id,
      name: this.item.name,
      description: this.item.description,
    });
  }

  clearItemForm() {
    this.itemForm.patchValue({
      name: '',
      description: '',
    });
  }

  refreshItemForm() {
    this.clearItemForm();
    setTimeout(() => {
      this.updateItemForm();
    }, 300);
  }

  async ngOnInit(): Promise<void> {
    this.itemForm = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.minLength(1)]),
      name: new FormControl('', [Validators.required, Validators.minLength(1)]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
      ]),
    });

    setTimeout(() => {
      console.log('hello from ngOnInit');
      this.updateItemForm();
    }, 500);
  }
}
