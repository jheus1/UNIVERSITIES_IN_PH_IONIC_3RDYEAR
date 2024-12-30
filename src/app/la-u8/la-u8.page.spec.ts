import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LaU8Page } from './la-u8.page';

describe('LaU8Page', () => {
  let component: LaU8Page;
  let fixture: ComponentFixture<LaU8Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LaU8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
