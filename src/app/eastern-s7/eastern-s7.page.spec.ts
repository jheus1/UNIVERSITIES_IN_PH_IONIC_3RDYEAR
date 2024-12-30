import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EasternS7Page } from './eastern-s7.page';

describe('EasternS7Page', () => {
  let component: EasternS7Page;
  let fixture: ComponentFixture<EasternS7Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EasternS7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
