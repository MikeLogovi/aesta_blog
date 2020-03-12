import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeparticleComponent } from './departicle.component';

describe('DeparticleComponent', () => {
  let component: DeparticleComponent;
  let fixture: ComponentFixture<DeparticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeparticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeparticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
