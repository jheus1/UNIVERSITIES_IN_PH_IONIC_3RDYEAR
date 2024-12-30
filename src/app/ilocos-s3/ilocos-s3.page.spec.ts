import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IlocosS3Page } from './ilocos-s3.page';

describe('IlocosS3Page', () => {
  let component: IlocosS3Page;
  let fixture: ComponentFixture<IlocosS3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IlocosS3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
