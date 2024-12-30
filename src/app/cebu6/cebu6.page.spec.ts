import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cebu6Page } from './cebu6.page';

describe('Cebu6Page', () => {
  let component: Cebu6Page;
  let fixture: ComponentFixture<Cebu6Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cebu6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
