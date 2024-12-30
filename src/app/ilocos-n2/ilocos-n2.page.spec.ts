import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IlocosN2Page } from './ilocos-n2.page';

describe('IlocosN2Page', () => {
  let component: IlocosN2Page;
  let fixture: ComponentFixture<IlocosN2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IlocosN2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
