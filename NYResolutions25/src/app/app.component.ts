import { Component, importProvidersFrom, OnInit } from '@angular/core';
import { ResolutionItem } from '../shared/models/resolutionItem';
import { FormsModule } from '@angular/forms';
import { ResolutionListComponent } from './resolution-list/resolution-list.component';
import { AddResolutionFormComponent } from './add-resolution-form/add-resolution-form.component';
import { ResolutionFilterComponent } from './resolution-filter/resolution-filter.component';
import { EventService } from './../shared/services/EventService';
import { ResolutionService } from './resolution.service';
import { HttpClient } from '@angular/common/http';

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
  items: ResolutionItem[] = [];
  // items!: ResolutionItem[]; created an error with filters undefined

  // = [
  //   new ResolutionItem('Learn Angular'),
  //   new ResolutionItem('Get Coffee', true),
  //   new ResolutionItem('Find grass that cuts itself'),
  // ];

  title = 'NYResolutions25';
  filter: any;

  constructor(
    events: EventService,
    private resolutionService: ResolutionService,
  ) {
    events.listen('removeResolution', (resolution: any) => {
      //todo remove resolution
      let index = this.items.indexOf(resolution);
      this.items.splice(index, 1);
    });
  }

  ngOnInit(): void {
    this.resolutionService.getResolutions().subscribe({
      next: (data: any) => {
        this.items = data;
      },
      error: (error: any) => {
        alert(error.message);
      },
    });
  }
}
