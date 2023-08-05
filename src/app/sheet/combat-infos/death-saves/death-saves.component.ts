import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/data.service';

@Component({
    selector: 'dnd-death-saves',
    templateUrl: './death-saves.component.html',
    styleUrls: ['./death-saves.component.scss']
})
export class DeathSavesComponent implements OnInit {
    successes: { value: boolean }[] = [{ value: false }, { value: false }, { value: false }];
    failures: { value: boolean }[] = [{ value: false }, { value: false }, { value: false }];

    constructor(private data: DataService) {}

    ngOnInit() {
        if (this.data.DeathSavesSuccesses) {
            this.successes = Array.from({ length: 3 }, (_, i) => ({ value: i < this.data.DeathSavesSuccesses }));
        }

        if (this.data.DeathSavesFailures) {
            this.failures = Array.from({ length: 3 }, (_, i) => ({ value: i < this.data.DeathSavesFailures }));
        }
    }

    clickOnSpace(event: KeyboardEvent) {
        if (event.key === ' ') {
            event.preventDefault();
            (event.target as HTMLElement).click();
        }
    }

    updateDeathSaves(type: 'success' | 'failure') {
        if (type === 'success') {
            this.data.DeathSavesSuccesses = this.successes.filter((success) => success.value).length;
        } else {
            this.data.DeathSavesFailures = this.failures.filter((failure) => failure.value).length;
        }
    }
}
