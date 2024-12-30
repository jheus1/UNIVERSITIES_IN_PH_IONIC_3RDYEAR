import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pasig6Page } from './pasig6.page';

describe('Pasig6Page', () => {
  let component: Pasig6Page;
  let fixture: ComponentFixture<Pasig6Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pasig6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
