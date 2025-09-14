import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'calc-display',
  styleUrl: 'calc-display.scss',
  shadow: true,
})
export class CalcDisplay {
  @Prop() value: string;

  render() {
    return <div class="display">{this.value || '0'}</div>;
  }
}
