import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LaU9Page } from './la-u9.page';

describe('LaU9Page', () => {
  let component: LaU9Page;
  let fixture: ComponentFixture<LaU9Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LaU9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
