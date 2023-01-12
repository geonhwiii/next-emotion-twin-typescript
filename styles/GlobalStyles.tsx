import { Global } from '@emotion/react';
import tw, { css, GlobalStyles as TwinStyles } from 'twin.macro';

const customStyles = css({
  ['*']: {
    ...tw`box-border p-0 m-0`,
  },
  ['html,body']: {
    ...tw`max-w-full overflow-x-hidden`,
  },
  html: {
    ...tw`dark:[color-scheme: dark]`,
  },
  body: {
    ...tw`antialiased`,
  },
  a: {
    ...tw`no-underline text-inherit`,
  },
});

const GlobalStyles = () => (
  <>
    <TwinStyles />
    <Global styles={customStyles} />
  </>
);

export default GlobalStyles;
