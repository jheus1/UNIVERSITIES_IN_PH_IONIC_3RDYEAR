import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Rizal9Page } from './rizal9.page';

describe('Rizal9Page', () => {
  let component: Rizal9Page;
  let fixture: ComponentFixture<Rizal9Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Rizal9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
