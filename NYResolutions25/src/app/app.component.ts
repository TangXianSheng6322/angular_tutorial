import { Component, OnInit } from '@angular/core';
import { ResolutionItem } from '../shared/models/resolutionItem';
import { FormsModule } from '@angular/forms';
import { ResolutionListComponent } from './resolution-list/resolution-list.component';
import { AddResolutionFormComponent } from './add-resolution-form/add-resolution-form.component';
import { ResolutionFilterComponent } from './resolution-filter/resolution-filter.component';
import { EventService } from './../shared/services/EventService';
import { ResolutionService } from './resolution.service';

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
export class AppComponent implements OnInit {
  items!: ResolutionItem[];

  filter: any;
  title = 'NYResolutions25';

  constructor(
    private events: EventService,
    private resolutionService: ResolutionService,
  ) {
    events.listen('removeResolution', (resolution: any) => {
      //todo remove resolution
      let index = this.items.indexOf(resolution);
      this.items.splice(index, 1);
    });
  }

  ngOnInit(): void {
    this.resolutionService.getResolutions().subscribe((data: any) => {
      this.items = data;
    });
  }
}
