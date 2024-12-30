import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IlocosN5Page } from './ilocos-n5.page';

describe('IlocosN5Page', () => {
  let component: IlocosN5Page;
  let fixture: ComponentFixture<IlocosN5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IlocosN5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
