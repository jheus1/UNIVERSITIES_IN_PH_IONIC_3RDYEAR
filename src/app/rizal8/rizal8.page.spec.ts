import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Rizal8Page } from './rizal8.page';

describe('Rizal8Page', () => {
  let component: Rizal8Page;
  let fixture: ComponentFixture<Rizal8Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Rizal8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
