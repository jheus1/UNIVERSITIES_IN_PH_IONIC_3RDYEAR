import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Quezon8Page } from './quezon8.page';

describe('Quezon8Page', () => {
  let component: Quezon8Page;
  let fixture: ComponentFixture<Quezon8Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Quezon8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
