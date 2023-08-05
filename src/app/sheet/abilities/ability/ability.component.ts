import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'dnd-ability',
    templateUrl: './ability.component.html',
    styleUrls: ['./ability.component.scss']
})
export class AbilityComponent {
    @Input() name: string;

    @Input() modifier: number;

    @Input() score: number;
    @Output() scoreChange = new EventEmitter<number>();

    updateScore(e: Event): void {
        let score = parseInt((e.target as HTMLInputElement).value);

        if (isNaN(score)) {
            score = 0;
        }

        this.scoreChange.emit(score);
    }
}
