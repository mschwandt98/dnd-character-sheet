import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
    selector: 'dnd-features-and-traits',
    templateUrl: './features-and-traits.component.html',
    styleUrls: ['./features-and-traits.component.scss']
})
export class FeaturesAndTraitsComponent {
    constructor(public data: DataService) {}
}
