import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { D_CTMWRSOS, N_CTMWRSOS, showDebug } from 'src/app/app.constants';
import { DestinationCategory } from 'src/app/shared/interfaces/destination-category';
import { DestinationCategoryService } from '../destination-category.service';

@Component({
  selector: 'app-destination-category-edit-one',
  templateUrl: './destination-category-edit-one.component.html',
  styleUrls: ['./destination-category-edit-one.component.scss'],
})
export class DestinationCategoryEditOneComponent implements OnInit {
  itemClassName: string = 'DestinationCategory';
  componentTypeName: string = 'EditOneComponent';

  itemId!: number;

  item!: DestinationCategory;
  readonlyAfterSave = ''; //  && Disable Clear and reload

  itemForm = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.minLength(1)]),
    name: new FormControl('', [Validators.required, Validators.minLength(1)]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]),
  });

  constructor(
    private destinationCategoryService: DestinationCategoryService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    if (showDebug)
      console.log(
        '===================================================================='
      );
    if (showDebug) console.log('itemClassName = ' + this.itemClassName);
    if (showDebug) console.log('componentTypeName = ' + this.componentTypeName);
    if (showDebug) console.log('in constructor');
  }

  async ngOnInit(): Promise<void> {
    if (showDebug) console.log('in ngOnInit');

    this.itemId = +this.activatedRoute.snapshot.parent?.params.id;

    if (showDebug)
      console.log(
        'in ngOnInit >> itemId = ' + this.itemId + '      BEFORE TIMEOUT'
      );

    // setTimeout(() => {
    //   this.getItem(this.itemId);
    // }, 100);

    if (showDebug)
      console.log(
        'in ngOnInit >> getItem >> item = ' +
          JSON.stringify(this.item) +
          '      BEFORE TIMEOUT'
      );

    setTimeout(() => {
      this.getItem(this.itemId);
    }, 200);

    if (showDebug)
      console.log(
        'in ngOnInit >> getItem >> item = ' +
          JSON.stringify(this.item) +
          '      AFTER TIMEOUT'
      );

    if (showDebug)
      setTimeout(() => {
        console.log(
          'in ngOnInit >> getItem >> item = ' + JSON.stringify(this.item)
        );
      }, 100);

    setTimeout(() => {
      this.getItem(this.itemId);
      if (showDebug)
        console.log(
          'in ngOnInit >> getItem >> item = ' +
            JSON.stringify(this.item) +
            '   // RESERVE UPLOADED AGAIN AFTER 400 ms'
        );
    }, 400);

    setTimeout(() => {
      this.loadItemIntoItemForm();
      if (showDebug) console.log('in ngOnInit >> in loadItemIntoItemForm()');
    }, 600);
  }

  getItem(id: number) {
    if (showDebug) console.log('in getItem');
    this.destinationCategoryService.getDestinationCategory(id).subscribe(
      (data) => {
        this.item = data;
        if (showDebug)
          console.log(
            'item service > get method > item with id ' +
              id +
              ' was retrieved from server database'
          );
        if (showDebug)
          console.log(
            'in ngOnInit >> getItem >> item = ' + JSON.stringify(this.item)
          );
      },
      (err) => {
        console.error(err);
        if (showDebug)
          console.log(
            'item service > get method > item with id ' +
              id +
              ' was failed to be loaded'
          );
      },
      () => {
        if (showDebug)
          console.log(
            'item service > get method > item with id ' +
              id +
              ' was loaded successfully from database server'
          );
      }
    );
  }

  isSubmitedOnce: boolean = false;
  submitForm() {
    if (!this.isSubmitedOnce) {
      this.checkIfEditedItemIsDifferentThanInitialItem();

      if (showDebug) console.log('in submitForm');

      if (this.editedItemIsDifferentThanInitialItem) {
        this.showMessageItemHasNotthingChanged = false;

        this.destinationCategoryService.replaceDestinationCategory(
          this.itemId,
          this.itemForm.value
        );

        this.checkThatModificationWasReallySavedOnServer();
        if (this.isModificationSavedOnServerWithSuccess) {
          this.loadItemModifiedAndRetrievedFromServerIntoItemForm();
        }

        setTimeout(() => {
          // this.isModificationSavedOnServerWithSuccess = false;
        }, 5000);
      } else {
        this.showMessageItemHasNotthingChanged = true;

        setTimeout(() => {
          this.loadItemIntoItemForm();
          if (showDebug)
            console.log('in ngOnInit >> in loadItemIntoItemForm()');
        }, 600);
      }

      if (showDebug)
        console.log(
          'in submitForm >> service >> replace method >> item send it to PUT on server'
        );
    }

    this.checkIfEditedItemIsDifferentThanInitialItem();

    this.isSubmitedOnce = true;
    this.isDisabledSaveButton = true;

    setTimeout(() => {
      this.reinitializeItemFormBooleanVariable();
    }, 100);

    setTimeout(() => {
      this.showMessageItemHasNotthingChanged = false;
      // this.isModificationSavedOnServerWithSuccess = false;
    }, 7000);
  }

  editedItemIsDifferentThanInitialItem: boolean = false;
  showMessageItemHasNotthingChanged = false;
  messageItemHasNotthingChanged: string =
    'The item was not saved because is the same like the initial one.';
  itemEdited!: DestinationCategory;

  checkIfEditedItemIsDifferentThanInitialItem() {
    this.itemEdited = this.itemForm.value;

    if (showDebug)
      console.log(
        'in checkIfEditedItemIsDifferentThanInitialItem() >>  let itemEdited: DestinationCategory = this.itemForm.value = ' +
          JSON.stringify(this.itemEdited)
      );

    if (!this.isItemsComparedEquals(this.item, this.itemEdited)) {
      this.editedItemIsDifferentThanInitialItem = true;
    }

    if (showDebug)
      console.log(
        'in checkIfEditedItemIsDifferentThanInitialItem() >>  this.item == this.itemEdited >>> ' +
          (!this.editedItemIsDifferentThanInitialItem
            ? 'ARE EQUALS'
            : 'ARE DIFFERENT') +
          '      editedItemIsDifferentThanInitialItem = ' +
          this.editedItemIsDifferentThanInitialItem
      );
  }

  isDisabledSaveButton: boolean = false;
  // ifModifiedEnableSaveButton() {
  //   this.checkIfEditedItemIsDifferentThanInitialItem();

  //   if (this.editedItemIsDifferentThanInitialItem) {
  //     this.isDisabledSaveButton = false;
  //   }
  // }

  reinitializeItemFormBooleanVariable() {
    this.isSubmitedOnce = false;
    this.isDisabledSaveButton = false;
    this.editedItemIsDifferentThanInitialItem = false;
    // this.loadItemIntoItemForm();
  }

  isItemsComparedEquals(
    item1: DestinationCategory,
    item2: DestinationCategory
  ) {
    if (showDebug) {
      console.log('in isItemsComparedEquals() >> ');
      console.log(
        'in isItemsComparedEquals() >> item1 = ' + JSON.stringify(item1)
      );
      console.log(
        'in isItemsComparedEquals() >> item2 = ' + JSON.stringify(item2)
      );
    }

    if (
      this.item.id != this.itemEdited.id ||
      this.item.name != this.itemEdited.name ||
      this.item.description != this.itemEdited.description
    ) {
      return false;
    } else return true;
  }

  updatedItemFromServer!: DestinationCategory;
  isModificationSavedOnServerWithSuccess = false;
  messageIfModificationIsSavedOnServerWithSuccess: string =
    'The modifications was saved with success on server.';

  checkThatModificationWasReallySavedOnServer() {
    console.log(
      'in checkThatModificationWasReallySavedOnServer() >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>'
    );

    setTimeout(() => {
      this.destinationCategoryService
        .getDestinationCategory(this.itemId)
        .subscribe(
          (data) => {
            this.updatedItemFromServer = data;
          },
          (err) => {
            console.error(err);
          },
          () => {
            console.log('updatedItemFromServerInLoop loaded from server');
            console.log(
              'updatedItemFromServerInLoop >>> this.destinationCategoryService.getDestinationCategory(this.itemId)' +
                JSON.stringify(this.updatedItemFromServer)
            );
          }
        );
    }, 2000); // wait first to be saved on server

    if (
      this.isItemsComparedEquals(this.itemEdited, this.updatedItemFromServer)
    ) {
      console.log(
        'in checkThatModificationWasReallySavedOnServer() >> ======= >> items verified and equals with the one from Server'
      );
      this.isModificationSavedOnServerWithSuccess = true;
      this.item = this.updatedItemFromServer;
      this.restoreInitialItemForm();

      console.log(
        'in checkThatModificationWasReallySavedOnServer() >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> in IF'
      );
    }

    console.log(
      'in checkThatModificationWasReallySavedOnServer() >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  END'
    );
  }

  loadItemModifiedAndRetrievedFromServerIntoItemForm() {
    if (this.updatedItemFromServer != undefined) {
      this.itemForm.patchValue({
        id: this.updatedItemFromServer.id,
        name: this.updatedItemFromServer.name,
        description: this.updatedItemFromServer.description,
      });
      if (showDebug)
        console.log(
          'in loadItemModifiedAndRetrievedFromServerIntoItemForm() >> form initialized with item data modified, saved on server and retrieved from server'
        );
    } else {
      console.log(
        'in loadItemModifiedAndRetrievedFromServerIntoItemForm() >> cannot initialize form with item data modified, saved on server and retrieved from server'
      );
      console.log(
        'in loadItemModifiedAndRetrievedFromServerIntoItemForm() >> this.updatedItemFromServer is UNDEFINED'
      );
    }
  }

  loadItemIntoItemForm() {
    this.itemForm.patchValue({
      id: this.item.id,
      name: this.item.name,
      description: this.item.description,
    });
    if (showDebug)
      console.log(
        'in loadItemIntoItemForm() >> form initialized with item data'
      );
  }

  clearItemForm() {
    this.itemForm.patchValue({
      name: '',
      description: '',
    });
    if (showDebug)
      console.log(
        'in clearItemForm() >> form cleared with empty data exept id field'
      );
  }

  restoreInitialItemForm() {
    this.clearItemForm();
    setTimeout(() => {
      this.loadItemIntoItemForm();
    }, 300);
    if (showDebug)
      console.log(
        'in restoreInitialItemForm() >> form reinitialized with with initial item data'
      );
  }

  ngOnDestroy() {
    if (showDebug) {
      console.log('in ngOnDestroy');
      console.log('itemClassName = ' + this.itemClassName + '  ===>  END');
      console.log(
        'componentTypeName = ' + this.componentTypeName + '  ===>  END'
      );
      console.log(
        '===================================================================='
      );
    }
  }

  ifModifiedEnableSaveButton() {}

  onCancelGoToViewOne() {
    this.router.navigate(['../destination-category/view-one', +this.itemId]);
  }
}

//async ngOnInit(): Promise<void> {
//  if (showDebug) console.log('in ngOnInit');

// let letId = +this.activatedRoute.snapshot.parent?.params.id;

// let msTimeToCheck = TTC; // msTimeToCheck = 5000ms // STC = msStepToCheck 50ms
// let msTimeOut = 0;
// let msTimeUntilSuccess = 0;
// while (msTimeUntilSuccess < msTimeToCheck) {
//   msTimeUntilSuccess += msTimeOut;
//   msTimeOut = STC;
//   setTimeout(() => {
//     let letId = +this.activatedRoute.snapshot.parent?.params.id;
//     let timeNeedToRetrieveData = 0;

//     if (letId != undefined) {
//       this.itemId = letId;
//       if (showDebug)
//         console.log(
//           'in ngOnInit >> msTimeUntilSuccess = ' +
//             msTimeUntilSuccess +
//             ' >>>> itemId = ' +
//             this.itemId
//         );
//     } else {
//       timeNeedToRetrieveData += 50;
//       if (showDebug)
//         console.log('timeNeedToRetrieveData = ' + timeNeedToRetrieveData);
//     }

//     if (showDebug)
//       console.log('in ngOnInit >> at end loop >> itemId = ' + this.itemId);
//   }, msTimeOut);
// }

// this.itemId = +this.activatedRoute.snapshot.parent?.params.id;
// if (showDebug) console.log('in ngOnInit >> itemId = ' + this.itemId);
