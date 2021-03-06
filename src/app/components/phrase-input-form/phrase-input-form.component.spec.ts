import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhraseInputFormComponent } from './phrase-input-form.component';
import { TranslatorService } from '../../services/translator.service';

describe('PhraseInputFormComponent', () => {
  let component: PhraseInputFormComponent;
  let fixture: ComponentFixture<PhraseInputFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        PhraseInputFormComponent 
      ],
      providers: [
        TranslatorService
      ]
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

  it('phrase is translated when button is clicked', () => {
    spyOn(component, 'getTranslation' )
    let textField = fixture.debugElement.nativeElement.querySelector('#phraseInput');
    textField.text = "hello";

    let button = fixture.debugElement.nativeElement.querySelector('#submitTranslationBtn');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.getTranslation).toHaveBeenCalled();
    })

  });

  it('phrase is translated', () => {
    let translation = component.getTranslation("hello");
    expect(translation).toEqual("hola")
  });

  it('displays translated text', () => {
    let textField = fixture.debugElement.nativeElement.querySelector('#phraseInput');
    textField.value = "hello";

    let button = fixture.debugElement.nativeElement.querySelector('#submitTranslationBtn');
    button.click();

    let translation = fixture.debugElement.nativeElement.querySelector('#translated-text');
    expect(translation.innerHTML).toEqual("hola")
  });
});
