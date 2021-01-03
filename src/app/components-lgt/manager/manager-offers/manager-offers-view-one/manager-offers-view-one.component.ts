import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ManagerOffersService } from '../manager-offers.service';

@Component({
  selector: 'app-manager-offers-view-one',
  templateUrl: './manager-offers-view-one.component.html',
  styleUrls: ['./manager-offers-view-one.component.scss']
})
export class ManagerOffersViewOneComponent implements OnInit {

  public offer: any;

  constructor(
    private managerOffersService: ManagerOffersService,
    private activatedRoute: ActivatedRoute
  ) {

   }

  async ngOnInit(): Promise<void> {
    await this.getOffer(this.activatedRoute.snapshot.params.id);
  }

  async getOffer(id: number) {
    await this.managerOffersService.getOffer(id).subscribe(
      data => { this.offer = data },
      err => console.error(err),
      () => console.log('offer with id = ' + id + ' was loaded')
    );
  }

  deleteOffer(id: number) {
    this.managerOffersService.deleteOffer(id);
    console.log('in component: offer with id = ' + id + ' was deleted');
  }

}
