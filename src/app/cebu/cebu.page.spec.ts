import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CebuPage } from './cebu.page';

describe('CebuPage', () => {
  let component: CebuPage;
  let fixture: ComponentFixture<CebuPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CebuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
