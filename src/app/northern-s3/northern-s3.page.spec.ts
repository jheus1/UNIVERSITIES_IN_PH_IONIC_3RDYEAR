import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NorthernS3Page } from './northern-s3.page';

describe('NorthernS3Page', () => {
  let component: NorthernS3Page;
  let fixture: ComponentFixture<NorthernS3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NorthernS3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
