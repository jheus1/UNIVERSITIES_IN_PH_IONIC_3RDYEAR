import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Albay5Page } from './albay5.page';

describe('Albay5Page', () => {
  let component: Albay5Page;
  let fixture: ComponentFixture<Albay5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Albay5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
