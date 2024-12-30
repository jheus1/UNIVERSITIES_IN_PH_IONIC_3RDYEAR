import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bataan7Page } from './bataan7.page';

describe('Bataan7Page', () => {
  let component: Bataan7Page;
  let fixture: ComponentFixture<Bataan7Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Bataan7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
