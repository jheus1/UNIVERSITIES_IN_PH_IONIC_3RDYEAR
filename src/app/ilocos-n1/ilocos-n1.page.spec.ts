import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IlocosN1Page } from './ilocos-n1.page';

describe('IlocosN1Page', () => {
  let component: IlocosN1Page;
  let fixture: ComponentFixture<IlocosN1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IlocosN1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
