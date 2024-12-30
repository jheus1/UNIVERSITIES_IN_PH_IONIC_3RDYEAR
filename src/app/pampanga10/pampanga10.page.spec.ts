import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pampanga10Page } from './pampanga10.page';

describe('Pampanga10Page', () => {
  let component: Pampanga10Page;
  let fixture: ComponentFixture<Pampanga10Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pampanga10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
