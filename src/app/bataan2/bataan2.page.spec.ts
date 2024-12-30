import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bataan2Page } from './bataan2.page';

describe('Bataan2Page', () => {
  let component: Bataan2Page;
  let fixture: ComponentFixture<Bataan2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Bataan2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
