import { Component } from '@angular/core';
import { ResolutionItem } from '../shared/models/resolutionItem';
import { FormsModule } from '@angular/forms';
import { ResolutionListComponent } from './resolution-list/resolution-list.component';
const filters = [
  (item: ResolutionItem) => item,
  (item: ResolutionItem) => !item.isComplete,
  (item: ResolutionItem) => item.isComplete,
];
@Component({
  selector: 'app-root',
  imports: [FormsModule, ResolutionListComponent],
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
