import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bulacan4Page } from './bulacan4.page';

describe('Bulacan4Page', () => {
  let component: Bulacan4Page;
  let fixture: ComponentFixture<Bulacan4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Bulacan4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
