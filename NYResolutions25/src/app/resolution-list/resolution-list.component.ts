import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ResolutionItem } from '../../shared/models/resolutionItem';

@Component({
  selector: 'app-resolution-list',
  imports: [NgFor, NgIf],
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
