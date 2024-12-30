import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pasig4Page } from './pasig4.page';

describe('Pasig4Page', () => {
  let component: Pasig4Page;
  let fixture: ComponentFixture<Pasig4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pasig4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
