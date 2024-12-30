import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Home0Page } from './home0.page';

describe('Home0Page', () => {
  let component: Home0Page;
  let fixture: ComponentFixture<Home0Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Home0Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
