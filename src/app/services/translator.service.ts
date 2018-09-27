import { Injectable } from '@angular/core';
import { LanguageType } from '../enums/language-type.enum';

@Injectable()
export class TranslatorService {

  constructor() { }

  getTranslation(language: LanguageType, phrase: string) {
    var dictionary = {
      "hello": "hola",
      "How are you?": "Cómo estás?",
      "good-bye": "adios"
    }
    
    return dictionary[phrase]
  }
}
