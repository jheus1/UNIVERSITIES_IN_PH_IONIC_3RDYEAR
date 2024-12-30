import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EasternS6Page } from './eastern-s6.page';

describe('EasternS6Page', () => {
  let component: EasternS6Page;
  let fixture: ComponentFixture<EasternS6Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EasternS6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
