import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IlocosS5Page } from './ilocos-s5.page';

describe('IlocosS5Page', () => {
  let component: IlocosS5Page;
  let fixture: ComponentFixture<IlocosS5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IlocosS5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
