import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntreprenariatComponent } from './entreprenariat.component';

describe('EntreprenariatComponent', () => {
  let component: EntreprenariatComponent;
  let fixture: ComponentFixture<EntreprenariatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntreprenariatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntreprenariatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
