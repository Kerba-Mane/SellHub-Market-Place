import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditYProductComponent } from './edit-y-product.component';

describe('EditYProductComponent', () => {
  let component: EditYProductComponent;
  let fixture: ComponentFixture<EditYProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditYProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditYProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
