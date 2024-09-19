import { Component, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { DataService } from '../../data.service';
import CharacterSheet from '../../models/CharacterSheet';

@Component({
    selector: 'dnd-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
    @ViewChild('settingsDialog', { static: true }) dialog!: ElementRef<HTMLDialogElement>;

    downloadJsonHref: SafeUrl | null = null;
    showTooltips: boolean = localStorage.getItem('showTooltips') === 'true';

    constructor(
        private sanitizer: DomSanitizer,
        private data: DataService
    ) {}

    closeDialog() {
        this.dialog.nativeElement.close();
    }

    createNewCharacterSheet() {
        const confirmMessage =
            'Are you sure you want to create a new character sheet? Your current character sheet will be lost. If ' +
            'you want to keep your current character sheet, click on "Download character sheet".';

        if (confirm(confirmMessage)) {
            this.data = Object.assign(this.data, new CharacterSheet());
            this.data.saveLocal();
        }
    }

    downloadCharacterSheet() {
        let json = this.data.getExportData();
        let uri = this.sanitizer.bypassSecurityTrustUrl('data:text/json;charset=UTF-8,' + encodeURIComponent(json));
        this.downloadJsonHref = uri;
    }

    loadCharacterSheet(e: Event) {
        try {
            let fileReader = new FileReader();
            fileReader.onload = () => this.data.importSheet(fileReader.result);
            fileReader.readAsText((e?.target as any).files?.item(0));
        } catch (error) {
            alert('An error occurred while loading the character sheet. The file may be corrupted or not a valid character sheet.');
        }

        this.data.saveLocal();
    }

    openDialog() {
        this.dialog.nativeElement.showModal();
    }

    toggleTooltips() {
        localStorage.setItem('showTooltips', this.showTooltips.toString());
    }

    printCharacterSheet() {
        window.print();
    }
}
