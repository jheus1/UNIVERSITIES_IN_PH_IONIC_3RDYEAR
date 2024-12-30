import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Marikina4Page } from './marikina4.page';

describe('Marikina4Page', () => {
  let component: Marikina4Page;
  let fixture: ComponentFixture<Marikina4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Marikina4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
