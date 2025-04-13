import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolutionListComponent } from './resolution-list.component';
import { ResolutionListItemComponent } from '../resolution-list-item/resolution-list-item.component';

describe('ResolutionListComponent', () => {
  let component: ResolutionListComponent;
  let fixture: ComponentFixture<ResolutionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResolutionListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ResolutionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
