import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CavitePage } from './cavite.page';

describe('CavitePage', () => {
  let component: CavitePage;
  let fixture: ComponentFixture<CavitePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CavitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
