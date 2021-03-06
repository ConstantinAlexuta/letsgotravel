import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {

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
