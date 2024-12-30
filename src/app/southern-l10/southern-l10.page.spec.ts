import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SouthernL10Page } from './southern-l10.page';

describe('SouthernL10Page', () => {
  let component: SouthernL10Page;
  let fixture: ComponentFixture<SouthernL10Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SouthernL10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
