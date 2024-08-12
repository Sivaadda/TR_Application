import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FteSummaryComponent } from './fte-summary.component';

describe('FteSummaryComponent', () => {
  let component: FteSummaryComponent;
  let fixture: ComponentFixture<FteSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FteSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FteSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
