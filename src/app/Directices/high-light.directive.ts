import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {
  @Input() appHighLight = 'orange';

  constructor(private el: ElementRef) {

   }

   ngOnInit(): void {
    console.log('sang 456', this.appHighLight);
    this.el.nativeElement.style.color = this.appHighLight;

   }

}
