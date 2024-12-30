import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CamarinesS4Page } from './camarines-s4.page';

describe('CamarinesS4Page', () => {
  let component: CamarinesS4Page;
  let fixture: ComponentFixture<CamarinesS4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CamarinesS4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
