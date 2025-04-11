import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';
import events from './../../shared/services/EventService';
import { ResolutionItem } from '../../shared/models/resolutionItem';
@Component({
  selector: 'resolution-list-item',
  imports: [NgClass],
  templateUrl: './resolution-list-item.component.html',
  styleUrl: './resolution-list-item.component.css',
})
export class ResolutionListItemComponent {
  @Input() resolution!: ResolutionItem;

  get cssClasses() {
    // return this.fulfilled ? ['strikeout', 'text-muted'] : [];
    return { 'strikeout text-muted': this.resolution.isComplete };
  }

  toggleFulfilled() {
    this.resolution.isComplete = !this.resolution.isComplete;
  }

  removeResolution() {
    events.emit('removeResolution', this.resolution);
  }
}
