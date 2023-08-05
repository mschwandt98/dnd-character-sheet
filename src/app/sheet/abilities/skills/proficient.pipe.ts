import { Pipe, PipeTransform } from '@angular/core';

import { DataService } from 'src/app/data.service';

@Pipe({
    name: 'proficient'
})
export class ProficientPipe implements PipeTransform {
    constructor(private data: DataService) {}

    transform(isSkillProficient: boolean, abilityModifier: number): number {
        return isSkillProficient ? abilityModifier + this.data.ProficiencyBonus : abilityModifier;
    }
}
