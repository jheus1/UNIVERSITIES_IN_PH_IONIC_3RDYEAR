import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bulacan10Page } from './bulacan10.page';

describe('Bulacan10Page', () => {
  let component: Bulacan10Page;
  let fixture: ComponentFixture<Bulacan10Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Bulacan10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
