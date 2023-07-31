import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipPartComponent } from './ship-part.component';

describe('ShipPartComponent', () => {
  let component: ShipPartComponent;
  let fixture: ComponentFixture<ShipPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipPartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
