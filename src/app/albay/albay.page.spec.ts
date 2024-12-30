import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbayPage } from './albay.page';

describe('AlbayPage', () => {
  let component: AlbayPage;
  let fixture: ComponentFixture<AlbayPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AlbayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
