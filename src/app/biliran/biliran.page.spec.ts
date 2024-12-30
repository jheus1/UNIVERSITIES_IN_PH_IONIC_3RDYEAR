import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BiliranPage } from './biliran.page';

describe('BiliranPage', () => {
  let component: BiliranPage;
  let fixture: ComponentFixture<BiliranPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BiliranPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
