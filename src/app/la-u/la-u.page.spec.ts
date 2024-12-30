import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LaUPage } from './la-u.page';

describe('LaUPage', () => {
  let component: LaUPage;
  let fixture: ComponentFixture<LaUPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LaUPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
