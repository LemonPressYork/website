import * as React from 'react';
import { getCssString } from './src/stitches.config';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <style
      id="stitches"
      dangerouslySetInnerHTML={{
        __html: getCssString(),
      }}
    />,
  ]);
};
