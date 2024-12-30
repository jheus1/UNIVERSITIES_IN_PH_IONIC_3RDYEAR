import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Quirino4Page } from './quirino4.page';

describe('Quirino4Page', () => {
  let component: Quirino4Page;
  let fixture: ComponentFixture<Quirino4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Quirino4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
