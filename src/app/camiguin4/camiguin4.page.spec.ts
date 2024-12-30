import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Camiguin4Page } from './camiguin4.page';

describe('Camiguin4Page', () => {
  let component: Camiguin4Page;
  let fixture: ComponentFixture<Camiguin4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Camiguin4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
