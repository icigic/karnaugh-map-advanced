import { Injectable } from '@angular/core';
import { KMapFeature } from '../kmap-feature';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  constructor() { }

  protected kMapFeatures: KMapFeature[] = [
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

  getAllFeatures(): KMapFeature[] {
    return this.kMapFeatures;
  }
}
