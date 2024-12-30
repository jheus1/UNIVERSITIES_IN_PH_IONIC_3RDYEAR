import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Antique6Page } from './antique6.page';

describe('Antique6Page', () => {
  let component: Antique6Page;
  let fixture: ComponentFixture<Antique6Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Antique6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
