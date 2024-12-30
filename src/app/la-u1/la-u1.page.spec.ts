import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LaU1Page } from './la-u1.page';

describe('LaU1Page', () => {
  let component: LaU1Page;
  let fixture: ComponentFixture<LaU1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LaU1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
