import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ResolutionItem } from '../../../shared/models/resolutionItem';
import { ResolutionListItemComponent } from '../resolution-list-item/resolution-list-item.component';

@Component({
  selector: 'app-resolution-list',
  imports: [NgFor, NgIf, ResolutionListItemComponent],
  templateUrl: './resolution-list.component.html',
  styleUrl: './resolution-list.component.css',
})
export class ResolutionListComponent {
  @Input() resolutions: ResolutionItem[] = [];

  toggleItem(item: ResolutionItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
