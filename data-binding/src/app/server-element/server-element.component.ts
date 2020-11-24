import { Component, ContentChild, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input('srvElement') element: {type:string, name:string, content:string};
  @ContentChild('contentParagraph') paragraph: ElementRef;

  ngAfterContentInit(){
    console.log('afterContent: ',this.paragraph.nativeElement.textContent)
  }

  //2:
  ngOnInit(){
  }
  //1:
  constructor() {
    console.log('ctor called')
  }
  
  // like use Effect with array paramaters
  ngOnChanges(changes: SimpleChanges){
  
    console.log('onChange called')
    console.log(changes) // the current and previos value of the elements in the component, if it is the first change.
  }



}

//lifecycles:
/*
ngOnChange: called after a bound input property changes
ngOnInit: called once the component have been initialized
ngDoCheack: called during every "change detection cycle"
ngAfterContentInit: called after content (ng-content) has been projected into view, content is the contentl like contentChild
ngAfterContentCheacked: called every time the projected content has been cheacked
ngAfterViewInit: called after the component view (and child vies) has been initialized, view is the view elements like viewChild
ngAfterViewCheacked: called every time the view (and child views) have been checked
ngOnDestroy: calles once the component is about to be destroyed
 */