import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DavaoDelsurPage } from './davao-delsur.page';

describe('DavaoDelsurPage', () => {
  let component: DavaoDelsurPage;
  let fixture: ComponentFixture<DavaoDelsurPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DavaoDelsurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
