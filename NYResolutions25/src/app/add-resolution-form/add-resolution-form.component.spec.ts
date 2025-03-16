import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResolutionFormComponent } from './add-resolution-form.component';

describe('AddResolutionFormComponent', () => {
  let component: AddResolutionFormComponent;
  let fixture: ComponentFixture<AddResolutionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddResolutionFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddResolutionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
