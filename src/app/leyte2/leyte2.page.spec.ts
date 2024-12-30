import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Leyte2Page } from './leyte2.page';

describe('Leyte2Page', () => {
  let component: Leyte2Page;
  let fixture: ComponentFixture<Leyte2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Leyte2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
