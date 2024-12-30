import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IlocosN8Page } from './ilocos-n8.page';

describe('IlocosN8Page', () => {
  let component: IlocosN8Page;
  let fixture: ComponentFixture<IlocosN8Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IlocosN8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
