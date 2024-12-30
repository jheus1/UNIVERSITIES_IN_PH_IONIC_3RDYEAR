import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Palawan2Page } from './palawan2.page';

describe('Palawan2Page', () => {
  let component: Palawan2Page;
  let fixture: ComponentFixture<Palawan2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Palawan2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
