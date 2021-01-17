import { Component, OnInit } from '@angular/core';
import { DestinationCategory } from 'src/app/shared/interfaces/destination-category';
import { SERVER_API_V1 } from 'src/app/app.constants';
import { ItemService } from 'src/app/shared/services/item.service';

@Component({
  selector: 'app-destination-category-view-all',
  templateUrl: './destination-category-view-all.component.html',
  styleUrls: ['./destination-category-view-all.component.scss'],
})
export class DestinationCategoryViewAllComponent implements OnInit {
  //
  // ###################################################
  itemNameItem: string = 'destination category';
  itemDashItem: string = 'destination-category';
  path: string = SERVER_API_V1 + this.itemDashItem; //  e.g.:  '/server/api/v1/destination-category';
  items!: Array<DestinationCategory>;
  itemHeaders: string[] = ['Id', 'Name', 'Description', 'Status'];
  itemFields: string[] = ['id', 'name', 'description', 'status'];
  // ###################################################
  //

  constructor(private itemService: ItemService) {}

  async ngOnInit(): Promise<void> {
    await this.getItems();
  }

  async getItems() {
    (await this.itemService.getItems(this.path)).subscribe(
      (data) => {
        this.items = data;
        console.log(data);
      },
      (err) => {
        console.error(err);
      },
      () => {
        console.log(this.itemNameItem + ' items was loaded from server');
      }
    );
  }
}
