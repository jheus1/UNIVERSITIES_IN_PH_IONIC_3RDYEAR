import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pangasinan3Page } from './pangasinan3.page';

describe('Pangasinan3Page', () => {
  let component: Pangasinan3Page;
  let fixture: ComponentFixture<Pangasinan3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pangasinan3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
