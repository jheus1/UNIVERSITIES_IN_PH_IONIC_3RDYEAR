import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EasternS8Page } from './eastern-s8.page';

describe('EasternS8Page', () => {
  let component: EasternS8Page;
  let fixture: ComponentFixture<EasternS8Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EasternS8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
