import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForexCrossRatesComponent } from './forex-cross-rates.component';

describe('ForexCrossRatesComponent', () => {
  let component: ForexCrossRatesComponent;
  let fixture: ComponentFixture<ForexCrossRatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForexCrossRatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForexCrossRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
