import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.scss']
})
export class TermsAndConditionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


// div.relative {
//   position: relative;
//   width: 400px;
//   height: 200px;
//   border: 3px solid #73AD21;
// }

// div.absolute {
//   position: absolute;
//   top: 80px;
//   right: 0;
//   width: 200px;
//   height: 100px;
//   border: 3px solid #73AD21;
// }


  //  myEl = document.getElementById('heading1');

  // test = this.myEl!.addEventListener('click', function() {
  //     alert('Hello world');
  // }, false);

  // test2 = this.myEl!.addEventListener('click', function() {
  //     alert('Hello world again!!!');
  // }, false);

  scroll(element: any) { 
    window.scrollTo(element.yPosition);
  }






   scrollToTopOfThisElement3() { 




    //  element = document.getElementById("my-el");
    var actualActiveElement = document.activeElement;
      // element.scrollIntoViewIfNeeded();
      // actualActiveElement.scrollIntoViewIfNeeded();

      // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView

      var actualActiveElement = document.activeElement;
      var viewportOffsetOfActiveElement = actualActiveElement!.getBoundingClientRect();
      var topOfThisElement = viewportOffsetOfActiveElement.top;
       var element: any = actualActiveElement;
       this.previouslyElementYEndPosition = 2;
      // element.scrollIntoView();
// element.scrollIntoView("true"); // Boolean parameter
// element.scrollIntoView({block: "start", inline: "nearest"}); // Boolean parameter
element.scrollIntoView({block: "end", inline: "nearest"}); // Boolean parameter
// element.scrollIntoView({block: "start", inline: "nearest"}); // Boolean parameter
// element.scrollIntoView({block: "start", inline: "nearest"}); // Boolean parameter
// element.scrollIntoView({block: "start", inline: "nearest"}); // Boolean parameter
// element.scrollIntoView(scrollIntoViewOptions); // Object parameter
   }

    
    async scrollToTopOfThisElement2() {
        
        await this.delay(300);

        var actualActiveElement = document.activeElement;
        var bodyRect = document.body.getBoundingClientRect(),
        elemRect = actualActiveElement!.getBoundingClientRect(),
        offset   = elemRect.top - bodyRect.top;

        
        this.previouslyElementYEndPosition = offset;
        //  alert('Element is ' + offset + ' vertical pixels from <body>');
         console.log('Element is ' + offset + ' vertical pixels from <body>');

         var rect = actualActiveElement!.getBoundingClientRect(); 
        console.log("actualActiveElement:  " + rect.top, rect.right, rect.bottom, rect.left);

        if(this.previouslyElement == null) {
          this.previouslyElement = actualActiveElement;
        }
        var rectP = this.previouslyElement!.getBoundingClientRect(); 
        console.log("previouslyElement:  " + rectP.top, rectP.right, rectP.bottom, rectP.left);

        this.previouslyElement = actualActiveElement;

        // this.delay(1000);
        // await this.delay(300);
        var spaceFromTop = 120;
        window.scrollBy(0, rect.top - spaceFromTop);
        console.log("rect.top - spaceFromTop:  " + rect.top + " - " + spaceFromTop + ": " + (rect.top - spaceFromTop));


  }

      previouslyElement: any;
      previouslyElementYEndPosition: number = 0;



      delay(ms: number) {
        return new Promise( resolve => setTimeout(resolve, ms) );
      }

      async scrollToTopOfThisElement() {
        // await this.delay(300);
        var miliSecondsDelay = 400; // matters on long text content
        await  new Promise( resolve => setTimeout(resolve, miliSecondsDelay) );
        var spaceFromTop = document!.getElementById("top_left_navbar_mobile_and_desktop_common")!.getBoundingClientRect().height;
        // var spaceFromTop = 120;  // depend if is mobile or desktop => hight of navbar
        window.scrollBy(0, document!.activeElement!.getBoundingClientRect().top - spaceFromTop - 15);
      }

  



  moveThisElementOnTopPosition() {


    // var x = document.activeElement?.id;
    var actualActiveElement = document.activeElement;
    var viewportOffsetOfActiveElement = actualActiveElement!.getBoundingClientRect();
    var topOfThisElement = viewportOffsetOfActiveElement.top;
    // window.scrollBy(topOfThisElement);
    // window.scrollBy(0, topOfThisElement + 150);

    // document.getElementById("togglemenu").addEventListener("click", changedisplay,false);
    // document.activeElement!.addEventListener("click", moveThisElementOnTopPosition,false);



    // var rect = actualActiveElement!.getBoundingClientRect(); 
    // console.log(rect.top, rect.right, rect.bottom, rect.left);

    // console.log(actualActiveElement);
    // console.log("teste");
    // alert("teste");

    // var viewportOffset = actualActiveElement!.getBoundingClientRect().top;

    // var viewportOffset = actualActiveElement!.getBoundingClientRect();
    // these are relative to the viewport, i.e. the window
    // var top = viewportOffset.top;
    // var left = viewportOffset.left;
    // const { top, left } = viewportOffset

    // var element = document.getElementById('myElement');
    // var topPos = element.getBoundingClientRect().top + window.scrollY;
    // var leftPos = element.getBoundingClientRect().left + window.scrollX;

    // window.scrollY || window.pageYOffset

  }

  // function
  //  findPos(id: any): void {
  //   var node = document.getElementById(id);     
  //   var curtop = 0;
  //   var curtopscroll = 0;
  //   if (node!.offsetParent) {
  //       do {
  //           curtop += node!.offsetTop;
  //           curtopscroll += node!.offsetParent ? node!.offsetParent.scrollTop : 0;
  //       } while (node! = node!.offsetParent);

  //       alert(curtop - curtopscroll);
  //   }
// }




}
