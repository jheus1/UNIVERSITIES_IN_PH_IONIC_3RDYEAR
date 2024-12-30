import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Laguna7Page } from './laguna7.page';

describe('Laguna7Page', () => {
  let component: Laguna7Page;
  let fixture: ComponentFixture<Laguna7Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Laguna7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
