import { async } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { DestinationCategory } from 'src/app/shared/interfaces/destination-category';
import { SERVER_API_V1 } from 'src/app/app.constants';
import { ItemService } from 'src/app/shared/services/item.service';

@Component({
  selector: 'app-destination-category-view-one',
  templateUrl: './destination-category-view-one.component.html',
  styleUrls: ['./destination-category-view-one.component.scss'],
})
export class DestinationCategoryViewOneComponent implements OnInit {
  //
  // ###################################################
  //
  itemNameItem: string = 'destination category';
  itemDashItem: string = 'destination-category';

  item!: DestinationCategory;
  itemHeaders: string[] = ['Id', 'Name', 'Description', 'Status'];
  itemFields: string[] = ['id', 'name', 'description', 'status'];
  //
  // ###################################################
  //
  currentId: any;
  newIdRequest: any = -1;
  pathId!: string;
  pageBrandViewOneItem!: string;
  currentShortRouter!: string; // view-one
  //
  // ###################################################
  //

  constructor(
    private itemService: ItemService,
    private activatedRoute: ActivatedRoute
  ) {
    this.currentShortRouter = activatedRoute.snapshot.url[0].path; // view

    setInterval(() => {
      this.newIdRequest = this.activatedRoute.snapshot.parent?.params.id;

      if (this.currentId != this.newIdRequest) {
        this.currentId = this.newIdRequest;
        this.pathId = SERVER_API_V1 + this.itemDashItem + '/' + this.currentId; //  e.g.:  '/server/api/v1/destination-category/id';
        this.getItem(this.pathId);
        this.pageBrandViewOneItem = this.item.name!;
      }
    }, 100);
  }

  async ngOnChanges(changes: SimpleChanges): Promise<void> {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.currentId = await this.activatedRoute.snapshot.parent?.params.id;
    this.pathId =
      SERVER_API_V1 + this.itemDashItem + '/' + (await this.currentId); //  e.g.:  '/server/api/v1/destination-category/id';
    await this.getItem(this.pathId);

    this.pageBrandViewOneItem = this.item.name!;
  }

  async ngOnInit(): Promise<void> {
    //
    // ###################################################
    //
    this.currentId = await this.activatedRoute.snapshot.parent?.params.id;
    this.pathId =
      SERVER_API_V1 + this.itemDashItem + '/' + (await this.currentId); //  e.g.:  '/server/api/v1/destination-category/id';
    //
    // ###################################################
    //

    this.showItemListEmptyMessageAfterDelay();

    await this.getItem(this.pathId);

    this.pageBrandViewOneItem = this.item.name!;
  }

  async getItem(pathId: string) {
    (await this.itemService.getItem(pathId)).subscribe(
      (data) => {
        this.item = data;
      },
      (err) => console.error(err),
      () =>
        console.log('destination category with path ' + pathId + ' was loaded')
    );
  }

  isAfterDelay: boolean = false;

  showItemListEmptyMessageAfterDelay() {
    setTimeout(() => {
      this.isAfterDelay = true;
    }, 1500);
  }
}
