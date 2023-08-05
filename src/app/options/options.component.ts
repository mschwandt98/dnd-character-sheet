import { Component, ElementRef, ViewChild } from '@angular/core';

import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { DataService } from '../data.service';
import CharacterSheet from '../models/CharacterSheet';

@Component({
    selector: 'dnd-options',
    templateUrl: './options.component.html',
    styleUrls: ['./options.component.scss']
})
export class OptionsComponent {
    @ViewChild('optionsDialog', { static: true }) dialog!: ElementRef<HTMLDialogElement>;

    downloadJsonHref: SafeUrl | null = null;

    constructor(private sanitizer: DomSanitizer, private data: DataService) {}

    closeDialog() {
        this.dialog.nativeElement.close();
    }

    openDialog() {
        this.dialog.nativeElement.showModal();
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

    loadCharacterSheet(e: Event) {
        // TODO: Fehler- oder Erfolgsmeldung anzeigen

        try {
            let fileReader = new FileReader();
            fileReader.onload = () => this.data.importSheet(fileReader.result);
            fileReader.readAsText((e?.target as any).files?.item(0));
        } catch (error) {
            return;
        }

        this.data.saveLocal();
    }

    printCharacterSheet() {
        window.print();
    }

    saveCharacterSheet() {
        let json = this.data.getExportData();
        let uri = this.sanitizer.bypassSecurityTrustUrl('data:text/json;charset=UTF-8,' + encodeURIComponent(json));
        this.downloadJsonHref = uri;
    }
}
