import { Component } from '@angular/core';

import { DataService } from 'src/app/data.service';

@Component({
    selector: 'dnd-hit-dice',
    templateUrl: './hit-dice.component.html',
    styleUrls: ['./hit-dice.component.scss']
})
export class HitDiceComponent {
    constructor(public data: DataService) {}
}
