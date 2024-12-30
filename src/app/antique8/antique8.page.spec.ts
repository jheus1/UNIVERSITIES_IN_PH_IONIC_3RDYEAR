import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Antique8Page } from './antique8.page';

describe('Antique8Page', () => {
  let component: Antique8Page;
  let fixture: ComponentFixture<Antique8Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Antique8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
