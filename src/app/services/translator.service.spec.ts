import { TestBed, inject } from '@angular/core/testing';

import { TranslatorService } from './translator.service';
import { LanguageType } from '../enums/language-type.enum';

describe('TranslatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TranslatorService]
    });
  });

  it('should be created', inject([TranslatorService], (service: TranslatorService) => {
    expect(service).toBeTruthy();
  }));
  
  it('should translate the pharse', inject([TranslatorService], (service: TranslatorService) => {
    expect(service.getTranslation(LanguageType.Spanish, "hello"))
      .toEqual("hola")

    expect(service.getTranslation(LanguageType.Spanish, "good-bye"))
    .toEqual("adios")

    expect(service.getTranslation(LanguageType.Spanish, "How are you?"))
    .toEqual("Cómo estás?");
  }));
});
