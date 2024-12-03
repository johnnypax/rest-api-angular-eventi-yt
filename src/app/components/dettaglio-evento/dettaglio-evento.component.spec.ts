import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioEventoComponent } from './dettaglio-evento.component';

describe('DettaglioEventoComponent', () => {
  let component: DettaglioEventoComponent;
  let fixture: ComponentFixture<DettaglioEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DettaglioEventoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DettaglioEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
