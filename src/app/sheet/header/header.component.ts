import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

import Classes from '../../enums/Classes';
import Races from '../../enums/Races';

@Component({
    selector: 'dnd-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    classes: typeof Classes = Classes;
    races: typeof Races = Races;

    constructor(public data: DataService) {}
}
