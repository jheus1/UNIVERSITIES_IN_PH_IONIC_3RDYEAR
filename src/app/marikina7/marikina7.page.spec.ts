import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Marikina7Page } from './marikina7.page';

describe('Marikina7Page', () => {
  let component: Marikina7Page;
  let fixture: ComponentFixture<Marikina7Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Marikina7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
