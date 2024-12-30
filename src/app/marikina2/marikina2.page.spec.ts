import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Marikina2Page } from './marikina2.page';

describe('Marikina2Page', () => {
  let component: Marikina2Page;
  let fixture: ComponentFixture<Marikina2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Marikina2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
