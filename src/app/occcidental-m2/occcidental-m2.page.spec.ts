import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OcccidentalM2Page } from './occcidental-m2.page';

describe('OcccidentalM2Page', () => {
  let component: OcccidentalM2Page;
  let fixture: ComponentFixture<OcccidentalM2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OcccidentalM2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
