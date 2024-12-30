import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bataan3Page } from './bataan3.page';

describe('Bataan3Page', () => {
  let component: Bataan3Page;
  let fixture: ComponentFixture<Bataan3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Bataan3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
