import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IlocosS1Page } from './ilocos-s1.page';

describe('IlocosS1Page', () => {
  let component: IlocosS1Page;
  let fixture: ComponentFixture<IlocosS1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IlocosS1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
