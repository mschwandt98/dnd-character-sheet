import { Component } from '@angular/core';

import { DataService } from 'src/app/data.service';

@Component({
    selector: 'dnd-notes',
    templateUrl: './notes.component.html',
    styleUrls: ['./notes.component.scss']
})
export class NotesComponent {
    constructor(public data: DataService) {}
}
