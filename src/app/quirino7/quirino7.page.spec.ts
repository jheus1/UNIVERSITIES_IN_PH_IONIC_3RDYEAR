import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Quirino7Page } from './quirino7.page';

describe('Quirino7Page', () => {
  let component: Quirino7Page;
  let fixture: ComponentFixture<Quirino7Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Quirino7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
