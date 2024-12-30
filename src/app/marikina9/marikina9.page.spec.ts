import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Marikina9Page } from './marikina9.page';

describe('Marikina9Page', () => {
  let component: Marikina9Page;
  let fixture: ComponentFixture<Marikina9Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Marikina9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
