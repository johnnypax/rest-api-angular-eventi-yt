import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaEventoComponent } from './modifica-evento.component';

describe('ModificaEventoComponent', () => {
  let component: ModificaEventoComponent;
  let fixture: ComponentFixture<ModificaEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificaEventoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificaEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
