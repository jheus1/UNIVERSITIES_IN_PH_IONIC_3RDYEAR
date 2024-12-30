import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Quezon4Page } from './quezon4.page';

describe('Quezon4Page', () => {
  let component: Quezon4Page;
  let fixture: ComponentFixture<Quezon4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Quezon4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
