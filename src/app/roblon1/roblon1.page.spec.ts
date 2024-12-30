import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Roblon1Page } from './roblon1.page';

describe('Roblon1Page', () => {
  let component: Roblon1Page;
  let fixture: ComponentFixture<Roblon1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Roblon1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
