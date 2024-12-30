import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pampanga9Page } from './pampanga9.page';

describe('Pampanga9Page', () => {
  let component: Pampanga9Page;
  let fixture: ComponentFixture<Pampanga9Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pampanga9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
