import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cavite7Page } from './cavite7.page';

describe('Cavite7Page', () => {
  let component: Cavite7Page;
  let fixture: ComponentFixture<Cavite7Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cavite7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
