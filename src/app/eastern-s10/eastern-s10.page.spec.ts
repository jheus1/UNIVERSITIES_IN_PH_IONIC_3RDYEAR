import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EasternS10Page } from './eastern-s10.page';

describe('EasternS10Page', () => {
  let component: EasternS10Page;
  let fixture: ComponentFixture<EasternS10Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EasternS10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
