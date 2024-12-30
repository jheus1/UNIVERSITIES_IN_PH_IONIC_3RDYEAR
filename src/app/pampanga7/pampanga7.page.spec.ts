import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pampanga7Page } from './pampanga7.page';

describe('Pampanga7Page', () => {
  let component: Pampanga7Page;
  let fixture: ComponentFixture<Pampanga7Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pampanga7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
