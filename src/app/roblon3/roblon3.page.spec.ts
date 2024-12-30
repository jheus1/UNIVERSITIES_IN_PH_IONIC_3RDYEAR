import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Roblon3Page } from './roblon3.page';

describe('Roblon3Page', () => {
  let component: Roblon3Page;
  let fixture: ComponentFixture<Roblon3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Roblon3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
