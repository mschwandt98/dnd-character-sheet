import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { DataService } from '../data.service';
import { SettingsComponent } from './settings/settings.component';

@Component({
    selector: 'dnd-options',
    templateUrl: './options.component.html',
    styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {
    @ViewChild('settings') settings: SettingsComponent;

    saving: boolean = false;

    constructor(private data: DataService) {}

    ngOnInit(): void {
        this.data.saveRunning.subscribe((saving) => (this.saving = saving));
    }

    openDialog() {
        this.settings.openDialog();
    }

    saveCharacterSheet() {
        this.data.saveLocal();
    }
}
