import Classes from '../enums/Classes';
import Races from '../enums/Races';
import { Charisma, Constitution, Dexterity, Intelligence, Strength, Wisdom } from './Ability';

export default class CharacterSheetDto {
    Alignment: string;
    ArmorClass: number;
    Background: string;
    CharacterName: string;
    Class: Classes;
    ExperiencePoints: number;
    Initiative: number;
    Inspiration: number;
    Level: number;
    PlayerName: string;
    Race: Races;
    Speed: number;
    SpellcastingAbility: string;
    Strength: Strength;
    Dexterity: Dexterity;
    Constitution: Constitution;
    Intelligence: Intelligence;
    Wisdom: Wisdom;
    Charisma: Charisma;
    CurrentHitPoints: number;
    MaxHitPoints: number;
    TemporaryHitPoints: number;
    CurrentHitDice: number;
    MaxHitDice: number;
    DeathSavesSuccesses: number;
    DeathSavesFailures: number;
    AttacksAndSpellcasting: string;
    EquipmentAndCharacterNotes: string;
    FeaturesAndTraits: string;
    OtherProficienciesAndLanguages: string;
    Notes: string;

    constructor(data: any) {
        this.Alignment = data.Alignment;
        this.ArmorClass = data.ArmorClass < 0 ? 0 : data.ArmorClass;
        this.Background = data.Background;
        this.CharacterName = data.CharacterName;
        this.Class = Object.keys(Classes).includes(data.Class) ? data.Class : Classes.Artificer;
        this.ExperiencePoints = data.ExperiencePoints < 0 ? 0 : data.ExperiencePoints;
        this.Initiative = data.Initiative < 1 ? 1 : data.Initiative;
        this.Inspiration = data.Inspiration < 0 ? 0 : data.Inspiration;
        this.Level = data.Level < 1 ? 1 : data.Level;
        this.PlayerName = data.PlayerName;
        this.Race = Object.keys(Races).includes(data.Race) ? data.Race : Races.Aarakocra;
        this.Speed = data.Speed < 0 ? 0 : data.Speed;
        this.SpellcastingAbility = data.SpellcastingAbility;
        // TODO: Abilities auch validieren
        this.Strength = data.Strength;
        this.Dexterity = data.Dexterity;
        this.Constitution = data.Constitution;
        this.Intelligence = data.Intelligence;
        this.Wisdom = data.Wisdom;
        this.Charisma = data.Charisma;
        this.CurrentHitPoints = data.CurrentHitPoints < 0 ? 0 : data.CurrentHitPoints;
        this.MaxHitPoints = data.MaxHitPoints < 0 ? 0 : data.MaxHitPoints;
        this.TemporaryHitPoints = data.TemporaryHitPoints < 0 ? 0 : data.TemporaryHitPoints;
        this.CurrentHitDice = data.CurrentHitDice < 0 ? 0 : data.CurrentHitDice;
        this.MaxHitDice = data.MaxHitDice < 0 ? 0 : data.MaxHitDice;
        this.DeathSavesSuccesses = data.DeathSavesSuccesses < 0 ? 0 : data.DeathSavesSuccesses;
        this.DeathSavesFailures = data.DeathSavesFailures < 0 ? 0 : data.DeathSavesFailures;
        this.AttacksAndSpellcasting = data.AttacksAndSpellcasting;
        this.EquipmentAndCharacterNotes = data.EquipmentAndCharacterNotes;
        this.FeaturesAndTraits = data.FeaturesAndTraits;
        this.OtherProficienciesAndLanguages = data.OtherProficienciesAndLanguages;
        this.Notes = data.Notes;
    }
}
