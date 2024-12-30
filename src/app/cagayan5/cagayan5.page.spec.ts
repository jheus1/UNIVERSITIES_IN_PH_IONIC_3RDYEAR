import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cagayan5Page } from './cagayan5.page';

describe('Cagayan5Page', () => {
  let component: Cagayan5Page;
  let fixture: ComponentFixture<Cagayan5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cagayan5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
