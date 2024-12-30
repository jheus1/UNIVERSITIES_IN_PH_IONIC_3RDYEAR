import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Region4bPage } from './region4b.page';

describe('Region4bPage', () => {
  let component: Region4bPage;
  let fixture: ComponentFixture<Region4bPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Region4bPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
