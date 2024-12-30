import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Leyte9Page } from './leyte9.page';

describe('Leyte9Page', () => {
  let component: Leyte9Page;
  let fixture: ComponentFixture<Leyte9Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Leyte9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
