import { KeyValue } from '@angular/common';
import { Component } from '@angular/core';

import { DataService } from '../../../data.service';

@Component({
    selector: 'dnd-saving-throws',
    templateUrl: './saving-throws.component.html',
    styleUrls: ['./saving-throws.component.scss']
})
export class SavingThrowsComponent {
    constructor(public data: DataService) {}

    originalOrder(a: KeyValue<string, any>, b: KeyValue<string, any>): number {
        return 0;
    }
}
