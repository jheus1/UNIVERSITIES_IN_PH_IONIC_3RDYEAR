import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cebu1Page } from './cebu1.page';

describe('Cebu1Page', () => {
  let component: Cebu1Page;
  let fixture: ComponentFixture<Cebu1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cebu1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
