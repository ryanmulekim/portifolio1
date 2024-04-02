import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidaddesComponent } from './habilidaddes.component';

describe('HabilidaddesComponent', () => {
  let component: HabilidaddesComponent;
  let fixture: ComponentFixture<HabilidaddesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilidaddesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabilidaddesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
