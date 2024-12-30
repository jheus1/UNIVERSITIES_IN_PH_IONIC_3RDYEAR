import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Sorsogon3Page } from './sorsogon3.page';

describe('Sorsogon3Page', () => {
  let component: Sorsogon3Page;
  let fixture: ComponentFixture<Sorsogon3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Sorsogon3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
