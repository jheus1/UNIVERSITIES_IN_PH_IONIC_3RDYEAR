import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OcccidentalMPage } from './occcidental-m.page';

describe('OcccidentalMPage', () => {
  let component: OcccidentalMPage;
  let fixture: ComponentFixture<OcccidentalMPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OcccidentalMPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
