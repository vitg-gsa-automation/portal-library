import { useEffect, useState } from 'react';

import { annotateXML } from '../helpers/annotate-xml';
import { highlightXML } from '../helpers/highlight-js';
import { Annotation } from '../types/validations';

interface UseAnnotationsOptions {
  SaxonJS: any;
  annotations: Annotation[];
  fileString?: string;
}

export function useAnnotations({
  SaxonJS,
  fileString,
  annotations,
}: UseAnnotationsOptions) {
  const [html, setHtml] = useState('');
  const [activeIndex, setActiveIndex] = useState<number>();

  useEffect(() => {
    if (!fileString?.length) return;
    annotate(fileString);
  }, [fileString]);

  const annotate = function (fileString: string) {
    const annotated = annotateXML({
      SaxonJS,
      xmlString: fileString,
      annotations,
      formatXML: highlightXML,
    });
    setHtml(annotated);
  };

  const getTarget = function (index: number) {
    if (index === undefined) throw new Error('Index to getTarget is undefined');
    const annotation = annotations.at(index);
    if (!annotation) throw new Error('No annotation to target');
    const target = document.querySelector<HTMLElement>(
      `#${annotation.uniqueId}`
    );
    if (!target) throw new Error('Unable to find target');
    return target;
  };

  const removeActiveHighlight = function () {
    if (activeIndex !== undefined) {
      const target = getTarget(activeIndex);
      target.style.backgroundColor = 'unset';
    }
  };

  const addBackgroundAndScrollIntoView = function (index: number) {
    const target = getTarget(index);
    target.style.backgroundColor = '#ffc3c3';
    target.scrollIntoView();
  };

  const activateById = function (uniqueId: string) {
    removeActiveHighlight();
    const index = annotations.findIndex(
      (annotation) => annotation.uniqueId === uniqueId
    );
    setActiveIndex(index);
    addBackgroundAndScrollIntoView(index);
  };

  const activateByIndex = function (annotationIndex: number) {
    const exists = !!annotations.at(annotationIndex);
    if (!exists) throw new Error('Index does not exist');
    removeActiveHighlight();
    setActiveIndex(annotationIndex);
    addBackgroundAndScrollIntoView(annotationIndex);
  };

  return {
    html,
    annotation:
      activeIndex !== undefined ? annotations.at(activeIndex) : undefined,
    activeIndex,
    activateById,
    activateByIndex,
  };
}
