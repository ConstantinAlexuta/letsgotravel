import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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

  item: DestinationCategory = new DestinationCategory(0, '0', '0');

  itemTESTdescription: string = 'itemTESTdescription';

  itemFormNgModel!: DestinationCategory;
  readonlyAfterSave = ''; //  && Disable Clear and reload

  itemForm = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.minLength(1)]),
    name: new FormControl('', [Validators.required, Validators.minLength(1)]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]),
  });

  itemITEMForm = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.minLength(1)]),
    name: new FormControl('', [Validators.required, Validators.minLength(1)]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]),
  });

  constructor(
    private destinationCategoryService: DestinationCategoryService,
    private activatedRoute: ActivatedRoute
  ) {
    if (showDebug) {
      console.log(
        'in constructor  ====================================================================  EDIT ONE '
      );
      console.log('in constructor  ===  itemClassName = ' + this.itemClassName);
      console.log(
        'in constructor  ===  componentTypeName = ' + this.componentTypeName
      );
    }
    // this.item.id = 0;
    // this.item.name = '0';
    // this.item.description = '0';
  } ////////////////////////////// END constructor

  async ngOnInit(): Promise<void> {
    if (showDebug)
      console.log(
        '---- in ngOnInit   ===================================================================='
      );

    this.itemId = +this.activatedRoute.snapshot.parent?.params.id;

    if (showDebug)
      console.log(
        '---- in ngOnInit >> itemId = ' +
          this.itemId +
          '      BEFORE TIMEOUT   '
      );

    if (showDebug) {
      if (this.itemId != undefined) {
        console.log(
          '---- in ngOnInit >> itemId = ' + this.itemId + ' read it  OK '
        );
      } else {
        console.log(
          '---- in ngOnInit >> itemId = ' +
            this.itemId +
            '   <<<<< this.itemId WAS NOT POSSIBLE TO BE READ IT NOW  <<<<<<<<<<<  ISSUE'
        );
      }
    }

    setTimeout(() => {
      this.getItem(this.itemId);
      if (showDebug)
        console.log(
          '---- in ngOnInit >> getItem >> item = ' +
            JSON.stringify(this.item) +
            '    >> 100 ms'
        );
    }, 100);

    setTimeout(() => {
      if (showDebug)
        console.log(
          '---- in ngOnInit >> getItem >> item = ' +
            JSON.stringify(this.item) +
            '    >> 300 ms'
        );
    }, 300);

    setTimeout(() => {
      this.getItem(this.itemId);
      if (showDebug)
        console.log(
          '---- in ngOnInit >> getItem >> item = ' +
            JSON.stringify(this.item) +
            '   // RESERVE UPLOADED AGAIN AFTER 400 ms'
        );
    }, 400);

    setTimeout(() => {
      this.loadItemIntoItemForm();
      if (showDebug)
        console.log('---- in ngOnInit >> in loadItemIntoItemForm()');
    }, 600);

    this.setDelayToShowIf();
  } ////////////////////////////// END ngOnInit

  getItem(id: number) {
    if (showDebug) console.log('in getItem ');
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
  } ////////////////////////////// END getItem

  isSubmitedOnce: boolean = false;
  submitForm() {
    if (showDebug)
      console.log(
        '////////////////////////////// in submitForm >>   ===================================================================='
      );

    if (!this.itemForm.valid) {
      this.showMessageIfItemFormIsInvalid = true;
      setTimeout(() => {
        this.showMessageIfItemFormIsInvalid = false;
      }, 10000);
    } // if (!this.itemForm.valid)
    else {
      this.showMessageIfItemFormIsInvalid = false;
      this.isFormItemEqualWithInitialItem();

      // if (!this.isSubmitedOnce) {
      // }

      if (!this.editedItemIsDifferentThanInitialItem) {
        this.showMessageItemHasNotthingChanged = true;

        // setTimeout(() => {
        //   this.loadItemIntoItemForm();
        //   if (showDebug)
        //     console.log(
        //       '////////////////////////////// in submitForm >> this.loadItemIntoItemForm() after 600 ms'
        //     );
        // }, 200);

        this.itemForm.markAsUntouched;
        this.itemForm.markAsPristine;
      }

      if (this.editedItemIsDifferentThanInitialItem) {
        this.destinationCategoryService.replaceDestinationCategory(
          this.itemId,
          this.itemForm.value
        );

        this.checkIfWasSavedWithBankSpacesAtMarginsAndShowMessageForTheseMiliSeconds(
          10000
        );

        if (showDebug)
          console.log(
            '////////////////////////////// in submitForm >> call service >> replace method >> item send it to PUT on server'
          );

        this.isSubmitedOnce = true;

        this.isModificationSavedOnServerAfter2000ms();

        setTimeout(() => {
          if (this.isModificationSavedOnServerWithSuccess) {
            this.showMessageIfModificationIsSavedOnServerWithSuccess = true;
            this.showMessageIfModificationIsSavedOnServerWithFailure = false;
            this.showMessageItemHasNotthingChanged = false;
            this.toggleCancelOrExitButtonName();
            // this.loadItemModifiedAndRetrievedFromServerIntoItemForm();
          }
        }, 2500);

        setTimeout(() => {
          if (!this.isModificationSavedOnServerWithSuccess) {
            this.showMessageIfModificationIsSavedOnServerWithFailure = true;
            this.showMessageItemHasNotthingChanged = false;
            this.showMessageIfModificationIsSavedOnServerWithSuccess = false;
            this.cancelOrExitButtonName = 'Cancel';
          }
        }, 4000);
      }

      this.isSubmitedOnce = true;
      this.isDisabledSaveButton = true;

      setTimeout(() => {
        // this.loadItemIntoItemForm();
      }, 100);

      setTimeout(() => {
        this.showMessageItemHasNotthingChanged = false;
        this.showMessageIfModificationIsSavedOnServerWithSuccess = false;
        this.showMessageIfModificationIsSavedOnServerWithFailure = false;
      }, 10000);
    } // if (this.itemForm.valid)
    //
  } ////////////////////////////// END  submitForm

  showMessageIfItemFormIsInvalid: boolean = false;
  messageIfItemFormIsInvalid: string =
    'Please fill all the required fields with valid input.';

  editedItemIsDifferentThanInitialItem: boolean = false;
  showMessageItemHasNotthingChanged = false;
  messageItemHasNotthingChanged: string =
    'The item was not saved because is the same like the initial one.';
  itemEdited!: DestinationCategory;

  isFormItemEqualWithInitialItem(): boolean {
    this.itemEdited = this.itemForm.value;

    if (showDebug) {
      console.log(
        'isFormItemEqualWithInitialItem() >>  let itemEdited:   DestinationCategory = this.itemForm.value = ' +
          JSON.stringify(this.itemEdited)
      );
      console.log(
        'isFormItemEqualWithInitialItem() >>  let item INITIAL: DestinationCategory = this.itemForm.value = ' +
          JSON.stringify(this.item)
      );
    }

    if (!this.isItemsComparedEquals(this.item, this.itemEdited)) {
      this.editedItemIsDifferentThanInitialItem = true;
      if (showDebug)
        console.log(
          'isFormItemEqualWithInitialItem() >>  this.item == this.itemEdited >>> ARE DIFFERENT'
        );
    } else {
      this.editedItemIsDifferentThanInitialItem = false;
      if (showDebug)
        console.log(
          'isFormItemEqualWithInitialItem() >>  this.item == this.itemEdited >>> ARE EQUALS'
        );
    }

    return !this.editedItemIsDifferentThanInitialItem;
  } //////////////////////// END isFormItemEqualWithInitialItem

  // trimFieldsOfThisItem(itemToTrim: DestinationCategory): DestinationCategory {
  //   let itemTemp = new DestinationCategory();

  //   itemTemp.id = itemToTrim.id;
  //   itemTemp.name = itemToTrim.name?.trim();
  //   itemTemp.description = itemToTrim.description?.trim();

  //   return itemTemp;
  // }

  isDisabledSaveButton: boolean = false;

  isItemsComparedEquals(
    item1: DestinationCategory,
    item2: DestinationCategory
  ) {
    if (showDebug) {
      console.log('isItemsComparedEquals() >> ');
      console.log(
        'isItemsComparedEquals() >> item1 = ' + JSON.stringify(item1)
      );
      console.log(
        'isItemsComparedEquals() >> item2 = ' + JSON.stringify(item2)
      );
    }

    if (
      item1.id != item2.id ||
      item1.name != item2.name ||
      item1.description != item2.description
    ) {
      return false;
    } else return true;
  } /////////////////////// END isItemsComparedEquals

  showExitOption: boolean = false;
  cancelOrExitButtonName: string = 'Cancel';
  toggleCancelOrExitButtonName() {
    this.showExitOption = !this.showExitOption;
    if (this.showExitOption) {
      this.cancelOrExitButtonName = 'Exit ';
    } else {
      this.cancelOrExitButtonName = 'Cancel';
    }
  }

  ///
  updatedItemFromServer!: DestinationCategory;
  isModificationSavedOnServerWithSuccess = false;
  isModificationSavedOnServerWithFailure = false;

  showMessageIfModificationIsSavedOnServerWithSuccess: boolean = false;
  showMessageIfModificationIsSavedOnServerWithFailure: boolean = false;

  messageIfModificationIsSavedOnServerWithSuccess: string =
    'The modifications was saved with success on server.';
  messageIfModificationIsSavedOnServerWithFailure: string =
    'Failure on salvation. Please try to save again.';

  isModificationSavedOnServerAfter2000ms(): boolean {
    if (showDebug)
      console.log('isModificationSavedOnServerAfter2000ms() >>>>>>');

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
            if (showDebug)
              console.log(
                'isModificationSavedOnServerAfter2000ms() >>>>>> updatedItemFromServer loaded back from server >> ' +
                  JSON.stringify(this.updatedItemFromServer)
              );
          }
        );
    }, 1500); // wait first to be saved on server

    setTimeout(() => {
      if (
        this.isItemsComparedEquals(this.itemEdited, this.updatedItemFromServer)
      ) {
        if (showDebug)
          console.log(
            'isModificationSavedOnServerAfter2000ms() >>>>>> itemEdited is equal with updatedItemFromServer'
          );
        this.isModificationSavedOnServerWithSuccess = true;
        this.item = this.updatedItemFromServer;
        this.itemEdited = this.updatedItemFromServer;
      } else {
        this.isModificationSavedOnServerWithSuccess = false;
      }
      return this.isModificationSavedOnServerWithSuccess;
    }, 2500); // wait verification until retrieve data from server
    ///
    return this.isModificationSavedOnServerWithSuccess;
  } //////////////////////////////// END isModificationSavedOnServerAfter2000ms

  showMessageIfWasSavedWithBankSpacesAtMargins: boolean = false;
  messageIfWasSavedWithBankSpacesAtMargins: string =
    'The item was saved with empty spaces at margins of at least one field.';
  checkIfWasSavedWithBankSpacesAtMarginsAndShowMessageForTheseMiliSeconds(
    ms: number
  ) {
    let itemFromFormTrimed: DestinationCategory = this.itemForm.value;
    let itemFromForm: DestinationCategory = this.itemForm.value;

    itemFromFormTrimed.name = itemFromForm.name!.trim();
    itemFromFormTrimed.description = itemFromForm.description!.trim();

    if (!this.isItemsComparedEquals(itemFromFormTrimed, itemFromForm)) {
      this.showMessageIfWasSavedWithBankSpacesAtMargins = true;

      setTimeout(() => {
        this.showMessageIfWasSavedWithBankSpacesAtMargins = false;
      }, ms);
    }
  }

  // loadItemModifiedAndRetrievedFromServerIntoItemForm() {
  //   if (this.updatedItemFromServer != undefined) {
  //     this.itemForm.patchValue({
  //       id: this.updatedItemFromServer.id,
  //       name: this.updatedItemFromServer.name,
  //       description: this.updatedItemFromServer.description,
  //     });
  //     if (showDebug)
  //       console.log(
  //         'in loadItemModifiedAndRetrievedFromServerIntoItemForm() >> form initialized with item data modified, saved on server and retrieved from server'
  //       );
  //   } else {
  //     console.log(
  //       'in loadItemModifiedAndRetrievedFromServerIntoItemForm() >> cannot initialize form with item data modified, saved on server and retrieved from server'
  //     );
  //     console.log(
  //       'in loadItemModifiedAndRetrievedFromServerIntoItemForm() >> this.updatedItemFromServer is UNDEFINED'
  //     );
  //   }
  // }

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

  showIf: boolean = false;
  setDelayToShowIf() {
    setTimeout(() => {
      this.showIf = true;
    }, 1000);
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
