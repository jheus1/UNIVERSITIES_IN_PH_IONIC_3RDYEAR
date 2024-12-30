import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IlocosN4Page } from './ilocos-n4.page';

describe('IlocosN4Page', () => {
  let component: IlocosN4Page;
  let fixture: ComponentFixture<IlocosN4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IlocosN4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
