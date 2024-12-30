import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LaU10Page } from './la-u10.page';

describe('LaU10Page', () => {
  let component: LaU10Page;
  let fixture: ComponentFixture<LaU10Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LaU10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
