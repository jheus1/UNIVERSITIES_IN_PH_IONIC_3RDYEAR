import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Masbate1Page } from './masbate1.page';

describe('Masbate1Page', () => {
  let component: Masbate1Page;
  let fixture: ComponentFixture<Masbate1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Masbate1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
