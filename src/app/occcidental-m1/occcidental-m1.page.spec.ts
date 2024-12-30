import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OcccidentalM1Page } from './occcidental-m1.page';

describe('OcccidentalM1Page', () => {
  let component: OcccidentalM1Page;
  let fixture: ComponentFixture<OcccidentalM1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OcccidentalM1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
