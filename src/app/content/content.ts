import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentItem } from "../content-item/content-item";
import { KMapFeature } from '../kmap-feature';
import { FeatureService } from '../features/feature-service';

@Component({
  selector: 'app-content',
  imports: [ContentItem, CommonModule],
  templateUrl: './content.html',
  styleUrl: './content.css'
})
export class Content {
  kMapFeatures: KMapFeature[] = [];
  featuresService: FeatureService = inject(FeatureService);

  constructor() { 
    this.kMapFeatures = this.featuresService.getAllFeatures();
  }
}
