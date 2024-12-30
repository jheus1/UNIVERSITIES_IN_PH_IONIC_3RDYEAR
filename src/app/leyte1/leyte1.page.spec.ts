import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Leyte1Page } from './leyte1.page';

describe('Leyte1Page', () => {
  let component: Leyte1Page;
  let fixture: ComponentFixture<Leyte1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Leyte1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
