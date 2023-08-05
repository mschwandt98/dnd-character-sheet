import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
    selector: 'dnd-attacks-and-spellcasting',
    templateUrl: './attacks-and-spellcasting.component.html',
    styleUrls: ['./attacks-and-spellcasting.component.scss']
})
export class AttacksAndSpellcastingComponent {
    constructor(public data: DataService) {}
}
