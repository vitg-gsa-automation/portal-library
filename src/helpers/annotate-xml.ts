// The npm version of saxon-js is for node; currently, we load the browser

import { Annotation } from '../types/validations';

type FormatXML = (str: string) => string;

type AnnotateXMLOptions = {
  SaxonJS: any;
  xmlString: string;
  annotations: Annotation[];
  formatXML: FormatXML;
};

function spanWrapAssertionContexts(highlightedXml: string) {
  const assertionStart =
    /<span class="hljs-comment">&lt;!--ASSERTION-START:(.*?):ASSERTION-START--&gt;<\/span>/gm;
  const assertionEnd =
    /<span class="hljs-comment">&lt;!--ASSERTION-END:(.*?):ASSERTION-END--&gt;<\/span>/gm;
  return highlightedXml
    .replaceAll(assertionStart, (_, assertionId) => {
      return `<span id="${assertionId}">`;
    })
    .replaceAll(assertionEnd, '</span>');
}

/**
 * This function is used to annotate an XML string by adding comments around nodes that match the provided XPath expressions.
 *
 * @param {Object} options - An object that contains the parameters for the function.
 * @returns {string} An annotated string.
 */
export function annotateXML({
  SaxonJS,
  annotations,
  formatXML,
  ...options
}: AnnotateXMLOptions) {
  const doc = SaxonJS.getPlatform().parseXmlFromString(options.xmlString);
  for (let i = 0; i < annotations.length; i++) {
    const annotation = annotations[i];
    let xmlContext = SaxonJS.XPath.evaluate(annotation.xpath, doc, {
      namespaceContext: { svrl: 'http://purl.oclc.org/dsdl/svrl' },
      resultForm: 'array',
    });
    const node = xmlContext[0];
    if (node && node.parentNode) {
      node.parentNode.insertBefore(
        doc.createComment(
          `ASSERTION-START:${annotation.uniqueId}:ASSERTION-START`
        ),
        node
      );
      node.parentNode.insertBefore(
        doc.createComment(`ASSERTION-END:${annotation.uniqueId}:ASSERTION-END`),
        node.nextSibling
      );
    }
  }
  const xmlString = SaxonJS.serialize(doc);
  const formattedXML = formatXML(xmlString);
  return spanWrapAssertionContexts(formattedXML);
}
