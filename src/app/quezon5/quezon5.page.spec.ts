import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Quezon5Page } from './quezon5.page';

describe('Quezon5Page', () => {
  let component: Quezon5Page;
  let fixture: ComponentFixture<Quezon5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Quezon5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
