import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-type-dashboad',
  templateUrl: './service-type-dashboad.component.html',
  styleUrls: ['./service-type-dashboad.component.scss']
})
export class ServiceTypeDashboadComponent implements OnInit {


  navBarDetails: string[][] = [
    [
      "New one",
      "/service-types/new-one"
    ],
    [
      "New more",
      "/service-types/new-more"
    ],
    [
      "View all",
      "/service-types"
    ],
    [
      "Edit all",
      "/service-types/edit"
    ]
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
