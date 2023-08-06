import { Component, ElementRef, ViewChild, ViewRef } from '@angular/core';

@Component({
    selector: 'dnd-tooltip',
    templateUrl: './tooltip.component.html',
    styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {
    @ViewChild('ref') tooltipViewRef: ElementRef<ViewRef> | undefined;

    tooltip: string = '';

    top: number = 0;
    left: number = 0;
}
