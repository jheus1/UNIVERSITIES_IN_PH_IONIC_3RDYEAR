import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pasig2Page } from './pasig2.page';

describe('Pasig2Page', () => {
  let component: Pasig2Page;
  let fixture: ComponentFixture<Pasig2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pasig2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
