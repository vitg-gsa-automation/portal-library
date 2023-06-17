import 'highlight.js/styles/default.css';
import hljs from 'highlight.js';

export function highlightXML(xmlString: string): string {
  return hljs.highlight(xmlString, {
    language: 'xml',
  }).value;
}
