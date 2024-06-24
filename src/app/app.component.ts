import { Component, VERSION } from '@angular/core';
import { COLORS } from './colors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  colors = COLORS;

  addColor(input: HTMLInputElement): void {
    if (!input.value) {
      return;
    }

    const newColor = { name: input.value, hex: Math.random().toString() };

    this.colors = [...this.colors, newColor];
    input.value = '';
  }

  colorTrackBy(index: any, color: any) {
    return color.hex;
  }
}
