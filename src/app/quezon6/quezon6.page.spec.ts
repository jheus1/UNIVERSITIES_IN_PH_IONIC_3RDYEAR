import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Quezon6Page } from './quezon6.page';

describe('Quezon6Page', () => {
  let component: Quezon6Page;
  let fixture: ComponentFixture<Quezon6Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Quezon6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
