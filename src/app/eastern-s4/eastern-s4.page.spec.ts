import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EasternS4Page } from './eastern-s4.page';

describe('EasternS4Page', () => {
  let component: EasternS4Page;
  let fixture: ComponentFixture<EasternS4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EasternS4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
