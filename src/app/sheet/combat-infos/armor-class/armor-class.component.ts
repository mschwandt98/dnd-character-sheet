import { Component } from '@angular/core';

import { DataService } from 'src/app/data.service';

@Component({
    selector: 'dnd-armor-class',
    templateUrl: './armor-class.component.html',
    styleUrls: ['./armor-class.component.scss']
})
export class ArmorClassComponent {
    constructor(public data: DataService) {}
}
