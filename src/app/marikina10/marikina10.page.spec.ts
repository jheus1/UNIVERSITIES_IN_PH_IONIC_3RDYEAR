import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Marikina10Page } from './marikina10.page';

describe('Marikina10Page', () => {
  let component: Marikina10Page;
  let fixture: ComponentFixture<Marikina10Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Marikina10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
