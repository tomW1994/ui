import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAdmissionComponent } from './job-admission.component';

describe('JobAdmissionComponent', () => {
  let component: JobAdmissionComponent;
  let fixture: ComponentFixture<JobAdmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobAdmissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
