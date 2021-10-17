import React from "react";
import parse, { attributesToProps, domToReact } from "html-react-parser";

import { H1, H2, H3 } from "../components/Heading";
import { Text } from "../components/Text";
import { TextLink } from "../components/Link";
import { Figure } from "../components/Figure";

const mappings = {
  p: Text,
  h1: H1,
  h2: H2,
  h3: H3,
  a: TextLink,
  figure: Figure,
};

const options = {
  replace: (domNode) => {
    const props = domNode.attribs && attributesToProps(domNode.attribs);

    if (!mappings[domNode.name]) {
      return;
    }

    const Element = mappings[domNode.name];

    if (domNode.children) {
      return <Element {...props}>{domToReact(domNode.children, options)}</Element>;
    }

    return <Element {...props} />;
  },
};

export const parseHTML = (html: string, customOptions = {}) =>
  parse(html, { ...options, ...customOptions });
