import { Component, OnInit } from '@angular/core';
import { ServiceTypeService } from '../service-type.service';

@Component({
  selector: 'app-service-type-view-all',
  templateUrl: './service-type-view-all.component.html',
  styleUrls: ['./service-type-view-all.component.scss']
})
export class ServiceTypeViewAllComponent implements OnInit {

  constructor(
    private serviceTypeService: ServiceTypeService
  ) { }

  serviceTypes: any;
 
  ngOnInit(): void {
    this.getServiceTypes();
  }

  getServiceTypes() {
    this.serviceTypeService.getTypesServices().subscribe(
      data => { this.serviceTypes = data },
      err => console.error(err),
      () => console.log('ServiceTypes loaded')
    );
  }

}
