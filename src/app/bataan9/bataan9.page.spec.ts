import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bataan9Page } from './bataan9.page';

describe('Bataan9Page', () => {
  let component: Bataan9Page;
  let fixture: ComponentFixture<Bataan9Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Bataan9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
