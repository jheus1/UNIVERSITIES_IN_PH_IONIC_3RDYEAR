import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LaU4Page } from './la-u4.page';

describe('LaU4Page', () => {
  let component: LaU4Page;
  let fixture: ComponentFixture<LaU4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LaU4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
