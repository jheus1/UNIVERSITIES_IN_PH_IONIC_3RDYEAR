import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LaU7Page } from './la-u7.page';

describe('LaU7Page', () => {
  let component: LaU7Page;
  let fixture: ComponentFixture<LaU7Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LaU7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
