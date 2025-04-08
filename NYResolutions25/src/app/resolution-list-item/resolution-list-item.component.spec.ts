import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolutionListItemComponent } from './resolution-list-item.component';

describe('ResolutionListItemComponent', () => {
  let component: ResolutionListItemComponent;
  let fixture: ComponentFixture<ResolutionListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResolutionListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResolutionListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
