import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Rizal5Page } from './rizal5.page';

describe('Rizal5Page', () => {
  let component: Rizal5Page;
  let fixture: ComponentFixture<Rizal5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Rizal5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
