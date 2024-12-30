import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CamarinesS9Page } from './camarines-s9.page';

describe('CamarinesS9Page', () => {
  let component: CamarinesS9Page;
  let fixture: ComponentFixture<CamarinesS9Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CamarinesS9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
