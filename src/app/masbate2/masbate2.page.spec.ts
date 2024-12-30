import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Masbate2Page } from './masbate2.page';

describe('Masbate2Page', () => {
  let component: Masbate2Page;
  let fixture: ComponentFixture<Masbate2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Masbate2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
