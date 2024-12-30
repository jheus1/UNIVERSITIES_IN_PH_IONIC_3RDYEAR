import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LaU6Page } from './la-u6.page';

describe('LaU6Page', () => {
  let component: LaU6Page;
  let fixture: ComponentFixture<LaU6Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LaU6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
