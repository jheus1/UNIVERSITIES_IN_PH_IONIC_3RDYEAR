import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tarlac3Page } from './tarlac3.page';

describe('Tarlac3Page', () => {
  let component: Tarlac3Page;
  let fixture: ComponentFixture<Tarlac3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tarlac3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
