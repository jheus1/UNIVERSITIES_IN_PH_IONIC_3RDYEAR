import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CamarinesS8Page } from './camarines-s8.page';

describe('CamarinesS8Page', () => {
  let component: CamarinesS8Page;
  let fixture: ComponentFixture<CamarinesS8Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CamarinesS8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
