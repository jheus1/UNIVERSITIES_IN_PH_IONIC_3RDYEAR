import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Antique2Page } from './antique2.page';

describe('Antique2Page', () => {
  let component: Antique2Page;
  let fixture: ComponentFixture<Antique2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Antique2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
