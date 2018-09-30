import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TranslatorService } from '../../services/translator.service';
import { LanguageType } from '../../enums/language-type.enum';

@Component({
  selector: 'app-phrase-input-form',
  templateUrl: './phrase-input-form.component.html',
  styleUrls: ['./phrase-input-form.component.css']
})
export class PhraseInputFormComponent implements OnInit {
  
  @ViewChild ('translatedText') translatedText: ElementRef;
  @ViewChild('submitTranslationBtn') submitTranslationBtn: ElementRef;

  constructor(
    private translatorService:TranslatorService
  ) { }

  ngOnInit() {
  }

  getTranslation(phrase:string){
    return this.translatorService.getTranslation(
      LanguageType.Spanish,
      phrase);
  }

}
