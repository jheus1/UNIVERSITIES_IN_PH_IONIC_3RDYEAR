import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Leyte4Page } from './leyte4.page';

describe('Leyte4Page', () => {
  let component: Leyte4Page;
  let fixture: ComponentFixture<Leyte4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Leyte4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
