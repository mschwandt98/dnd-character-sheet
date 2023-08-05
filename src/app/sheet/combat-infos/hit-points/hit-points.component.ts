import { Component } from '@angular/core';

import { DataService } from 'src/app/data.service';

@Component({
    selector: 'dnd-hit-points',
    templateUrl: './hit-points.component.html',
    styleUrls: ['./hit-points.component.scss']
})
export class HitPointsComponent {
    constructor(public data: DataService) {}
}
