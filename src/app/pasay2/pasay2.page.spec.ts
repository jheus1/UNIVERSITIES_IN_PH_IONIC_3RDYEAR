import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pasay2Page } from './pasay2.page';

describe('Pasay2Page', () => {
  let component: Pasay2Page;
  let fixture: ComponentFixture<Pasay2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pasay2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
