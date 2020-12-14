import { CarouselService } from './../carousel.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  // ng-bootstrap
  constructor(private carouselService: CarouselService) { }

  ngOnInit(): void {
    // this.carouselService.getImages().then(images => this.images = images);
  }

  // images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/900/500`);
  images: any[] = [

    "src\assets\lgt\images\carousel\bg1.jpg"
    // "src/assets/lgt/images/carousel/bg1.jpg"

    // "C:/Users/Constantin/IdeaProjects/lgt/lgt-ui/src/assets/lgt/images/carousel/bg1.jpg",
      // "C:/Users/Constantin/IdeaProjects/lgt/lgt-ui/src/assets/lgt/images/carousel/Bora-Bora-1920-x-606.jpg"
    
  ];

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', {static : true}) carousel!: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

}
