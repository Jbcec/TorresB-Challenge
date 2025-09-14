export function calculate(expression: string): number {
  const tokens = tokenize(expression);
  const rpn = toRPN(tokens);
  return evalRPN(rpn);
}

function tokenize(expr: string): string[] {
  return expr.match(/(\d+(\.\d+)?)|[+\-*/%^()]/g) || [];
}

function toRPN(tokens: string[]): string[] {
  const output: string[] = [];
  const operators: string[] = [];
  const precedence: Record<string, number> = { '+': 1, '-': 1, '*': 2, '/': 2, '%': 2, '^': 3 };

  for (const token of tokens) {
    if (!isNaN(Number(token))) {
      output.push(token);
    } else if (['+', '-', '*', '/', '%', '^'].includes(token)) {
      while (
        operators.length &&
        precedence[operators[operators.length - 1]] >= precedence[token] &&
        token !== '^'
      ) {
        output.push(operators.pop()!);
      }
      operators.push(token);
    } else if (token === '(') {
      operators.push(token);
    } else if (token === ')') {
      while (operators.length && operators[operators.length - 1] !== '(') {
        output.push(operators.pop()!);
      }
      operators.pop();
    }
  }
  while (operators.length) output.push(operators.pop()!);
  return output;
}

function evalRPN(rpn: string[]): number {
  const stack: number[] = [];
  for (const token of rpn) {
    if (!isNaN(Number(token))) {
      stack.push(Number(token));
    } else {
      const b = stack.pop()!;
      const a = stack.pop()!;
      switch (token) {
        case '+': stack.push(a + b); break;
        case '-': stack.push(a - b); break;
        case '*': stack.push(a * b); break;
        case '/': stack.push(a / b); break;
        case '%': stack.push(a % b); break;
        case '^': stack.push(Math.pow(a, b)); break;
      }
    }
  }
  return stack[0];
}
