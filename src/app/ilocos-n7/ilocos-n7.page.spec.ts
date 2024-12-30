import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IlocosN7Page } from './ilocos-n7.page';

describe('IlocosN7Page', () => {
  let component: IlocosN7Page;
  let fixture: ComponentFixture<IlocosN7Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IlocosN7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
