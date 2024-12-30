import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DavaoDelsur1Page } from './davao-delsur1.page';

describe('DavaoDelsur1Page', () => {
  let component: DavaoDelsur1Page;
  let fixture: ComponentFixture<DavaoDelsur1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DavaoDelsur1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
