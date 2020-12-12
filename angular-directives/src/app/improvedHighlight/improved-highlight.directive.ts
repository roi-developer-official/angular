import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appImprovedHighlight]'
})
export class ImprovedHighlightDirective implements OnInit{
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';

  //third way a Host Binding
  @HostBinding('style.backgroundColor') backgroundColor:string;


  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    this.backgroundColor = this.defaultColor
    //first way: just renderer
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'gray') // another argument can be [importent]
  }

      
  //secondt way: a HostListener.
  @HostListener('mouseenter') mouseOver(eventData: Event){  
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'gray') // another argument can be [importent]

    //a part from the third way
    this.backgroundColor = this.highlightColor
  }
  
  
  @HostListener('mouseleave') mouseLeave(eventData: Event){  
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'white') // another argument can be [importent]

    //a part from the third way
    this.backgroundColor = this.defaultColor
  }

}
