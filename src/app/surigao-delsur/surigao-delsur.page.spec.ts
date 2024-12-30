import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SurigaoDelsurPage } from './surigao-delsur.page';

describe('SurigaoDelsurPage', () => {
  let component: SurigaoDelsurPage;
  let fixture: ComponentFixture<SurigaoDelsurPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SurigaoDelsurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
