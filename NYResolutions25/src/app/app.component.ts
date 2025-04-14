import { Component, OnInit } from '@angular/core';
import { ResolutionItem } from '../shared/models/resolutionItem';
import { FormsModule } from '@angular/forms';

import { EventService } from './../shared/services/EventService';
import { ResolutionService } from './resolution/resolution.service';
import { ResolutionModule } from './resolution/resolution.module';
import { ResolutionComponent } from './resolution/resolution.component';

@Component({
  selector: 'app-root',
  imports: [FormsModule, ResolutionModule, ResolutionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
