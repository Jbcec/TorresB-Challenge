import { Component, h, State } from '@stencil/core';
import { calculate } from '../../../utils/calc-engine';

@Component({
  tag: 'calc-app',
  styleUrl: 'calc-app.scss',
  shadow: true,
})
export class CalcApp {
  private MAX_LENGTH_DISPLAY = 12;
  private MAX_LENGTH_LOG = 20;

  @State() display: string = '0';
  @State() historial: string[] = [];

  connectedCallback() {
    window.addEventListener('keydown', this.handleKey);
  }

  disconnectedCallback() {
    window.removeEventListener('keydown', this.handleKey);
  }

  private handleKey = (event: KeyboardEvent) => {
    const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '+', '-', '*', '/', '%'];

    if (validKeys.includes(event.key)) {
      this.handleButton(event.key);
    } else if (event.key === 'Enter') {
      this.handleButton('=');
    } else if (event.key === 'Backspace') {
      this.display = this.display.length > 1 ? this.display.slice(0, -1) : '0';
    } else if (event.key === 'Escape') {
      this.handleButton('C');
    }
  };

  async handleButton(value: string) {
    if (value === 'C') {
      this.display = '0';
      return;
    }

    if (value === 'CLR') {
      this.historial = [];
      return;
    }

    if (value === 'COPY') {
      try {
        await navigator.clipboard.writeText(this.display);
      } catch (err) {
        console.error('Error copiando al clipboard', err);
      }
      return;
    }

    if (value === 'PASTE') {
      try {
        const text = await navigator.clipboard.readText();
        if (/^[0-9+\-*/.%]+$/.test(text)) {
          this.display = text.slice(0, this.MAX_LENGTH_DISPLAY);
        }
      } catch (err) {
        console.error('Error pegando desde clipboard', err);
      }
      return;
    }

    if (value === '=') {
      try {
        const result = calculate(this.display);
        const entry = `${this.display} = ${result}`;
        this.historial = [...this.historial, entry].slice(-this.MAX_LENGTH_LOG);
        this.display = result.toString().slice(0, this.MAX_LENGTH_DISPLAY);
      } catch {
        this.display = 'Error';
      }
      return;
    }

    if (this.display.length >= this.MAX_LENGTH_DISPLAY) {
      return;
    }

    if (this.display === '0') {
      this.display = value;
    } else {
      this.display += value;
    }
  }

  // ────────────────────────────────
  render() {
    return (
      <div class="layout">
        <div class="calculator panel">
          <calc-display value={this.display}></calc-display>
          <calc-keypad onButtonPressed={(e) => this.handleButton(e.detail)}></calc-keypad>
        </div>
        <div class="panel">
        <calc-log items={this.historial}></calc-log>
        </div>
      </div>
    );
  }
}
