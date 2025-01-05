export type CodeStyleName = 'atom-one-dark' | 'github' | 'dracula';

interface CodeStyle {
  text: string;
  keyword: string;
  function: string;
  string: string;
  number: string;
  comment: string;
  operator: string;
}

export const codeStyles: Record<CodeStyleName, CodeStyle> = {
  'atom-one-dark': {
    text: '#abb2bf',
    keyword: '#c678dd',
    function: '#61afef',
    string: '#98c379',
    number: '#d19a66',
    comment: '#5c6370',
    operator: '#56b6c2'
  },
  'github': {
    text: '#24292e',
    keyword: '#d73a49',
    function: '#6f42c1',
    string: '#032f62',
    number: '#005cc5',
    comment: '#6a737d',
    operator: '#d73a49'
  },
  'dracula': {
    text: '#f8f8f2',
    keyword: '#ff79c6',
    function: '#50fa7b',
    string: '#f1fa8c',
    number: '#bd93f9',
    comment: '#6272a4',
    operator: '#ff79c6'
  }
}; 