import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bulacan6Page } from './bulacan6.page';

describe('Bulacan6Page', () => {
  let component: Bulacan6Page;
  let fixture: ComponentFixture<Bulacan6Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Bulacan6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
