import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IlocosN6Page } from './ilocos-n6.page';

describe('IlocosN6Page', () => {
  let component: IlocosN6Page;
  let fixture: ComponentFixture<IlocosN6Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IlocosN6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
