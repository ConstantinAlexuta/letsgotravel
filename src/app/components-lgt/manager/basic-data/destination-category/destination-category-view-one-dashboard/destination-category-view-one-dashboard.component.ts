import { DestinationCategoryDataExchangeService } from './../destination-category-data-exchange.service';
import { Component, OnInit, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { DestinationCategory } from 'src/app/shared/interfaces/destination-category';
import { ItemService } from 'src/app/shared/services/item.service';
import { SERVER_API_V1 } from 'src/app/app.constants';

@Component({
  selector: 'app-destination-category-view-one-dashboard',
  templateUrl: './destination-category-view-one-dashboard.component.html',
  styleUrls: ['./destination-category-view-one-dashboard.component.scss'],
})
export class DestinationCategoryViewOneDashboardComponent implements OnInit {
  //
  // ###################################################
  //
  itemNameItem: string = 'destination category';
  itemDashItem: string = 'destination-category';

  item!: DestinationCategory;
  items!: DestinationCategory[];
  itemHeaders: string[] = ['Id', 'Name', 'Description'];
  itemFields: string[] = ['id', 'name', 'description'];
  //
  // ###################################################
  //
  previousId: number = -1;
  currentId: number = -1;
  prevId: number = -1;
  nextId: number = -1;

  pathId!: string;
  itemPath!: string;
  itemsPath: string = SERVER_API_V1 + this.itemDashItem;
  pageBrandViewOneItem!: string;
  subscription!: Subscription;
  // currentLongRouter!: string;
  currentShortRouter!: string; // view-one
  currentShortRouterId!: string; // 34
  @Output() viewStatus: string = 'view'; // can be and "edit"

  itemsLength: number = -1;
  currentIndexFromItems: number = -1;

  firstItemOfItemsId: number = -11;
  lastItemOfItemsId: number = -1;
  //
  // ###################################################
  //

  // destinationCategory!: DestinationCategory;
  activeId!: number;
  // nextIdExistingInDataBase: number = -1;

  constructor(
    private itemService: ItemService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private destinationCategoryDataExchangeService: DestinationCategoryDataExchangeService
  ) {
    this.viewStatus = 'view';
    this.currentShortRouter = activatedRoute.snapshot.url[0].path; // view-one
    this.currentShortRouterId = activatedRoute.snapshot.url[1].path; // view-one
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
  }

  async ngOnInit(): Promise<void> {
    //
    // ###################################################
    //
    this.viewStatus = 'view';
    // this.currentLongRouter = this.router.url;
    this.currentId = +this.activatedRoute.snapshot.paramMap.get('id')
      ?.toString!;
    this.itemPath =
      SERVER_API_V1 + this.itemDashItem + '/' + (await this.currentId); //  e.g.:  '/server/api/v1/destination-category/id';
    //
    // ###################################################
    //

    this.viewComeBackFromCancelEditViewSubscription = this.destinationCategoryDataExchangeService.currentMessageFromCancel.subscribe(
      (value) => {
        this.messageFromCancel = value;
        if (value == true) {
          this.viewStatus = 'view';
        }
      }
    );

    this.subscription = this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
    });

    this.activeId = +this.activatedRoute.snapshot.paramMap.get('id')!;

    this.currentId = +this.activatedRoute.snapshot.params.id;

    // ATTEMP 1 = INSTANT //////////////////////////////////////////////////////////////////
    await this.getItem();
    await this.getItems();

    var checkData = setInterval(() => {
      this.currentId = +this.activatedRoute.snapshot.params.id;

      this.firstItemOfItemsId = +this.items[0].id!;

      this.lastItemOfItemsId = +this.items[this.itemsLength - 1].id!;

      this.currentIndexFromItems = this.items.findIndex(
        (itemIterator) => itemIterator.id == this.currentId
      );

      this.getPrevId();
      this.getNextId();
      this.evaluateMarginsForDisablingNavigationButtons();

      if (false) {
        clearInterval(checkData);
      }
    }, 200);

    setTimeout(() => {
      this.goToIdValue = this.currentId;
    }, 500);

    setTimeout(() => {
      this.goToIdValue = this.currentId;
    }, 1000);
  }

  async getItem() {
    (await this.itemService.getItem(this.itemPath)).subscribe(
      (data) => {
        this.item = data;
      },
      (err) => console.error(err),
      () =>
        console.log(
          this.itemNameItem + ' with id ' + this.currentId + ' was loaded'
        )
    );
  }

  async getItems(): Promise<any> {
    (await this.itemService.getItems(this.itemsPath)).subscribe(
      (data) => {
        this.items = data;
        this.itemsLength = data.length;
        console.log(data);
      },
      (err) => console.error(err),
      () => {
        console.log('destination categories loaded');
      }
    );
  }

  itemClassName: string = 'DestinationCategory';
  itemId!: number;
  itemDeleted!: DestinationCategory;
  itemDeletedId!: number;

  isItemDeletedFromDataBase: boolean = false;
  itemDeletedIfStillExistInDataBase: DestinationCategory = null!;

  async onDeleteOne() {
    (await this.itemService.getItem(this.pathId)).subscribe(
      (data) => {
        this.itemDeleted = data;
        this.itemDeletedId = +this.itemDeleted.id!;
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log(
          'item ' +
            this.itemClassName +
            ' with id ' +
            this.currentId +
            ' to be deleted first was save in itemDeleted'
        );
      }
    );

    await this.itemService.deleteItem(this.pathId);

    (await this.itemService.getItem(this.pathId)).subscribe(
      (data) => {
        this.itemDeletedIfStillExistInDataBase = data;
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
            this.currentId +
            ' to be deleted first was save in itemDeleted'
        );
      }
    );
  }

  // @Input()
  isOnCancelEdit: boolean = false;

  messageFromCancel = false;
  viewComeBackFromCancelEditViewSubscription!: Subscription;

  onBack() {
    if (this.messageFromCancel) {
      this.viewStatus = 'view';
      this.destinationCategoryDataExchangeService.changeMessageFromCancel(
        false
      );
    }

    if (this.viewStatus == 'view') {
      this.router.navigate(['../' + this.itemDashItem + '/view-all']);
    }

    if (this.viewStatus == 'edit') {
      this.viewStatus = 'view';
      this.router.navigate([
        '../' + this.itemDashItem + '/view-one/' + this.currentId + '/view',
      ]);
    }
  }

  onEdit() {
    this.destinationCategoryDataExchangeService.changeMessageFromCancel(false);
    this.viewStatus = 'edit';
  }

  onDeleteItemConfirmation() {
    this.destinationCategoryDataExchangeService.changeMessageFromCancel(false);
    this.viewStatus = 'view';
    this.router.navigate(['../' + this.itemDashItem + '/view-all']);
  }

  setCommonNavigationSettingsAndGoToIdValue() {
    this.setCommonNavigationSettings();

    this.goToIdValue = this.currentId;
  }

  setCommonNavigationSettings() {
    this.previousId = this.currentId;
    this.destinationCategoryDataExchangeService.changeMessageFromCancel(false);
    this.viewStatus = 'view';
  }

  onPrev() {
    this.setCommonNavigationSettingsAndGoToIdValue();
    this.setGoToIdValueTo(this.prevId);

    this.router.navigate([
      '../' + this.itemDashItem + '/view-one/' + this.prevId + '/view',
    ]);
  }

  async onNext() {
    this.setCommonNavigationSettingsAndGoToIdValue();
    this.setGoToIdValueTo(this.nextId);

    this.router.navigate([
      '../' + this.itemDashItem + '/view-one/' + this.nextId + '/view',
    ]);
  }

  onFirst() {
    this.setCommonNavigationSettingsAndGoToIdValue();
    this.setGoToIdValueTo(this.firstItemOfItemsId);

    this.router.navigate([
      '../' +
        this.itemDashItem +
        '/view-one/' +
        this.firstItemOfItemsId +
        '/view',
    ]);
  }

  onLast() {
    this.setCommonNavigationSettingsAndGoToIdValue();
    this.setGoToIdValueTo(this.lastItemOfItemsId);

    this.router.navigate([
      '../' +
        this.itemDashItem +
        '/view-one/' +
        this.lastItemOfItemsId +
        '/view',
    ]);
  }

  isPrevId: boolean = false;
  getPrevId() {
    if (this.currentIndexFromItems > 0) {
      this.isPrevId = true;
      this.prevId = +this.items[this.currentIndexFromItems - 1].id!;
    } else {
      this.isPrevId = false;
    }
  }

  isNextId: boolean = true;
  getNextId() {
    if (this.currentIndexFromItems < this.itemsLength - 1) {
      this.isNextId = true;
      this.nextId = +this.items[this.currentIndexFromItems + 1].id!;
    } else {
      this.isNextId = false;
    }
  }

  isFirstId: boolean = true;
  isLastId: boolean = false;

  evaluateMarginsForDisablingNavigationButtons() {
    if (this.currentIndexFromItems == 0) {
      this.isFirstId = true;
    } else {
      this.isFirstId = false;
    }
    if (this.currentIndexFromItems == this.itemsLength - 1) {
      this.isLastId = true;
    } else {
      this.isLastId = false;
    }
  }

  setGoToIdValueTo(goToIdNewValue: number) {
    this.goToIdValue = goToIdNewValue;
  }

  hideAllGoToIdMessages() {
    this.showIsLessThanMinimumMessage = false;
    this.showIsBiggerThanMaximumMessage = false;
    this.showIidDoesntExistMessage = false;
  }

  goToIdValue!: number;

  showIsLessThanMinimumMessage: boolean = false;
  isLessThanMinimumMessage: string = 'less than min';

  showIsBiggerThanMaximumMessage: boolean = false;
  isBiggerThanMaximumMessage: string = 'bigger than max';

  showIidDoesntExistMessage: boolean = false;
  idDoesntExistMessage: string = "id doesn't exist";

  onGoToId() {
    this.hideAllGoToIdMessages();

    this.setCommonNavigationSettings();

    if (this.goToIdValue < this.firstItemOfItemsId) {
      this.showIsLessThanMinimumMessage = true;
      setTimeout(() => {
        this.showIsLessThanMinimumMessage = false;
      }, 4000);
    }

    if (this.goToIdValue > this.lastItemOfItemsId) {
      this.showIsBiggerThanMaximumMessage = true;
      setTimeout(() => {
        this.showIsBiggerThanMaximumMessage = false;
      }, 4000);
    }

    if (
      this.goToIdValue == null ||
      (this.goToIdValue >= this.firstItemOfItemsId &&
        this.goToIdValue <= this.lastItemOfItemsId &&
        !this.checkIfThisIdExist(this.goToIdValue))
    ) {
      this.showIidDoesntExistMessage = true;
      setTimeout(() => {
        this.showIidDoesntExistMessage = false;
      }, 4000);
    }

    if (
      this.goToIdValue >= this.firstItemOfItemsId &&
      this.goToIdValue <= this.lastItemOfItemsId
    ) {
      this.router.navigate([
        '../' + this.itemDashItem + '/view-one/' + this.goToIdValue + '/view',
      ]);
    }
  }

  checkIfThisIdExist(checkId: number): boolean {
    let answer: boolean = false;
    this.items.forEach((item) => {
      if (item.id == checkId) {
        answer = true;
      }
    });
    return answer;
  }

  //To prevent memory leak
  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();

    if (this.viewComeBackFromCancelEditViewSubscription)
      this.viewComeBackFromCancelEditViewSubscription.unsubscribe();
  }
}
