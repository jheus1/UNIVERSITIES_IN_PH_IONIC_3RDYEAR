import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bataan8Page } from './bataan8.page';

describe('Bataan8Page', () => {
  let component: Bataan8Page;
  let fixture: ComponentFixture<Bataan8Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Bataan8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
