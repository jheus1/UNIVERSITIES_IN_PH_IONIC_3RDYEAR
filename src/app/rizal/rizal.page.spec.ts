import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RizalPage } from './rizal.page';

describe('RizalPage', () => {
  let component: RizalPage;
  let fixture: ComponentFixture<RizalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RizalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
