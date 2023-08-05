import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
    selector: 'dnd-sheet',
    templateUrl: './sheet.component.html',
    styleUrls: ['./sheet.component.scss']
})
export class SheetComponent implements OnInit {
    constructor(public data: DataService) {}

    ngOnInit() {
        this.data.importSheet(localStorage.getItem('characterSheet'));
    }
}
