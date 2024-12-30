import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EasternS9Page } from './eastern-s9.page';

describe('EasternS9Page', () => {
  let component: EasternS9Page;
  let fixture: ComponentFixture<EasternS9Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EasternS9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
