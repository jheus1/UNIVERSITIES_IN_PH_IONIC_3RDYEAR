import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EasternS2Page } from './eastern-s2.page';

describe('EasternS2Page', () => {
  let component: EasternS2Page;
  let fixture: ComponentFixture<EasternS2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EasternS2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
