import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bulacan3Page } from './bulacan3.page';

describe('Bulacan3Page', () => {
  let component: Bulacan3Page;
  let fixture: ComponentFixture<Bulacan3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Bulacan3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
