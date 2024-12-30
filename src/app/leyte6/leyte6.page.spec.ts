import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Leyte6Page } from './leyte6.page';

describe('Leyte6Page', () => {
  let component: Leyte6Page;
  let fixture: ComponentFixture<Leyte6Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Leyte6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
