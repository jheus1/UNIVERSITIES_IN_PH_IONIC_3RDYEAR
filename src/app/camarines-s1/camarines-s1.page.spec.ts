import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CamarinesS1Page } from './camarines-s1.page';

describe('CamarinesS1Page', () => {
  let component: CamarinesS1Page;
  let fixture: ComponentFixture<CamarinesS1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CamarinesS1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
