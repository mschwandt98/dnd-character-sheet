import { Component } from '@angular/core';

import { DataService } from 'src/app/data.service';

@Component({
    selector: 'dnd-speed',
    templateUrl: './speed.component.html',
    styleUrls: ['./speed.component.scss']
})
export class SpeedComponent {
    constructor(public data: DataService) {}
}
