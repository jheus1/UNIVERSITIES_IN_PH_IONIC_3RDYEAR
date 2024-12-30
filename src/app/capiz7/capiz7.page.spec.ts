import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Capiz7Page } from './capiz7.page';

describe('Capiz7Page', () => {
  let component: Capiz7Page;
  let fixture: ComponentFixture<Capiz7Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Capiz7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
