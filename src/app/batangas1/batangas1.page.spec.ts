import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Batangas1Page } from './batangas1.page';

describe('Batangas1Page', () => {
  let component: Batangas1Page;
  let fixture: ComponentFixture<Batangas1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Batangas1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
