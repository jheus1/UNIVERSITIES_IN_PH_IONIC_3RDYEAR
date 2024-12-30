import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tarlac6Page } from './tarlac6.page';

describe('Tarlac6Page', () => {
  let component: Tarlac6Page;
  let fixture: ComponentFixture<Tarlac6Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tarlac6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
