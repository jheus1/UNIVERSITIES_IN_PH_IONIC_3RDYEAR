import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Marikina8Page } from './marikina8.page';

describe('Marikina8Page', () => {
  let component: Marikina8Page;
  let fixture: ComponentFixture<Marikina8Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Marikina8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
