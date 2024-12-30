import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Sorsogon1Page } from './sorsogon1.page';

describe('Sorsogon1Page', () => {
  let component: Sorsogon1Page;
  let fixture: ComponentFixture<Sorsogon1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Sorsogon1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
