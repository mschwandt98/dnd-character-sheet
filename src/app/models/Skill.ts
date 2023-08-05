export abstract class Skill {
    IsProficient: boolean = false;

    readonly Slug: string = this.constructor.name;

    get Name(): string {
        return this.constructor.name;
    }
}

export class Acrobatics extends Skill {}

export class AnimalHandling extends Skill {
    override get Name(): string {
        return 'Animal Handling';
    }
}

export class Arcana extends Skill {}

export class Athletics extends Skill {}

export class Deception extends Skill {}

export class History extends Skill {}

export class Insight extends Skill {}

export class Intimidation extends Skill {}

export class Investigation extends Skill {}

export class Medicine extends Skill {}

export class Nature extends Skill {}

export class Perception extends Skill {}

export class Performance extends Skill {}

export class Persuasion extends Skill {}

export class Religion extends Skill {}

export class SleightOfHand extends Skill {
    override get Name(): string {
        return 'Sleight of Hand';
    }
}

export class Stealth extends Skill {}

export class Survival extends Skill {}
