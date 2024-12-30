import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IlocosNPage } from './ilocos-n.page';

describe('IlocosNPage', () => {
  let component: IlocosNPage;
  let fixture: ComponentFixture<IlocosNPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IlocosNPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
