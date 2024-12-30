import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IlocosS8Page } from './ilocos-s8.page';

describe('IlocosS8Page', () => {
  let component: IlocosS8Page;
  let fixture: ComponentFixture<IlocosS8Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IlocosS8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
