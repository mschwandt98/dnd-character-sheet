import { Injectable } from '@angular/core';

import { interval } from 'rxjs';

import CharacterSheet from './models/CharacterSheet';
import CharacterSheetDto from './models/CharacterSheetDto';
import { Charisma, Constitution, Dexterity, Intelligence, Strength, Wisdom } from './models/Ability';

function circularReplacer() {
    const seen = new WeakSet();
    return (_key: string, value: any) => {
        if (typeof value === "object" && value !== null) {
            if (seen.has(value)) {
                return;
            }
            seen.add(value);
        }
        return value;
    };
}

@Injectable({
    providedIn: 'root'
})
export class DataService extends CharacterSheet {
    constructor() {
        super();

        // Alle 5 Sekunden den aktuellen Charakterbogen im localStorage speichern
        interval(5000).subscribe(() => {
            this.saveLocal();
        });
    }

    getExportData(): string {
        let data = new CharacterSheetDto(this);
        return JSON.stringify(data, circularReplacer());
    }

    importSheet(data: any) {
        if (!data) {
            return
        }

        try {
            data = JSON.parse(data);
            data = new CharacterSheetDto(data);
        } catch (error) {
            console.error(error);
            // TODO: Fehlermeldung anzeigen
            return
        }

        this.Alignment = data.Alignment;
        this.ArmorClass = data.ArmorClass;
        this.Background = data.Background;
        this.CharacterName = data.CharacterName;
        this.Class = data.Class;
        this.Initiative = data.Initiative;
        this.Inspiration = data.Inspiration;
        this.Level = data.Level;
        this.PlayerName = data.PlayerName;
        this.Race = data.Race;
        this.Speed = data.Speed;
        this.SpellcastingAbility = data.SpellcastingAbility;

        this.Strength = new Strength();
        this.Strength.Score = data.Strength.score;
        this.Strength.SavingThrows = data.Strength.SavingThrows;
        for (let skill in data.Strength.skills) {
            (this.Strength as any).skills[skill].IsProficient = data.Strength.skills[skill].IsProficient;
        }

        this.Dexterity = new Dexterity();
        this.Dexterity.Score = data.Dexterity.score;
        this.Dexterity.SavingThrows = data.Dexterity.SavingThrows;
        for (let skill in data.Dexterity.skills) {
            (this.Dexterity as any).skills[skill].IsProficient = data.Dexterity.skills[skill].IsProficient;
        }

        this.Constitution = new Constitution();
        this.Constitution.Score = data.Constitution.score;
        this.Constitution.SavingThrows = data.Constitution.SavingThrows;
        for (let skill in data.Constitution.skills) {
            (this.Constitution as any).skills[skill].IsProficient = data.Constitution.skills[skill].IsProficient;
        }

        this.Intelligence = new Intelligence();
        this.Intelligence.Score = data.Intelligence.score;
        this.Intelligence.SavingThrows = data.Intelligence.SavingThrows;
        for (let skill in data.Intelligence.skills) {
            (this.Intelligence as any).skills[skill].IsProficient = data.Intelligence.skills[skill].IsProficient;
        }

        this.Wisdom = new Wisdom();
        this.Wisdom.Score = data.Wisdom.score;
        this.Wisdom.SavingThrows = data.Wisdom.SavingThrows;
        for (let skill in data.Wisdom.skills) {
            (this.Wisdom as any).skills[skill].IsProficient = data.Wisdom.skills[skill].IsProficient;
        }

        this.Charisma = new Charisma();
        this.Charisma.Score = data.Charisma.score;
        this.Charisma.SavingThrows = data.Charisma.SavingThrows;
        for (let skill in data.Charisma.skills) {
            (this.Charisma as any).skills[skill].IsProficient = data.Charisma.skills[skill].IsProficient;
        }

        this.MaxHitPoints = data.MaxHitPoints;
        this.CurrentHitPoints = data.CurrentHitPoints;
        this.MaxHitDice = data.MaxHitDice;
        this.CurrentHitDice = data.CurrentHitDice;
        this.TemporaryHitPoints = data.TemporaryHitPoints;
        this.DeathSavesSuccesses = data.DeathSavesSuccesses;
        this.DeathSavesFailures = data.DeathSavesFailures;
        this.AttacksAndSpellcasting = data.AttacksAndSpellcasting;
        this.EquipmentAndCharacterNotes = data.EquipmentAndCharacterNotes;
        this.FeaturesAndTraits = data.FeaturesAndTraits;
        this.OtherProficienciesAndLanguages = data.OtherProficienciesAndLanguages;
        this.Notes = data.Notes;
    }

    saveLocal() {
        localStorage.setItem('characterSheet', this.getExportData());
    }
}
