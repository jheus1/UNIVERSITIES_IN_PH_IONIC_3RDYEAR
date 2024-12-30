import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pangasinan5Page } from './pangasinan5.page';

describe('Pangasinan5Page', () => {
  let component: Pangasinan5Page;
  let fixture: ComponentFixture<Pangasinan5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pangasinan5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
