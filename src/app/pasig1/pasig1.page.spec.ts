import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pasig1Page } from './pasig1.page';

describe('Pasig1Page', () => {
  let component: Pasig1Page;
  let fixture: ComponentFixture<Pasig1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pasig1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
