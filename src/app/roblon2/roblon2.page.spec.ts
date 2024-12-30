import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Roblon2Page } from './roblon2.page';

describe('Roblon2Page', () => {
  let component: Roblon2Page;
  let fixture: ComponentFixture<Roblon2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Roblon2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
