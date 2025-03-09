import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResolutionItem } from '../shared/models/resolutionItem';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  items: ResolutionItem[] = [
    new ResolutionItem('To Learn Angular'),
    new ResolutionItem('Get Some RedBull', true),
    new ResolutionItem('Find Grass That Cuts Itself'),
  ];

  title = 'NYResolutions25';

  addNewResolution() {}

  toggleItem(item: ResolutionItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
