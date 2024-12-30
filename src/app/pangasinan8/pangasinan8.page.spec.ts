import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pangasinan8Page } from './pangasinan8.page';

describe('Pangasinan8Page', () => {
  let component: Pangasinan8Page;
  let fixture: ComponentFixture<Pangasinan8Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pangasinan8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
