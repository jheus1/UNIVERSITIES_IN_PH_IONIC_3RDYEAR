import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IlocosSPage } from './ilocos-s.page';

describe('IlocosSPage', () => {
  let component: IlocosSPage;
  let fixture: ComponentFixture<IlocosSPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IlocosSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
