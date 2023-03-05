import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appInfinityScroll]',
  standalone: true,
})
export class InfinityScrollDirective {
  /** Event scroll down. */
  @Output() onScrollDown = new EventEmitter<void>();

  /**
   * Validate scroll for executed new petition.
   *
   * @param scroll Event of callback scroll.
   */
  @HostListener('scroll', ['$event']) private validateScroll(
    scroll: Event
  ): void {
    const target = scroll?.target as HTMLElement;
    const elementScrollHeight = target?.scrollHeight;
    const elementViewHeight = target?.offsetHeight;
    const scrollLocation = target?.scrollTop;
    const limit = elementScrollHeight - elementViewHeight - 50;
    if (scrollLocation > limit) {
      this.onScrollDown.emit();
    }
  }
}
