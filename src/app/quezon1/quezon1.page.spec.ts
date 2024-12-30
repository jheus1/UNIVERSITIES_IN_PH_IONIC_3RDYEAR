import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Quezon1Page } from './quezon1.page';

describe('Quezon1Page', () => {
  let component: Quezon1Page;
  let fixture: ComponentFixture<Quezon1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Quezon1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
