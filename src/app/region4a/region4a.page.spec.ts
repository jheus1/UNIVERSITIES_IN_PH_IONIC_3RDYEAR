import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Region4aPage } from './region4a.page';

describe('Region4aPage', () => {
  let component: Region4aPage;
  let fixture: ComponentFixture<Region4aPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Region4aPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
