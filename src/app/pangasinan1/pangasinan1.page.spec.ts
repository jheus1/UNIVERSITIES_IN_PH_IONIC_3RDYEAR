import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pangasinan1Page } from './pangasinan1.page';

describe('Pangasinan1Page', () => {
  let component: Pangasinan1Page;
  let fixture: ComponentFixture<Pangasinan1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pangasinan1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
