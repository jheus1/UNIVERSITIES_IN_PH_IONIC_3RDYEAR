import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IlocosS10Page } from './ilocos-s10.page';

describe('IlocosS10Page', () => {
  let component: IlocosS10Page;
  let fixture: ComponentFixture<IlocosS10Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IlocosS10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
