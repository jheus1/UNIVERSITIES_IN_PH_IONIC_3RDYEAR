import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IlocosS6Page } from './ilocos-s6.page';

describe('IlocosS6Page', () => {
  let component: IlocosS6Page;
  let fixture: ComponentFixture<IlocosS6Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IlocosS6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
