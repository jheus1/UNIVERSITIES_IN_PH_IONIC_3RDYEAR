import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Quirino1Page } from './quirino1.page';

describe('Quirino1Page', () => {
  let component: Quirino1Page;
  let fixture: ComponentFixture<Quirino1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Quirino1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
