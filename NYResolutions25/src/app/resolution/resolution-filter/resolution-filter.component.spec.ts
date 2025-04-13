import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolutionFilterComponent } from './resolution-filter.component';

describe('ResolutionFilterComponent', () => {
  let component: ResolutionFilterComponent;
  let fixture: ComponentFixture<ResolutionFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResolutionFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResolutionFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
