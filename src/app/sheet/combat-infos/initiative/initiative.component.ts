import { Component } from '@angular/core';

import { DataService } from 'src/app/data.service';

@Component({
    selector: 'dnd-initiative',
    templateUrl: './initiative.component.html',
    styleUrls: ['./initiative.component.scss']
})
export class InitiativeComponent {
    constructor(public data: DataService) {}
}
