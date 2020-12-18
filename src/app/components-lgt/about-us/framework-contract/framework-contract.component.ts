import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-framework-contract',
  templateUrl: './framework-contract.component.html',
  styleUrls: ['./framework-contract.component.scss']
})
export class FrameworkContractComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  async scrollToTopOfThisElement() {
      // await this.delay(300);
      var miliSecondsDelay = 400; // matters on long text content
      await  new Promise( resolve => setTimeout(resolve, miliSecondsDelay) );
      var spaceFromTop = document!.getElementById("top_left_navbar_mobile_and_desktop_common")!.getBoundingClientRect().height;
      // var spaceFromTop = 120;  // depend if is mobile or desktop => hight of navbar
      window.scrollBy(0, document!.activeElement!.getBoundingClientRect().top - spaceFromTop - 15);
  }
  
}
