import { Injectable } from '@angular/core';

import CharacterSheet from './models/CharacterSheet';

@Injectable({
    providedIn: 'root'
})
export class DataService extends CharacterSheet {
    // characterSheet?: CharacterSheet;

    constructor() {
        super();
    }

    loadCharacterSheet() {
        // this.characterSheet = new CharacterSheet();
        console.log('sheet loaded');
    }

    saveCharacterSheet() {
        // localStorage.setItem('characterSheet', JSON.stringify(this.characterSheet));
    }
}
