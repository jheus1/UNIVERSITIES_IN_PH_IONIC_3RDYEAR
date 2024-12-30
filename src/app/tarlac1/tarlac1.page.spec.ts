import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tarlac1Page } from './tarlac1.page';

describe('Tarlac1Page', () => {
  let component: Tarlac1Page;
  let fixture: ComponentFixture<Tarlac1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tarlac1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
