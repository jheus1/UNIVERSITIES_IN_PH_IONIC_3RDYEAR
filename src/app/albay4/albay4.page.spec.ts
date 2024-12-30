import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Albay4Page } from './albay4.page';

describe('Albay4Page', () => {
  let component: Albay4Page;
  let fixture: ComponentFixture<Albay4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Albay4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
