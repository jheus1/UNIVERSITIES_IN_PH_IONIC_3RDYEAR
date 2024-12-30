import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pampanga4Page } from './pampanga4.page';

describe('Pampanga4Page', () => {
  let component: Pampanga4Page;
  let fixture: ComponentFixture<Pampanga4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pampanga4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
