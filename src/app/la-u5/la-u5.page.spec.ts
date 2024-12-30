import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LaU5Page } from './la-u5.page';

describe('LaU5Page', () => {
  let component: LaU5Page;
  let fixture: ComponentFixture<LaU5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LaU5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
