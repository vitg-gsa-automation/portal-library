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
  const [activeIndex, setActiveIndex] = useState<number>();

  useEffect(() => {
    if (!fileString) return;
    annotate(fileString);
  }, [fileString]);

  useEffect(() => {
    const target = getTarget();
    if (!target?.style) return;
    target.style.backgroundColor = '#ffc3c3';
    target.scrollIntoView();
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
    if (activeIndex === undefined) return;
    const annotation = annotations.at(activeIndex);
    if (!annotation) return;
    const target = document.querySelector(
      `#${annotation.uniqueId}`
    ) as HTMLElement;
    return target;
  };

  const activateAnnotation = function (uniqueId: string) {
    //Remove previous annotation's highlight
    const target = getTarget();
    if (target) target.style.backgroundColor = 'unset';

    const index = annotations.findIndex(
      (annotation) => annotation.uniqueId === uniqueId
    );
    setActiveIndex(index);
  };

  const prev = function () {
    const target = getTarget();
    if (target) target.style.backgroundColor = 'unset';
    setActiveIndex((prevState) => {
      if (prevState === undefined) return 0;
      const activeIndex =
        (prevState + annotations.length - 1) % annotations.length;
      return activeIndex;
    });
  };

  const next = function () {
    const target = getTarget();
    if (target) target.style.backgroundColor = 'unset';
    setActiveIndex((prevState) => {
      if (prevState === undefined) return 0;
      const activeIndex = (prevState + 1) % annotations.length;
      return activeIndex;
    });
  };
  return {
    html,
    annotation:
      activeIndex !== undefined ? annotations.at(activeIndex) : undefined,
    activeIndex,
    activateAnnotation,
    prev,
    next,
  };
}
