import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IlocosS9Page } from './ilocos-s9.page';

describe('IlocosS9Page', () => {
  let component: IlocosS9Page;
  let fixture: ComponentFixture<IlocosS9Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IlocosS9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
