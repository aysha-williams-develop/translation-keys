import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhraseInputFormComponent } from './phrase-input-form.component';

describe('PhraseInputFormComponent', () => {
  let component: PhraseInputFormComponent;
  let fixture: ComponentFixture<PhraseInputFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhraseInputFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhraseInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('phrase is translated', () => {
    expect(component).toBeTruthy();
    let button = fixture.debugElement.nativeElement.querySelector('#submitTranslationBtn');
    button.click();

    // expect(component.translatedText).toEqual("Hola");
  });
});
