import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OcccidentalM3Page } from './occcidental-m3.page';

describe('OcccidentalM3Page', () => {
  let component: OcccidentalM3Page;
  let fixture: ComponentFixture<OcccidentalM3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OcccidentalM3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
