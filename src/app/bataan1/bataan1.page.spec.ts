import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bataan1Page } from './bataan1.page';

describe('Bataan1Page', () => {
  let component: Bataan1Page;
  let fixture: ComponentFixture<Bataan1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Bataan1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
