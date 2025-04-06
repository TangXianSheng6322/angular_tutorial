import { Component } from '@angular/core';
import { ResolutionItem } from '../shared/models/resolutionItem';
import { FormsModule } from '@angular/forms';
import { ResolutionListComponent } from './resolution-list/resolution-list.component';
import { AddResolutionFormComponent } from './add-resolution-form/add-resolution-form.component';
import { ResolutionFilterComponent } from './resolution-filter/resolution-filter.component';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    ResolutionListComponent,
    AddResolutionFormComponent,
    ResolutionFilterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  items: ResolutionItem[] = [
    new ResolutionItem('To Learn Angular'),
    new ResolutionItem('Get Some RedBull', true),
    new ResolutionItem('Find Grass That Cuts Itself'),
  ];

  filter: any = () => {};
  title = 'NYResolutions25';
}
