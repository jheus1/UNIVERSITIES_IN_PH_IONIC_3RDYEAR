import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Leyte8Page } from './leyte8.page';

describe('Leyte8Page', () => {
  let component: Leyte8Page;
  let fixture: ComponentFixture<Leyte8Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Leyte8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
