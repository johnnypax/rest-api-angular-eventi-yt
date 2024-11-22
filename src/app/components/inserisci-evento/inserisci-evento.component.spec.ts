import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserisciEventoComponent } from './inserisci-evento.component';

describe('InserisciEventoComponent', () => {
  let component: InserisciEventoComponent;
  let fixture: ComponentFixture<InserisciEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InserisciEventoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InserisciEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
