import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PrimengGalleriaPhotoService } from 'src/app/shared/services/primeng-galleria-photo.service';
// import {GalleriaModule} from 'primeng/galleria';

@Component({
  selector: 'app-primeng-galleria-indicator',
  templateUrl: './primeng-galleria-indicator.component.html',
  styleUrls: ['./primeng-galleria-indicator.component.scss']
})
export class PrimengGalleriaIndicatorComponent implements OnInit {

  images!: any[];

    responsiveOptions:any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    constructor(private primengGalleriaPhotoService: PrimengGalleriaPhotoService) { }

    ngOnInit() {
        // this.primengGalleriaPhotoService.getImages().then(images =>{ 
        //     this.images = images
        // });
    }
}