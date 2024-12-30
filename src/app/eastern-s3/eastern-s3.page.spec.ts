import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EasternS3Page } from './eastern-s3.page';

describe('EasternS3Page', () => {
  let component: EasternS3Page;
  let fixture: ComponentFixture<EasternS3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EasternS3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
