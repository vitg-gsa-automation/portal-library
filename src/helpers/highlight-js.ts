import 'highlight.js/styles/default.css';
import hljs from 'highlight.js/lib/core';
import json from 'highlight.js/lib/languages/json';
import xml from 'highlight.js/lib/languages/xml';
import yaml from 'highlight.js/lib/languages/yaml';

console.log(json);

hljs.registerLanguage('json', json);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('yaml', yaml);

export function highlightXML(xmlString: string): string {
  return hljs.highlight(xmlString, {
    language: 'xml',
  }).value;
}
