import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bataan6Page } from './bataan6.page';

describe('Bataan6Page', () => {
  let component: Bataan6Page;
  let fixture: ComponentFixture<Bataan6Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Bataan6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
