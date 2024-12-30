import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pampanga2Page } from './pampanga2.page';

describe('Pampanga2Page', () => {
  let component: Pampanga2Page;
  let fixture: ComponentFixture<Pampanga2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pampanga2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
