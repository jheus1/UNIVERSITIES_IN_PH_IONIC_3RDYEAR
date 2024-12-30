import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Catanduanes1Page } from './catanduanes1.page';

describe('Catanduanes1Page', () => {
  let component: Catanduanes1Page;
  let fixture: ComponentFixture<Catanduanes1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Catanduanes1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
