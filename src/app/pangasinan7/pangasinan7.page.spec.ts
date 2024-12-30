import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pangasinan7Page } from './pangasinan7.page';

describe('Pangasinan7Page', () => {
  let component: Pangasinan7Page;
  let fixture: ComponentFixture<Pangasinan7Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pangasinan7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
