import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';
@Component({
  selector: 'resolution-list-item',
  imports: [NgClass],
  templateUrl: './resolution-list-item.component.html',
  styleUrl: './resolution-list-item.component.css',
})
export class ResolutionListItemComponent {
  @Input() ResolutionText!: string;
  @Input() fulfilled!: boolean;
  @Output() fulfilledChange = new EventEmitter<boolean>();

  get cssClasses() {
    // return this.fulfilled ? ['strikeout', 'text-muted'] : [];
    return { 'strikeout text-muted': this.fulfilled };
  }

  toggleFulfilled() {
    this.fulfilled = !this.fulfilled;
    this.fulfilledChange.emit(this.fulfilled);
  }
}
