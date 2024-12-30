import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Masbate3Page } from './masbate3.page';

describe('Masbate3Page', () => {
  let component: Masbate3Page;
  let fixture: ComponentFixture<Masbate3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Masbate3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
