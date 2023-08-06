import Classes from '../enums/Classes';
import Races from '../enums/Races';

import * as Skill from './Skill';
import { Charisma, Constitution, Dexterity, Intelligence, Strength, Wisdom } from './Ability';

export default class CharacterSheet {
    Alignment: string = '';

    ArmorClass: number = 0;

    Background: string = '';

    CharacterName: string = '';

    Class: Classes = Classes.Artificer;

    private initiative: number = 1;
    get Initiative(): number {
        return this.initiative;
    }
    set Initiative(value: number) {
        if (value < 1) {
            this.initiative = 1;
        } else if (this.initiative > 20) {
            this.initiative = 20;
        } else {
            this.initiative = value;
        }
    }

    Inspiration: number = 0;

    private level: number = 1;
    get Level(): number {
        return this.level;
    }
    set Level(value: number) {
        if (value < 1) {
            this.level = 1;
        } else if (value > 20) {
            this.level = 20;
        } else {
            this.level = value;
        }
    }

    get PassivePerception(): number {
        const perception = this.Skills.find((skill) => skill.Name === Skill.Perception.name);
        if (perception?.IsProficient) {
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

    get Abilities() {
        return [this.Strength, this.Dexterity, this.Constitution, this.Intelligence, this.Wisdom, this.Charisma];
    }
    Strength: Strength = new Strength();
    Dexterity: Dexterity = new Dexterity();
    Constitution: Constitution = new Constitution();
    Intelligence: Intelligence = new Intelligence();
    Wisdom: Wisdom = new Wisdom();
    Charisma: Charisma = new Charisma();

    // Skills ------------------------------------------------------------------

    // TODO: Sortierung funktioniert aktuell nicht
    get Skills(): Skill.Skill[] {
        let skills = [
            ...this.Strength.Skills,
            ...this.Dexterity.Skills,
            ...this.Intelligence.Skills,
            ...this.Wisdom.Skills,
            ...this.Charisma.Skills
        ];
        skills.sort((a, b) => {
            if (a.Name < b.Name) {
                return -1;
            }
            if (a.Name > b.Name) {
                return 1;
            }
            return 0;
        });
        return skills;
    }

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
    OtherProficienciesAndLanguages: string = '';
    // TODO: gegen Notes austauschen
    // Flaws = '';
    // Ideals: string = '';
    // Bonds: string = '';
    // PersonalityTraits: string = '';
    Notes: string = '';
}
