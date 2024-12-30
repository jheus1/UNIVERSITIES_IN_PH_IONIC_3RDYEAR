import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Sarangani7Page } from './sarangani7.page';

describe('Sarangani7Page', () => {
  let component: Sarangani7Page;
  let fixture: ComponentFixture<Sarangani7Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Sarangani7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
