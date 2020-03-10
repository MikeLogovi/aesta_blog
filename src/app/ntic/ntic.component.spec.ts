import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NticComponent } from './ntic.component';

describe('NticComponent', () => {
  let component: NticComponent;
  let fixture: ComponentFixture<NticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
