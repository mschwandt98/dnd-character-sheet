import * as Skill from './Skill';

export abstract class Ability {
    get Modifier(): number {
        return Math.floor((this.Score - 10) / 2);
    }

    abstract readonly Name: string;

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
    readonly Name: string = 'Strength';

    constructor() {
        super();
        this.skills.push(new Skill.Athletics());
    }
}

export class Dexterity extends Ability {
    readonly Name: string = 'Dexterity';

    constructor() {
        super();
        this.skills.push(new Skill.Acrobatics());
        this.skills.push(new Skill.SleightOfHand());
        this.skills.push(new Skill.Stealth());
    }
}

export class Constitution extends Ability {
    readonly Name: string = 'Constitution';
}

export class Intelligence extends Ability {
    readonly Name: string = 'Intelligence';

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
    readonly Name: string = 'Wisdom';

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
    readonly Name: string = 'Charisma';

    constructor() {
        super();
        this.skills.push(new Skill.Deception());
        this.skills.push(new Skill.Intimidation());
        this.skills.push(new Skill.Performance());
        this.skills.push(new Skill.Persuasion());
    }
}
