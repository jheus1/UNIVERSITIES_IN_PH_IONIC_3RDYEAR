import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Rizal6Page } from './rizal6.page';

describe('Rizal6Page', () => {
  let component: Rizal6Page;
  let fixture: ComponentFixture<Rizal6Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Rizal6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
