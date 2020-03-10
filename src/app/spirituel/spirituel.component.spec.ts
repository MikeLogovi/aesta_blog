import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpirituelComponent } from './spirituel.component';

describe('SpirituelComponent', () => {
  let component: SpirituelComponent;
  let fixture: ComponentFixture<SpirituelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpirituelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpirituelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
