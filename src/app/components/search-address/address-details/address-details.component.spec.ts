import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressDetailsComponent } from './address-details.component';

describe('AccordionExpansionComponent', () => {
  let component: AddressDetailsComponent;
  let fixture: ComponentFixture<AddressDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
