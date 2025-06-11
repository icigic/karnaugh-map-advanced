import { Component, input } from '@angular/core';
import { KMapFeature } from '../kmap-feature';

@Component({
  selector: 'app-content-item',
  imports: [],
  templateUrl: './content-item.html',
  styleUrl: './content-item.css'
})
export class ContentItem {
  kMapFeature = input<KMapFeature>();
}
