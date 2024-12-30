import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Palawan3Page } from './palawan3.page';

describe('Palawan3Page', () => {
  let component: Palawan3Page;
  let fixture: ComponentFixture<Palawan3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Palawan3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
