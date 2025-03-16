import { Component, Output, EventEmitter } from '@angular/core';
import { ResolutionItem } from '../../shared/models/resolutionItem';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-resolution-form',
  imports: [FormsModule],
  templateUrl: './add-resolution-form.component.html',
  styleUrl: './add-resolution-form.component.css',
})
export class AddResolutionFormComponent {
  @Output() addResolution = new EventEmitter<ResolutionItem>();

  newResolutionText = '';

  addNewResolution() {
    this.addResolution.emit(new ResolutionItem(this.newResolutionText));
    this.newResolutionText = '';
  }
}
