import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CamarinesS3Page } from './camarines-s3.page';

describe('CamarinesS3Page', () => {
  let component: CamarinesS3Page;
  let fixture: ComponentFixture<CamarinesS3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CamarinesS3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
