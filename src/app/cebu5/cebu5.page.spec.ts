import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cebu5Page } from './cebu5.page';

describe('Cebu5Page', () => {
  let component: Cebu5Page;
  let fixture: ComponentFixture<Cebu5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cebu5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
