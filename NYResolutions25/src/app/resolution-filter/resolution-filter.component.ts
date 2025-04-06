import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ResolutionItem } from '../../shared/models/resolutionItem';
const filters = [
  (item: ResolutionItem) => item,
  (item: ResolutionItem) => !item.isComplete,
  (item: ResolutionItem) => item.isComplete,
];
@Component({
  selector: 'app-resolution-filter',
  imports: [FormsModule],
  templateUrl: './resolution-filter.component.html',
  styleUrl: './resolution-filter.component.css',
})
export class ResolutionFilterComponent implements OnInit {
  @Output() filter = new EventEmitter<any>();
  ngOnInit(): void {
    this.filter.emit(filters[0]);
  }
  listFilter: any = '0';

  changeFilter(value: any) {
    this.filter.emit(filters[value]);
  }
}
