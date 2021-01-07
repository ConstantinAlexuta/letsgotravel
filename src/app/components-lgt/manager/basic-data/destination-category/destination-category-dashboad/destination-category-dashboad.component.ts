import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destination-category-dashboad',
  templateUrl: './destination-category-dashboad.component.html',
  styleUrls: ['./destination-category-dashboad.component.scss']
})
export class DestinationCategoryDashboadComponent implements OnInit {

  pageBrandItem: string = "Destination categories";
  
  constructor(
    private activatedRoute: ActivatedRoute
  ) { 
    
  }

  ngOnInit(): void {
  }

}
