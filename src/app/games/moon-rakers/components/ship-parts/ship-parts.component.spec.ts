import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipPartsComponent } from './ship-parts.component';

describe('ShipPartsComponent', () => {
  let component: ShipPartsComponent;
  let fixture: ComponentFixture<ShipPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
