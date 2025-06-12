import { Injectable } from '@angular/core';
import { KMapFeature } from '../kmap-feature';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  constructor() { }

  protected kMapFeatures: KMapFeature[] = [
    {
      text: 'Minimize your logic circuits with Karnaugh Maps',
      imageUrl: 'assets/KMap1.png'
    }, {
      text: 'Enter logic functions or truth tables',
      imageUrl: 'assets/KMap2.png'
    }, {
      text: 'See all possible solutions',
      imageUrl: 'assets/KMap3.png'
    },
  ];

  getAllFeatures(): KMapFeature[] {
    return this.kMapFeatures;
  }
}
