import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-phrase-input-form',
  templateUrl: './phrase-input-form.component.html',
  styleUrls: ['./phrase-input-form.component.css']
})
export class PhraseInputFormComponent implements OnInit {
  
  @ViewChild ('translatedText') translatedText: ElementRef;
  @ViewChild('submitTranslationBtn') submitTranslationBtn: ElementRef;
  constructor() { }

  ngOnInit() {
  }

}
