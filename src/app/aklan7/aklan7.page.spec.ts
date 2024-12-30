import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Aklan7Page } from './aklan7.page';

describe('Aklan7Page', () => {
  let component: Aklan7Page;
  let fixture: ComponentFixture<Aklan7Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Aklan7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
