import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEventiComponent } from './lista-eventi.component';

describe('ListaEventiComponent', () => {
  let component: ListaEventiComponent;
  let fixture: ComponentFixture<ListaEventiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaEventiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaEventiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
