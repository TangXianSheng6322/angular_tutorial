import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResolutionListComponent } from './resolution-list/resolution-list.component';
import { AddResolutionFormComponent } from './add-resolution-form/add-resolution-form.component';
import { ResolutionFilterComponent } from './resolution-filter/resolution-filter.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ResolutionListComponent,
    AddResolutionFormComponent,
    ResolutionFilterComponent,
  ],
  exports: [
    CommonModule,
    ResolutionListComponent,
    AddResolutionFormComponent,
    ResolutionFilterComponent,
  ],
})
export class ResolutionModule {}
