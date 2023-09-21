import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHightLight]'
})
export class HightLightDirective{

  @HostBinding('class.blackBackground') isBlackBackground:boolean = false;

  @HostListener('mouseenter') onMouseEnter(){
    this.isBlackBackground = true;
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.isBlackBackground = false;
  }

}
