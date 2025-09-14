import { Component, h, State } from '@stencil/core';
import { calculate } from '../../../utils/calc-engine';

@Component({
  tag: 'calc-app',
  styleUrl: 'calc-app.scss',
  shadow: true,
})
export class CalcApp {
  @State() display: string = '0';
  @State() historial: string[] = [];

  handleButton(value: string) {
    if (value === 'C') {
      this.display = '0';
      return;
    }

    if (value === 'CLR') {
      this.historial = [];
      return;
    }

    if (value === '=') {
      try {
        const result = calculate(this.display);
        this.historial = [...this.historial, `${this.display} = ${result}`];
        this.display = result.toString();
      } catch {
        this.display = 'Error';
      }
      return;
    }

    if (this.display === '0') {
      this.display = value;
    } else {
      this.display += value;
    }
  }

  render() {
    return (
      <div class="calculator">
        <calc-display value={this.display}></calc-display>
        <calc-keypad onButtonPressed={(e) => this.handleButton(e.detail)}></calc-keypad>
        <calc-log items={this.historial}></calc-log>
      </div>
    );
  }
}
