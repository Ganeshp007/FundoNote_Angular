import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsNoteComponent } from './icons-note.component';

describe('IconsNoteComponent', () => {
  let component: IconsNoteComponent;
  let fixture: ComponentFixture<IconsNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconsNoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconsNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
