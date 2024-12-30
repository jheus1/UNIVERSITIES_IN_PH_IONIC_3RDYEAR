import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CamarinesS7Page } from './camarines-s7.page';

describe('CamarinesS7Page', () => {
  let component: CamarinesS7Page;
  let fixture: ComponentFixture<CamarinesS7Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CamarinesS7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
