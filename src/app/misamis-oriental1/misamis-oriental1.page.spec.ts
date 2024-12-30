import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisamisOriental1Page } from './misamis-oriental1.page';

describe('MisamisOriental1Page', () => {
  let component: MisamisOriental1Page;
  let fixture: ComponentFixture<MisamisOriental1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MisamisOriental1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
