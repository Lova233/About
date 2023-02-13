import { Component, Input, OnInit } from '@angular/core';
import { TextBlockModel } from 'src/app/utils/models/text-block.model';

@Component({
  selector: 'app-text-block',
  templateUrl: './text-block.component.html',
  styleUrls: ['./text-block.component.scss']
})
export class TextBlockComponent implements OnInit {
  @Input() textBlock: TextBlockModel;

  constructor() { }

  ngOnInit(): void {
  }

}
