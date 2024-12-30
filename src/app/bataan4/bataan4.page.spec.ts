import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bataan4Page } from './bataan4.page';

describe('Bataan4Page', () => {
  let component: Bataan4Page;
  let fixture: ComponentFixture<Bataan4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Bataan4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
