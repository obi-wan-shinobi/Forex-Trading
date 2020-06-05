import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForexapiComponent } from './forexapi.component';

describe('ForexapiComponent', () => {
  let component: ForexapiComponent;
  let fixture: ComponentFixture<ForexapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForexapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForexapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
