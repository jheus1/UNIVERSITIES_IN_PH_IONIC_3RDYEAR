import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IlocosS4Page } from './ilocos-s4.page';

describe('IlocosS4Page', () => {
  let component: IlocosS4Page;
  let fixture: ComponentFixture<IlocosS4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IlocosS4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
