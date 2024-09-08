import { Component, ViewChild } from '@angular/core';

import { SettingsComponent } from './settings/settings.component';

@Component({
    selector: 'dnd-options',
    templateUrl: './options.component.html',
    styleUrls: ['./options.component.scss']
})
export class OptionsComponent {
    @ViewChild('settings') settings: SettingsComponent;

    openDialog() {
        this.settings.openDialog();
    }
}
