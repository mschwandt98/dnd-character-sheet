import Classes from '../enums/Classes';
import Races from '../enums/Races';
import Skills from '../enums/Skills';

import { Charisma, Constitution, Dexterity, Intelligence, Strength, Wisdom } from './Ability';

export default class CharacterSheet {
    Alignment: string = '';

    ArmorClass: number = 0;

    Background: string = '';

    CharacterName: string = '';

    Class: Classes = Classes.Artificer;

    ExperiencePoints: number = 0;

    private initiative: number = 0;
    get Initiative(): number {
        return this.Dexterity.Modifier + this.initiative;
    }
    set Initiative(value: number) {
        this.initiative = value;
    }

    Inspiration: number = 0;

    Level: number = 1;

    get PassivePerception(): number {
        if (this.Skills.includes(Skills.Perception)) {
            return 10 + this.ProficiencyBonus + this.Wisdom.Modifier;
        }

        return 10 + this.Wisdom.Modifier;
    }

    PlayerName: string = '';

    get ProficiencyBonus(): number {
        if (this.Level < 5) {
            return 2;
        }

        if (this.Level < 9) {
            return 3;
        }

        if (this.Level < 13) {
            return 4;
        }

        if (this.Level < 17) {
            return 5;
        }

        return 6;
    }

    Race: Races = Races.Aarakocra;

    Skills: Skills[] = [];

    Speed: number = 0;

    private spellcastingAbility?:
        | typeof Strength
        | typeof Dexterity
        | typeof Constitution
        | typeof Intelligence
        | typeof Wisdom
        | typeof Charisma;
    get SpellcastingAbility() {
        // TODO: Prüfen, ob das so funktioniert
        return (this.spellcastingAbility ? this.spellcastingAbility.name : '') as any;
    }
    set SpellcastingAbility(value) {
        this.spellcastingAbility = value;
    }

    get SpellAttackBonus(): number {
        return this.ProficiencyBonus + this.Wisdom.Modifier;
    }

    get SpellModifier(): number {
        return this.ProficiencyBonus + this.Wisdom.Modifier;
    }

    get SpellSaveDC(): number {
        return 8 + this.SpellModifier;
    }

    // Abilities ---------------------------------------------------------------

    Strength: Strength = new Strength();
    Dexterity: Dexterity = new Dexterity();
    Constitution: Constitution = new Constitution();
    Intelligence: Intelligence = new Intelligence();
    Wisdom: Wisdom = new Wisdom();
    Charisma: Charisma = new Charisma();

    // Hit Points --------------------------------------------------------------

    private currentHitPoints: number = 0;
    get CurrentHitPoints(): number {
        return this.currentHitPoints;
    }
    set CurrentHitPoints(value: number) {
        if (value < 0) {
            this.currentHitPoints = 0;
        } else if (value > this.MaxHitPoints) {
            this.currentHitPoints = this.MaxHitPoints;
        } else {
            this.currentHitPoints = value;
        }
    }
    MaxHitPoints: number = 0;
    TemporaryHitPoints: number = 0;

    // Hit Dice ----------------------------------------------------------------

    private currentHitDice: number = 0;
    get CurrentHitDice(): number {
        return this.currentHitDice;
    }
    set CurrentHitDice(value: number) {
        if (value < 0) {
            this.currentHitDice = 0;
        } else if (value > this.MaxHitDice) {
            this.currentHitDice = this.MaxHitDice;
        } else {
            this.currentHitDice = value;
        }
    }
    MaxHitDice: number = 0;

    // Death Saves -------------------------------------------------------------

    private deathSavesSuccesses: number = 0;
    get DeathSavesSuccesses(): number {
        return this.deathSavesSuccesses;
    }
    set DeathSavesSuccesses(value: number) {
        if (value < 0) {
            this.deathSavesSuccesses = 0;
        } else if (value > 3) {
            this.deathSavesSuccesses = 3;
        } else {
            this.deathSavesSuccesses = value;
        }
    }

    private deathSavesFailures: number = 0;
    get DeathSavesFailures(): number {
        return this.deathSavesFailures;
    }
    set DeathSavesFailures(value: number) {
        if (value < 0) {
            this.deathSavesFailures = 0;
        } else if (value > 3) {
            this.deathSavesFailures = 3;
        } else {
            this.deathSavesFailures = value;
        }
    }

    // Sonstiges ---------------------------------------------------------------

    AttacksAndSpellcasting: string = '';
    EquipmentAndCharacterNotes: string = '';
    FeaturesAndTraits: string = '';
    Flaws = '';
    Ideals: string = '';
    OtherProficienciesAndLanguages: string = '';
    PersonalityTraits: string = '';
}
