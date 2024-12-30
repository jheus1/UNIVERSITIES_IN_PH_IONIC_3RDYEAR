import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pangasinan10Page } from './pangasinan10.page';

describe('Pangasinan10Page', () => {
  let component: Pangasinan10Page;
  let fixture: ComponentFixture<Pangasinan10Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pangasinan10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
