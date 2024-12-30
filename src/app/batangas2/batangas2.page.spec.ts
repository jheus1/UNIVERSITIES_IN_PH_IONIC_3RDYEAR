import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Batangas2Page } from './batangas2.page';

describe('Batangas2Page', () => {
  let component: Batangas2Page;
  let fixture: ComponentFixture<Batangas2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Batangas2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
