import Skills from '../enums/Skills';

abstract class Ability {
    get Modifier(): number {
        return Math.floor((this.Score - 10) / 2);
    }

    SavingThrows: number = 0;

    Score: number = 0;

    protected skills: Map<Skills, number> = new Map();
    get Skills(): Map<Skills, number> {
        return this.skills;
    }
    /**
     * Skill Wert = Profiencybonus, wenn Skill kein trainierter Skill ist
     * Skill Wert = Profiencybonus + Ability-Modifier, wenn Skill ein trainierter Skill ist
     */
    setSkillValue(skill: Skills, value: number) {
        if (value < 0) {
            value = 0;
        }

        this.skills.set(skill, value);
    }
}

export class Strength extends Ability {
    constructor() {
        super();
        this.skills.set(Skills.Athletics, 0);
    }
}

export class Dexterity extends Ability {
    constructor() {
        super();
        this.skills.set(Skills.Acrobatics, 0);
        this.skills.set(Skills.SleightOfHand, 0);
        this.skills.set(Skills.Stealth, 0);
    }
}

export class Constitution extends Ability {}

export class Intelligence extends Ability {
    constructor() {
        super();
        this.skills.set(Skills.Arcana, 0);
        this.skills.set(Skills.History, 0);
        this.skills.set(Skills.Investigation, 0);
        this.skills.set(Skills.Nature, 0);
        this.skills.set(Skills.Religion, 0);
    }
}

export class Wisdom extends Ability {
    constructor() {
        super();
        this.skills.set(Skills.AnimalHandling, 0);
        this.skills.set(Skills.Insight, 0);
        this.skills.set(Skills.Medicine, 0);
        this.skills.set(Skills.Perception, 0);
        this.skills.set(Skills.Survival, 0);
    }
}

export class Charisma extends Ability {
    constructor() {
        super();
        this.skills.set(Skills.Deception, 0);
        this.skills.set(Skills.Intimidation, 0);
        this.skills.set(Skills.Performance, 0);
        this.skills.set(Skills.Persuasion, 0);
    }
}
