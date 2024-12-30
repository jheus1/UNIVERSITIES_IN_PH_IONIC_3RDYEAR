import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EasternS1Page } from './eastern-s1.page';

describe('EasternS1Page', () => {
  let component: EasternS1Page;
  let fixture: ComponentFixture<EasternS1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EasternS1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
