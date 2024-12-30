import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IlocosN10Page } from './ilocos-n10.page';

describe('IlocosN10Page', () => {
  let component: IlocosN10Page;
  let fixture: ComponentFixture<IlocosN10Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IlocosN10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
