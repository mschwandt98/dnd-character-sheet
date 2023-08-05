import { Component } from '@angular/core';

import { DataService } from 'src/app/data.service';

@Component({
    selector: 'dnd-other-proficiencies-and-languages',
    templateUrl: './other-proficiencies-and-languages.component.html',
    styleUrls: ['./other-proficiencies-and-languages.component.scss']
})
export class OtherProficienciesAndLanguagesComponent {
    constructor(public data: DataService) {}
}
