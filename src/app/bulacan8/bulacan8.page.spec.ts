import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bulacan8Page } from './bulacan8.page';

describe('Bulacan8Page', () => {
  let component: Bulacan8Page;
  let fixture: ComponentFixture<Bulacan8Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Bulacan8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
