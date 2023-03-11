import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';
// @ts-ignore
import { Tooltip } from 'bootstrap';
import { randomId } from '../../../utils/functions';
import { TTooltipsPosition } from './types/tooltips.types';

@Directive({
  selector: '[tooltip]',
})
export class TooltipsDirective implements OnInit, OnDestroy {
  @Input('tooltip') title!: string;
  @Input('tooltipPosition') placement: TTooltipsPosition = 'top';
  @Input('tooltipIsHtml') html: boolean = true;
  @Input('tooltipContainer') container: string | HTMLElement | false = false;
  @Output('tooltipClose') flaClose = new EventEmitter<any>();
  private id: string = randomId('tooltip');
  private tooltip: Tooltip;
  private element!: HTMLElement;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.element = this.elementRef.nativeElement;
  }

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.init();
  }

  ngOnDestroy(): void {
    this.tooltip?.hide();
    this.tooltip?.dispose();
  }

  private init(): void {
    if (this.element.tagName.toLowerCase().includes('fla')) {
      this.element.classList.add('d-inline-block');
    }

    this.element.id = this.id;

    if (this.title) {
      this.tooltip = Tooltip.getOrCreateInstance(this.element, {
        title: this.title,
        placement: this.placement,
        html: this.html,
        container: this.container,
      });
    }

    this.renderer.listen(this.element, 'hidden.bs.tooltip', ($event) =>
      this.flaClose.next($event),
    );
  }
}
