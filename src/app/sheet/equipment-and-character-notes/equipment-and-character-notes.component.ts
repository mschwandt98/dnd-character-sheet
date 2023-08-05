import { Component } from '@angular/core';

import { DataService } from 'src/app/data.service';

@Component({
    selector: 'dnd-equipment-and-character-notes',
    templateUrl: './equipment-and-character-notes.component.html',
    styleUrls: ['./equipment-and-character-notes.component.scss']
})
export class EquipmentAndCharacterNotesComponent {
    constructor(public data: DataService) {}
}
