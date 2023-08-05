import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { DataService } from './data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private sanitizer: DomSanitizer, private data: DataService) {}

    loadCharacterSheet(e: Event) {
        let fileReader = new FileReader();
        fileReader.onload = () => this.data.importSheet(fileReader.result);
        fileReader.readAsText((e?.target as any).files?.item(0));
    }

    downloadJsonHref: SafeUrl | null = null;
    saveCharacterSheet() {
        let json = this.data.getExportData();
        let uri = this.sanitizer.bypassSecurityTrustUrl('data:text/json;charset=UTF-8,' + encodeURIComponent(json));
        this.downloadJsonHref = uri;
    }
}
