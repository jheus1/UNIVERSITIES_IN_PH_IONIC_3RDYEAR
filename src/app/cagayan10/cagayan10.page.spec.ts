import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cagayan10Page } from './cagayan10.page';

describe('Cagayan10Page', () => {
  let component: Cagayan10Page;
  let fixture: ComponentFixture<Cagayan10Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cagayan10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
