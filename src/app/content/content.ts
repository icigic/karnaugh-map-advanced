import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentItem } from "../content-item/content-item";
import { KMapFeature } from '../kmap-feature';

@Component({
  selector: 'app-content',
  imports: [ContentItem, CommonModule],
  templateUrl: './content.html',
  styleUrl: './content.css'
})
export class Content {
  rade: KMapFeature = {
    text: 'This is a content item.',
    imageUrl: 'assets/KMap1.png'
  }
  kMapFeatures: KMapFeature[] = [
    {
      text: 'This is a content item.',
      imageUrl: 'assets/KMap1.png'
    }, {
      text: 'This is another content item.',
      imageUrl: 'assets/KMap2.png'
    }, {
      text: 'This is a third content item.',
      imageUrl: 'assets/KMap3.png'
    },
  ];
}
