import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cagayan4Page } from './cagayan4.page';

describe('Cagayan4Page', () => {
  let component: Cagayan4Page;
  let fixture: ComponentFixture<Cagayan4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cagayan4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
