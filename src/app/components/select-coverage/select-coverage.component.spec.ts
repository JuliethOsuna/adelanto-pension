import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCoverageComponent } from './select-coverage.component';

describe('SelectCoverageComponent', () => {
  let component: SelectCoverageComponent;
  let fixture: ComponentFixture<SelectCoverageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectCoverageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCoverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
