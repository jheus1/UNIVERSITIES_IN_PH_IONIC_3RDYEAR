import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Quezon9Page } from './quezon9.page';

describe('Quezon9Page', () => {
  let component: Quezon9Page;
  let fixture: ComponentFixture<Quezon9Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Quezon9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
