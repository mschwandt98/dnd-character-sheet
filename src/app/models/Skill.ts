import { Ability } from './Ability';

export abstract class Skill {
    IsProficient: boolean = false;

    readonly Slug: string = this.constructor.name;

    abstract readonly Name: string;

    constructor(public readonly ability: Ability) {}
}

export class Acrobatics extends Skill {
    readonly Name: string = 'Acrobatics';
}

export class AnimalHandling extends Skill {
    readonly Name: string = 'Animal Handling';
}

export class Arcana extends Skill {
    readonly Name: string = 'Arcana';
}

export class Athletics extends Skill {
    readonly Name: string = 'Athletics';
}

export class Deception extends Skill {
    readonly Name: string = 'Deception';
}

export class History extends Skill {
    readonly Name: string = 'History';
}

export class Insight extends Skill {
    readonly Name: string = 'Insight';
}

export class Intimidation extends Skill {
    readonly Name: string = 'Intimidation';
}

export class Investigation extends Skill {
    readonly Name: string = 'Investigation';
}

export class Medicine extends Skill {
    readonly Name: string = 'Medicine';
}

export class Nature extends Skill {
    readonly Name: string = 'Nature';
}

export class Perception extends Skill {
    readonly Name: string = 'Perception';
}

export class Performance extends Skill {
    readonly Name: string = 'Performance';
}

export class Persuasion extends Skill {
    readonly Name: string = 'Persuasion';
}

export class Religion extends Skill {
    readonly Name: string = 'Religion';
}

export class SleightOfHand extends Skill {
    readonly Name: string = 'Sleight of Hand';
}

export class Stealth extends Skill {
    readonly Name: string = 'Stealth';
}

export class Survival extends Skill {
    readonly Name: string = 'Survival';
}
