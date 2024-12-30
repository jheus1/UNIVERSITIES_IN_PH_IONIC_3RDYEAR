import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Capiz1Page } from './capiz1.page';

describe('Capiz1Page', () => {
  let component: Capiz1Page;
  let fixture: ComponentFixture<Capiz1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Capiz1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
