import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Palawan1Page } from './palawan1.page';

describe('Palawan1Page', () => {
  let component: Palawan1Page;
  let fixture: ComponentFixture<Palawan1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Palawan1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
