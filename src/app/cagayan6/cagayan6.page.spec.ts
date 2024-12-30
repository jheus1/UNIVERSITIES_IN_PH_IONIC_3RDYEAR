import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cagayan6Page } from './cagayan6.page';

describe('Cagayan6Page', () => {
  let component: Cagayan6Page;
  let fixture: ComponentFixture<Cagayan6Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cagayan6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
