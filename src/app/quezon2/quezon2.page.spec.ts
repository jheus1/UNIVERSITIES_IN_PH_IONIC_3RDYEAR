import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Quezon2Page } from './quezon2.page';

describe('Quezon2Page', () => {
  let component: Quezon2Page;
  let fixture: ComponentFixture<Quezon2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Quezon2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
