import {Directive, ElementRef, OnInit} from '@angular/core'

@Directive({
    selector:'[appBasicHighlight]', //this will be recognize as a attribue, this can also be 'appBasicHighlight' and refered with <appBasicHighlight></appBasicHighlight>
})
export class BasicHighlightDirective implements OnInit{
    constructor(private elementRef:ElementRef){}
    
    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor = 'blue';
    }


}