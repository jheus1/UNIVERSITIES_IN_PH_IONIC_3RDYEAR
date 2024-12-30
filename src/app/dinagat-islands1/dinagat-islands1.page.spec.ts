import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DinagatIslands1Page } from './dinagat-islands1.page';

describe('DinagatIslands1Page', () => {
  let component: DinagatIslands1Page;
  let fixture: ComponentFixture<DinagatIslands1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DinagatIslands1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
