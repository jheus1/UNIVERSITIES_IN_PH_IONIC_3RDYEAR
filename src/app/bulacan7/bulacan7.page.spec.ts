import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bulacan7Page } from './bulacan7.page';

describe('Bulacan7Page', () => {
  let component: Bulacan7Page;
  let fixture: ComponentFixture<Bulacan7Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Bulacan7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
