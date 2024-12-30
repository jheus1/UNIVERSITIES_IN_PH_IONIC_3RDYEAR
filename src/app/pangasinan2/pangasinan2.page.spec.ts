import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pangasinan2Page } from './pangasinan2.page';

describe('Pangasinan2Page', () => {
  let component: Pangasinan2Page;
  let fixture: ComponentFixture<Pangasinan2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pangasinan2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
