import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-favourite-button',
    templateUrl: './favourite-button.component.html',
    styleUrls: ['./favourite-button.component.scss']
})
export class FavouriteButtonComponent {

    @Input() selected: boolean = false;
    @Output() selectedChange = new EventEmitter<boolean>();

    constructor() { }

    toggle() {
        this.selected = !this.selected;
        this.selectedChange.emit(this.selected);
    }
}