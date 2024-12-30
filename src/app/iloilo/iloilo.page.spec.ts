import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IloiloPage } from './iloilo.page';

describe('IloiloPage', () => {
  let component: IloiloPage;
  let fixture: ComponentFixture<IloiloPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IloiloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
