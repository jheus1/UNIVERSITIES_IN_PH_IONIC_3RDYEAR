import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tarlac8Page } from './tarlac8.page';

describe('Tarlac8Page', () => {
  let component: Tarlac8Page;
  let fixture: ComponentFixture<Tarlac8Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tarlac8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
