import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsCondiftionsComponent } from './terms-condiftions.component';

describe('TermsCondiftionsComponent', () => {
  let component: TermsCondiftionsComponent;
  let fixture: ComponentFixture<TermsCondiftionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TermsCondiftionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermsCondiftionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
