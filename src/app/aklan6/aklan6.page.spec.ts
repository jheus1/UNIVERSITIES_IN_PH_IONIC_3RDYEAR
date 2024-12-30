import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Aklan6Page } from './aklan6.page';

describe('Aklan6Page', () => {
  let component: Aklan6Page;
  let fixture: ComponentFixture<Aklan6Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Aklan6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
