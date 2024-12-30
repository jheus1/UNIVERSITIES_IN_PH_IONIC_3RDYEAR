import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bulacan9Page } from './bulacan9.page';

describe('Bulacan9Page', () => {
  let component: Bulacan9Page;
  let fixture: ComponentFixture<Bulacan9Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Bulacan9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
