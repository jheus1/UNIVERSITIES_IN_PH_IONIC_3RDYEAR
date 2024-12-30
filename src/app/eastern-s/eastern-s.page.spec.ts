import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EasternSPage } from './eastern-s.page';

describe('EasternSPage', () => {
  let component: EasternSPage;
  let fixture: ComponentFixture<EasternSPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EasternSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
