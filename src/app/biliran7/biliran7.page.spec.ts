import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Biliran7Page } from './biliran7.page';

describe('Biliran7Page', () => {
  let component: Biliran7Page;
  let fixture: ComponentFixture<Biliran7Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Biliran7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
