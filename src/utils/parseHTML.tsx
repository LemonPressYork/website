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

const options2 = {
  replace: (domNode) => {
    if (domNode.attribs && domNode.name === "p") {
      const props = attributesToProps(domNode.attribs);
      return <Text {...props}>{domToReact(domNode.children)}</Text>;
    }

    if (domNode.attribs && domNode.name === "h1") {
      const props = attributesToProps(domNode.attribs);
      return <H1 {...props}>{domToReact(domNode.children)}</H1>;
    }

    if (domNode.attribs && domNode.name === "h2") {
      const props = attributesToProps(domNode.attribs);
      return <H2 {...props}>{domToReact(domNode.children)}</H2>;
    }

    if (domNode.attribs && domNode.name === "h3") {
      const props = attributesToProps(domNode.attribs);
      return <H3 {...props}>{domToReact(domNode.children)}</H3>;
    }

    if (domNode.attribs && domNode.name === "a") {
      const props = attributesToProps(domNode.attribs);
      return <TextLink {...props}>{domToReact(domNode.children)}</TextLink>;
    }

    if (domNode.attribs && domNode.name === "figure") {
      const props = attributesToProps(domNode.attribs);
      return <Figure {...props}>{domToReact(domNode.children)}</Figure>;
    }
  },
};

export const parseHTML = (html: string, customOptions = {}) =>
  parse(html, { ...options, ...customOptions });
