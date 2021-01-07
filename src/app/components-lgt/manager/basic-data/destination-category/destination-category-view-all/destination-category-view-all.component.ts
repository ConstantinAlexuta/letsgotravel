import { DestinationCategoryService } from './../destination-category.service';
import { Component, OnInit } from '@angular/core';
import { DestinationCategory } from 'src/app/shared/interfaces/destination-category';

@Component({
  selector: 'app-destination-category-view-all',
  templateUrl: './destination-category-view-all.component.html',
  styleUrls: ['./destination-category-view-all.component.scss'],
})
export class DestinationCategoryViewAllComponent implements OnInit {
  // destinationCategories!: DestinationCategoryInterface[];
  // destinationCategories: any;

  destinationCategories!: Array<DestinationCategory>;

  constructor(private destinationCategoryService: DestinationCategoryService) {}

  async ngOnInit(): Promise<void> {
    await this.getDestinationCategories();
  }

  async getDestinationCategories() {
    // this.destinationCategories =
    // this.destinationCategoryService
    //   .getDestinationCategories()
    //   .toPromise()
    //   .then(
    //     (data) => {
    //       this.destinationCategories = data;
    //       console.log(JSON.stringify(data));
    //     },
    //     (err) => {
    //       console.error(err);
    //       console.error(
    //         'error in service component number ... in getItems method'
    //       );
    //     }
    //   );

    // this.destinationCategories = this.destinationCategoryService.getDestinationCategories().toPromise();

    this.destinationCategoryService.getDestinationCategories().subscribe(
      (data) => {
        this.destinationCategories = data;
        console.log(data);
      },
      (err) => {
        console.error(err);
      },
      () => {
        console.log('destination categories loaded');
      }
    );
    // }
  }
}
