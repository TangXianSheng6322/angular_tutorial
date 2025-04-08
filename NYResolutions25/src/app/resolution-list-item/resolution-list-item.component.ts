import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'resolution-list-item',
  imports: [],
  templateUrl: './resolution-list-item.component.html',
  styleUrl: './resolution-list-item.component.css',
})
export class ResolutionListItemComponent {
  @Input() ResolutionText!: string;
  @Input() fulfilled!: boolean;
  @Output() fulfilledChange = new EventEmitter<boolean>();

  toggleFulfilled() {
    this.fulfilled = !this.fulfilled;
    this.fulfilledChange.emit(this.fulfilled);
  }
}
