import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bulacan2Page } from './bulacan2.page';

describe('Bulacan2Page', () => {
  let component: Bulacan2Page;
  let fixture: ComponentFixture<Bulacan2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Bulacan2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
