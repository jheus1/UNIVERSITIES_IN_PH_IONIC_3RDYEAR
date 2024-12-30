import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Aklan10Page } from './aklan10.page';

describe('Aklan10Page', () => {
  let component: Aklan10Page;
  let fixture: ComponentFixture<Aklan10Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Aklan10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
