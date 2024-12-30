import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cagayan3Page } from './cagayan3.page';

describe('Cagayan3Page', () => {
  let component: Cagayan3Page;
  let fixture: ComponentFixture<Cagayan3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cagayan3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
