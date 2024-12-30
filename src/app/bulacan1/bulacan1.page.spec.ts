import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bulacan1Page } from './bulacan1.page';

describe('Bulacan1Page', () => {
  let component: Bulacan1Page;
  let fixture: ComponentFixture<Bulacan1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Bulacan1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
