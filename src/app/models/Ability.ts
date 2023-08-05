import * as Skill from './Skill';

export abstract class Ability {
    get Modifier(): number {
        return Math.floor((this.Score - 10) / 2);
    }

    SavingThrows: number = 0;

    private score: number = 0;
    get Score(): number {
        return this.score;
    }
    set Score(value: number) {
        if (value < 1) {
            this.score = 1;
        } else if (value > 20) {
            this.score = 20;
        } else {
            this.score = value;
        }
    }

    protected readonly skills: Skill.Skill[] = [];
    get Skills(): Skill.Skill[] {
        return this.skills;
    }
}

export class Strength extends Ability {
    constructor() {
        super();
        this.skills.push(new Skill.Athletics());
    }
}

export class Dexterity extends Ability {
    constructor() {
        super();
        this.skills.push(new Skill.Acrobatics());
        this.skills.push(new Skill.SleightOfHand());
        this.skills.push(new Skill.Stealth());
    }
}

export class Constitution extends Ability {}

export class Intelligence extends Ability {
    constructor() {
        super();
        this.skills.push(new Skill.Arcana());
        this.skills.push(new Skill.History());
        this.skills.push(new Skill.Investigation());
        this.skills.push(new Skill.Nature());
        this.skills.push(new Skill.Religion());
    }
}

export class Wisdom extends Ability {
    constructor() {
        super();
        this.skills.push(new Skill.AnimalHandling());
        this.skills.push(new Skill.Insight());
        this.skills.push(new Skill.Medicine());
        this.skills.push(new Skill.Perception());
        this.skills.push(new Skill.Survival());
    }
}

export class Charisma extends Ability {
    constructor() {
        super();
        this.skills.push(new Skill.Deception());
        this.skills.push(new Skill.Intimidation());
        this.skills.push(new Skill.Performance());
        this.skills.push(new Skill.Persuasion());
    }
}
