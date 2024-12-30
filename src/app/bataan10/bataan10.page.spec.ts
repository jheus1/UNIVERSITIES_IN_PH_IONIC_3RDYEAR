import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bataan10Page } from './bataan10.page';

describe('Bataan10Page', () => {
  let component: Bataan10Page;
  let fixture: ComponentFixture<Bataan10Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Bataan10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
