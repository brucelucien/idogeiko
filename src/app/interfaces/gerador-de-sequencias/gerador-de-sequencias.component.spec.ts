import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeradorDeSequenciasComponent } from './gerador-de-sequencias.component';

describe('GeradorDeSequenciasComponent', () => {
  let component: GeradorDeSequenciasComponent;
  let fixture: ComponentFixture<GeradorDeSequenciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeradorDeSequenciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeradorDeSequenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
