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

  it('phrase is translated', () => {
    spyOn(component, 'getTranslation' )
    let textField = fixture.debugElement.nativeElement.querySelector('#phraseInput');
    textField.text = "hello";

    let button = fixture.debugElement.nativeElement.querySelector('#submitTranslationBtn');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.getTranslation).toHaveBeenCalled();
    })

    // component.getTranslation().

    // expect(component.translatedText).toEqual("hola");
  });
});
