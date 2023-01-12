import { Global } from '@emotion/react';
import tw, { css, GlobalStyles as TwinStyles } from 'twin.macro';

const customStyles = css({
  ['*']: {
    ...tw`m-0 p-0 box-border`,
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
    ...tw`text-inherit no-underline`,
  },
});

const GlobalStyles = () => (
  <>
    <TwinStyles />
    <Global styles={customStyles} />
  </>
);

export default GlobalStyles;
