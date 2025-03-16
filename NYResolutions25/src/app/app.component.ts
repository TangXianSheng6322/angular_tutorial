import { Component } from '@angular/core';
import { ResolutionItem } from '../shared/models/resolutionItem';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
const filters = [
  (item: ResolutionItem) => item,
  (item: ResolutionItem) => !item.isComplete,
  (item: ResolutionItem) => item.isComplete,
];
@Component({
  selector: 'app-root',
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  items: ResolutionItem[] = [
    new ResolutionItem('To Learn Angular'),
    new ResolutionItem('Get Some RedBull', true),
    new ResolutionItem('Find Grass That Cuts Itself'),
  ];

  //Data Binding
  title = 'NYResolutions25';
  newResolutionText = '';
  listFilter: any = '0';

  get visibleItems(): ResolutionItem[] {
    return this.items.filter(filters[this.listFilter]);
  }

  //Functions
  addNewResolution() {
    this.items.push(new ResolutionItem(this.newResolutionText));
    this.newResolutionText = '';
  }

  toggleItem(item: ResolutionItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
