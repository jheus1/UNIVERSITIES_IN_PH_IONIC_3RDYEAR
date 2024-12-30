import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IlocosS7Page } from './ilocos-s7.page';

describe('IlocosS7Page', () => {
  let component: IlocosS7Page;
  let fixture: ComponentFixture<IlocosS7Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IlocosS7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
