import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { SheetComponent } from './sheet/sheet.component';
import { HeaderComponent } from './sheet/header/header.component';

import { AbilitiesComponent } from './sheet/abilities/abilities.component';
import { AbilityComponent } from './sheet/abilities/ability/ability.component';
import { SavingThrowsComponent } from './sheet/abilities/saving-throws/saving-throws.component';
import { SkillsComponent } from './sheet/abilities/skills/skills.component';

import { CombatInfosComponent } from './sheet/combat-infos/combat-infos.component';
import { ArmorClassComponent } from './sheet/combat-infos/armor-class/armor-class.component';
import { InitiativeComponent } from './sheet/combat-infos/initiative/initiative.component';
import { SpeedComponent } from './sheet/combat-infos/speed/speed.component';
import { HitPointsComponent } from './sheet/combat-infos/hit-points/hit-points.component';
import { HitDiceComponent } from './sheet/combat-infos/hit-dice/hit-dice.component';
import { DeathSavesComponent } from './sheet/combat-infos/death-saves/death-saves.component';
import { NotesComponent } from './sheet/notes/notes.component';
import { AttacksAndSpellcastingComponent } from './sheet/attacks-and-spellcasting/attacks-and-spellcasting.component';
import { FeaturesAndTraitsComponent } from './sheet/features-and-traits/features-and-traits.component';
import { EquipmentAndCharacterNotesComponent } from './sheet/equipment-and-character-notes/equipment-and-character-notes.component';
import { OtherProficienciesAndLanguagesComponent } from './sheet/other-proficiencies-and-languages/other-proficiencies-and-languages.component';
import { ProficientPipe } from './sheet/abilities/skills/proficient.pipe';
import { OptionsComponent } from './options/options.component';
import { TooltipModule } from './tooltip/tooltip.module';
import { SettingsComponent } from './options/settings/settings.component';

@NgModule({
    declarations: [
        AppComponent,
        SheetComponent,
        HeaderComponent,
        AbilitiesComponent,
        AbilityComponent,
        SavingThrowsComponent,
        SkillsComponent,
        CombatInfosComponent,
        ArmorClassComponent,
        InitiativeComponent,
        SpeedComponent,
        HitPointsComponent,
        HitDiceComponent,
        DeathSavesComponent,
        NotesComponent,
        AttacksAndSpellcastingComponent,
        FeaturesAndTraitsComponent,
        EquipmentAndCharacterNotesComponent,
        OtherProficienciesAndLanguagesComponent,
        ProficientPipe,
        OptionsComponent,
        SettingsComponent
    ],
    imports: [BrowserModule, FormsModule, TooltipModule],
    bootstrap: [AppComponent]
})
export class AppModule {}
