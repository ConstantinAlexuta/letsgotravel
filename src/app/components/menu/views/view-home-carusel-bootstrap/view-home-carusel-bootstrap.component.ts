import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-home-carusel-bootstrap',
  templateUrl: './view-home-carusel-bootstrap.component.html',
  styleUrls: ['./view-home-carusel-bootstrap.component.scss']
})
export class ViewHomeCaruselBootstrapComponent implements OnInit {


  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  public images2: string[] = [
      "assets\lgt\images\carousel\bg1.jpg",
      "assets\lgt\images\carousel\Bora-Bora-1920-x-606.jpg"
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
