import { Component } from '@angular/core';
import { ResolutionItem } from '../shared/models/resolutionItem';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
  listFilter: String = '0';
  visibleItems: ResolutionItem[] = this.items;

  //Functions
  addNewResolution() {
    this.items.push(new ResolutionItem(this.newResolutionText));
    this.newResolutionText = '';
  }

  filterChanged(value: any) {
    if (value === '0') {
      this.visibleItems = this.items;
    } else if (value === '1') {
      this.visibleItems = this.items.filter((item) => !item.isComplete);
    } else {
      this.visibleItems = this.items.filter((item) => item.isComplete);
    }
  }

  toggleItem(item: ResolutionItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
