// import { DestinationCategories } from 'src/app/shared/interfaces/destination-categories-interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DestinationCategoryService } from '../destination-category.service';
import { Subscription } from 'rxjs';
import { DestinationCategoryInterface } from 'src/app/shared/interfaces/destination-category-interface';

import { DestinationCategory } from 'src/app/shared/interfaces/destination-category';

@Component({
  selector: 'app-destination-category-view-one-dashboard',
  templateUrl: './destination-category-view-one-dashboard.component.html',
  styleUrls: ['./destination-category-view-one-dashboard.component.scss'],
})
export class DestinationCategoryViewOneDashboardComponent implements OnInit {
  pageBrandItem: string = 'pageBrandItemX';

  destinationCategory!: DestinationCategoryInterface;
  currentId!: number;
  activeId!: number;
  nextId!: number;
  nextIdExistingInDataBase: number = -1;

  constructor(
    private destinationCategoryService: DestinationCategoryService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.getTheNextAvailableId();
    // this.nextIdExistingInDataBase = -2;
  }

  private subscription!: Subscription;

  id: any;

  ngOnInit(): void {
    // this.id = this.activatedRoute.snapshot.params['id'];
    // this.id = this.activatedRoute.snapshot.params.id;
    this.id = +this.activatedRoute.snapshot.paramMap.get('id')?.toString!;

    this.subscription = this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
    });

    this.activeId = +this.activatedRoute.snapshot.paramMap.get('id')!;

    this.currentId = +this.activatedRoute.snapshot.params.id;
    this.getDestinationCategory(this.activatedRoute.snapshot.parent?.params.id);
    // this.pageBrandItem = this.destinationCategory.IncludedServiceDashboadComponent;
    // this.nextId = +this.currentId + 1;

    this.getTheNextAvailableId();
    // this.nextIdExistingInDataBase = -2;
  }

  getDestinationCategory(id: number) {
    this.destinationCategoryService.getDestinationCategory(id).subscribe(
      (data) => {
        this.destinationCategory = data;
        // this.pageBrandItem = this.currentId!.toString;
      },
      (err) => console.error(err),
      () => console.log('destination category with id ' + id + ' was loaded')
    );
    this.nextId = +this.currentId + 1;
  }

  onClickNext() {
    this.currentId++;
    this.activeId++;
    this.getDestinationCategory(this.currentId);
    this.getTheNextAvailableId();
  }

  //To prevent memory leak
  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

  // destinationCategories: DestinationCategories;
  destinationCategories: any;
  destinationCategoriesTEST = 'TEST';
  pickUpNextOne: boolean = false;
  maxSize: number = -1;
  // maxSize: number =  JSON.stringify(this.destinationCategories).length + 0;

  async getTheNextAvailableId() {
    // this.nextIdExistingInDataBase = -2;
    this.getDestinationCategories();
    // alert('getDestinationCategories');

    this.destinationCategoriesTEST = 'TEST2';

    this.destinationCategories.forEach(() => {
      this.maxSize++;
    });

    this.destinationCategoriesTEST = 'TEST3';

    // for(var i = 0; i < +this.destinationCategories[+this.destinationCategories.length()].id; i++){
    // for(var i = 0; i < Object.keys(this.destinationCategories).length; i++){
    // this.maxSize = this.destinationCategories.length + 0;
    this.maxSize = JSON.stringify(this.destinationCategories).length + 0;
    // this.maxSize = Object.keys(this.destinationCategories).length + 0;

    this.destinationCategoriesTEST = 'TEST3';

    for (var i = 1; i <= this.maxSize; i++) {
      this.destinationCategoriesTEST = 'TEST4';
      if (this.activeId == +this.destinationCategories[i].id) {
        this.pickUpNextOne = true;
      }
      if (this.pickUpNextOne) {
        this.nextIdExistingInDataBase = +this.destinationCategories[i].id;
        break;
      }
    }

    // this.destinationCategories.forEach((element: { "": any; }) => {
    //   element.length;
    // });
  }

  async getDestinationCategories() {
    this.destinationCategoryService.getDestinationCategories().subscribe(
      (data) => {
        this.destinationCategories = data;
        console.log(data);
      },
      (err) => console.error(err),
      () => {
        console.log('destination categories loaded');
      }
    );
  }

  onEnterGoToIdRoute() {
    // this.router.navigate(['/my-book-listing']);
    this.router.navigate(['../', this.activeId + 3]);
    // '../', activeId + 1
  }

  itemClassName: string = 'DestinationCategory';
  itemId!: number;
  itemDeleted!: DestinationCategory;
  itemDeletedId!: number;

  isItemDeletedFromDataBase: boolean = false;
  itemDeletedStillExistInDataBase!: DestinationCategory;

  testIndicator: string = 'INDI-0';
  onDeleteOne(id: number) {
    this.destinationCategoryService.getDestinationCategory(id).subscribe(
      (data) => {
        this.itemDeleted = data;
        this.itemDeletedId = +this.itemDeleted.id!;
        // data(JSON.stringify(data).indexOf('id'));
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log(
          'item ' +
            this.itemClassName +
            ' with id ' +
            id +
            ' to be deleted first was save in itemDeleted'
        );
      }
    );

    this.destinationCategoryService.deleteDestinationCategory(id);

    this.destinationCategoryService.getDestinationCategory(id).subscribe(
      (data) => {
        this.itemDeletedStillExistInDataBase = data;
      },
      (err) => {
        // console.log(err);
        this.isItemDeletedFromDataBase = true;
      },
      () => {
        console.log(
          'failure on deleting ' +
            this.itemClassName +
            ' with id ' +
            id +
            ' to be deleted first was save in itemDeleted'
        );
      }
    );
  }

  onDeleteItemConfirmation() {
    this.router.navigate(['../destination-category/view-all']);
  }
}
