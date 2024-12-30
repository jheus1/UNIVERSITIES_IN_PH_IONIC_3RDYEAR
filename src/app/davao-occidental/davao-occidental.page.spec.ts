import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DavaoOccidentalPage } from './davao-occidental.page';

describe('DavaoOccidentalPage', () => {
  let component: DavaoOccidentalPage;
  let fixture: ComponentFixture<DavaoOccidentalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DavaoOccidentalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
