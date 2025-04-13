import { Component, Output, OnInit, EventEmitter, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ResolutionItem } from '../../../shared/models/resolutionItem';
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
  @Input() filter: any;
  @Output() filterChange = new EventEmitter<any>();

  ngOnInit(): void {
    this.updateFilter('0');
  }

  listFilter: any = '0';

  updateFilter(value: any) {
    this.filter = filters[value];
    this.filterChange.emit(this.filter);
  }
}
