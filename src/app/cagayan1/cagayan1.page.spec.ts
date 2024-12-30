import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cagayan1Page } from './cagayan1.page';

describe('Cagayan1Page', () => {
  let component: Cagayan1Page;
  let fixture: ComponentFixture<Cagayan1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cagayan1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
