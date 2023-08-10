import { ComponentRef, Directive, ElementRef, HostListener, Input, ViewContainerRef } from '@angular/core';
import { TooltipComponent } from './tooltip/tooltip.component';

@Directive({
    selector: '[tooltip]'
})
export class TooltipDirective {
    @Input() tooltip: string = '';

    private componentRef: ComponentRef<any> | null = null;

    constructor(
        private elementRef: ElementRef,
        private viewContainerRef: ViewContainerRef
    ) {}

    @HostListener('mouseenter')
    onMouseEnter(): void {
        if (localStorage.getItem('showTooltips') !== 'true') {
            return;
        }

        if (this.componentRef === null) {
            this.componentRef = this.viewContainerRef.createComponent(TooltipComponent);
            this.componentRef.instance.tooltip = this.tooltip;
            const { left, right, bottom } = this.elementRef.nativeElement.getBoundingClientRect();
            this.componentRef.instance.left = (right - left) / 2 + left;
            this.componentRef.instance.top = bottom;
        }
    }

    @HostListener('mouseleave')
    onMouseLeave(): void {
        this.destroy();
    }

    ngOnDestroy(): void {
        this.destroy();
    }

    private destroy(): void {
        if (this.componentRef !== null) {
            this.componentRef.destroy();
            this.componentRef = null;
        }
    }
}
