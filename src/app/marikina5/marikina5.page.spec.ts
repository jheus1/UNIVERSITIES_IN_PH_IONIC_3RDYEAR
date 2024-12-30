import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Marikina5Page } from './marikina5.page';

describe('Marikina5Page', () => {
  let component: Marikina5Page;
  let fixture: ComponentFixture<Marikina5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Marikina5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
