import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';
import { EventService } from '../../../shared/services/EventService';
import { ResolutionItem } from '../../../shared/models/resolutionItem';
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
  constructor(private events: EventService) {}

  toggleFulfilled() {
    this.resolution.isComplete = !this.resolution.isComplete;
  }

  removeResolution() {
    this.events.emit('removeResolution', this.resolution);
  }
}
