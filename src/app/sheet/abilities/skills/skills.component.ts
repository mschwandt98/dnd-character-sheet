import { Component } from '@angular/core';

import { DataService } from '../../../data.service';

import { Skill } from 'src/app/models/Skill';

@Component({
    selector: 'dnd-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
    constructor(public data: DataService) {}
}
