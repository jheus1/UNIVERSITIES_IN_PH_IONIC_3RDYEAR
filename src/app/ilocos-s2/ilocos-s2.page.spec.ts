import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IlocosS2Page } from './ilocos-s2.page';

describe('IlocosS2Page', () => {
  let component: IlocosS2Page;
  let fixture: ComponentFixture<IlocosS2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IlocosS2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
