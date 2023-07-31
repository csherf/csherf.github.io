import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoonRakersComponent } from './moon-rakers.component';

describe('MoonRakersComponent', () => {
  let component: MoonRakersComponent;
  let fixture: ComponentFixture<MoonRakersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoonRakersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoonRakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
