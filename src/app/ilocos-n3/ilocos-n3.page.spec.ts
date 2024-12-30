import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IlocosN3Page } from './ilocos-n3.page';

describe('IlocosN3Page', () => {
  let component: IlocosN3Page;
  let fixture: ComponentFixture<IlocosN3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IlocosN3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
