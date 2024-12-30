import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IlocosN9Page } from './ilocos-n9.page';

describe('IlocosN9Page', () => {
  let component: IlocosN9Page;
  let fixture: ComponentFixture<IlocosN9Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IlocosN9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
