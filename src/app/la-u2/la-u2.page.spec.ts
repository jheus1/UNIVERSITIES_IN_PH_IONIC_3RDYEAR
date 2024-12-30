import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LaU2Page } from './la-u2.page';

describe('LaU2Page', () => {
  let component: LaU2Page;
  let fixture: ComponentFixture<LaU2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LaU2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
