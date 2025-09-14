import { Component, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'calc-keypad',
  styleUrl: 'calc-keypad.scss',
  shadow: true,
})
export class CalcKeypad {
  @Event() buttonPressed: EventEmitter<string>;

  private buttons: string[] = [
    'C', 'CLR', '%', '/',
    '7', '8', '9', '*',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '='
  ];

  handleClick(value: string) {
    this.buttonPressed.emit(value);
  }

  render() {
    return (
      <div class="keypad">
        {this.buttons.map(btn => (
          <button onClick={() => this.handleClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    );
  }
}
