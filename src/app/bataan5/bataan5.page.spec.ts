import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bataan5Page } from './bataan5.page';

describe('Bataan5Page', () => {
  let component: Bataan5Page;
  let fixture: ComponentFixture<Bataan5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Bataan5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
