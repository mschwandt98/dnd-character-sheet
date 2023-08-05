import { KeyValue } from '@angular/common';
import { Component } from '@angular/core';

import { DataService } from '../../data.service';

@Component({
    selector: 'dnd-abilities',
    templateUrl: './abilities.component.html',
    styleUrls: ['./abilities.component.scss']
})
export class AbilitiesComponent {
    constructor(public data: DataService) {}

    originalOrder(a: KeyValue<string, any>, b: KeyValue<string, any>): number {
        return 0;
    }
}
