import { useEffect, useState } from 'react';

import { annotateXML } from '../helpers/annotate-xml';
import { highlightXML } from '../helpers/highlight-js';
import { Annotation } from '../types/validations';

export interface UseAnnotationsOptions {
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
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    if (!fileString) return;
    annotate(fileString);
  }, [fileString]);

  useEffect(() => {
    const target = getTarget();
    if (!target?.style) return;
    target.style.backgroundColor = '#ffc3c3';
    target.scrollIntoView({ behavior: 'smooth' });
  }, [activeIndex]);

  const annotate = function (fileString: string) {
    const annotated = annotateXML({
      SaxonJS,
      xmlString: fileString,
      annotations,
      formatXML: highlightXML,
    });
    setHtml(annotated);
  };

  const getTarget = function () {
    const annotation = annotations.at(activeIndex);
    if (!annotation) return;
    const target = document.querySelector(
      `#${annotation.uniqueId}`
    ) as HTMLElement;
    return target;
  };

  const activateAnnotation = function (uniqueId: string) {
    const activeIndex = annotations.findIndex(
      (annotation) => annotation.uniqueId === uniqueId
    );
    setActiveIndex(activeIndex);
  };

  const prev = function () {
    const target = getTarget();
    if (target) target.style.backgroundColor = 'unset';
    setActiveIndex((prevState) => {
      const activeIndex =
        (prevState + annotations.length - 1) % annotations.length;
      return activeIndex;
    });
  };

  const next = function () {
    const target = getTarget();
    if (target) target.style.backgroundColor = 'unset';
    setActiveIndex((prevState) => {
      const activeIndex = (prevState + 1) % annotations.length;
      return activeIndex;
    });
  };
  return {
    html,
    annotation: annotations.at(activeIndex),
    activeIndex,
    activateAnnotation,
    prev,
    next,
  };
}
