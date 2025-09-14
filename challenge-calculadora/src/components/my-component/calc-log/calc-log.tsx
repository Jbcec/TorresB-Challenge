import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'calc-log',
  styleUrl: 'calc-log.scss',
  shadow: true,
})
export class CalcLog {
  @Prop() items: string[] = [];

  render() {
    return (
      <div class="log">
        <h3>Historial</h3>
        <ul>
          {this.items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}
