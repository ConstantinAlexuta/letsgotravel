import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DestinationCategoryService } from '../destination-category.service';

@Component({
  selector: 'app-destination-category-view-one',
  templateUrl: './destination-category-view-one.component.html',
  styleUrls: ['./destination-category-view-one.component.scss']
})
export class DestinationCategoryViewOneComponent implements OnInit {

  pageBrandViewOneItem!: string;

  currentId: any;

  destinationCategory: any;

  constructor(
    private destinationCategoryService: DestinationCategoryService,
    private activatedRoute: ActivatedRoute
  ) { }

  async ngOnInit(): Promise<void> {
    // this.currentId = this.activatedRoute.snapshot.params.id;
    this.currentId = this.activatedRoute.snapshot.parent?.params.id;
    await this.getDestinationCategory(this.activatedRoute.snapshot.parent?.params.id);
    // await this.getDestinationCategory(this.activatedRoute.snapshot.params.id);
    // await this.getDestinationCategory(this.activatedRoute.parent?.params.subscribe(){

    // });
    this.pageBrandViewOneItem = this.destinationCategory.name;
  }

  async getDestinationCategory(id: number) {
    await this.destinationCategoryService.getDestinationCategory(id).subscribe(
      data => { this.destinationCategory = data },
      err => console.error(err),
      () => console.log('destination category with id ' + id + ' was loaded')
    );
  }

}
