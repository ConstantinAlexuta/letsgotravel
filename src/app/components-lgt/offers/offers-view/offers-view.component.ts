import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers-view',
  templateUrl: './offers-view.component.html',
  styleUrls: ['./offers-view.component.scss']
})
export class OffersViewComponent implements OnInit {


  
offers: any[] = [
    {
      "offer1": {
        "src": "assets/lgt/offers/offer0000000000001/img.png",
        "hotel": {
          "name": "TÊT ROUGE RESORT 4*"
        },
        "city": {
          "name": "Saint Lucia",
          "full-name": "La Pointe, Soufriere Quarter, Saint Lucia"
        }
      },
      "offer2": {
        "src": "assets\lgt\offers\offer0000000000001\img.png",
        "hotel": {
          "name": "TÊT ROUGE RESORT 4*"
        },
        "city": {
          "name": "Saint Lucia",
          "full-name": "La Pointe, Soufriere Quarter, Saint Lucia"
        }
      },"offer3": {
        "src": "assets\lgt\offers\offer0000000000001\img.png",
        "hotel": {
          "name": "TÊT ROUGE RESORT 4*"
        },
        "city": {
          "name": "Saint Lucia",
          "full-name": "La Pointe, Soufriere Quarter, Saint Lucia"
        }
      }
    }
  ];
  

   

  constructor() { }

  ngOnInit(): void {
  }

}
