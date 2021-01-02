import { Component, OnInit } from '@angular/core';
import { IncludedServiceService } from '../included-service.service';

@Component({
  selector: 'app-included-service-view-all',
  templateUrl: './included-service-view-all.component.html',
  styleUrls: ['./included-service-view-all.component.scss']
})
export class IncludedServiceViewAllComponent implements OnInit {

  constructor(
    private includedServiceService: IncludedServiceService
  ) { 
    
  }

  includedServices: any;
 
  ngOnInit(): void {
    this.getServiceTypes();
  }

  getServiceTypes() {
    this.includedServiceService.getIncludedServices().subscribe(
      data => { this.includedServices = data },
      err => console.error(err),
      () => console.log('IncludedService loaded')
    );
  }

}