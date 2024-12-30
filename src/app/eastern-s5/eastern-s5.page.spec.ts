import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EasternS5Page } from './eastern-s5.page';

describe('EasternS5Page', () => {
  let component: EasternS5Page;
  let fixture: ComponentFixture<EasternS5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EasternS5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
