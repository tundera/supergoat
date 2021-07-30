import type { FC } from 'react';

import Script from 'next/script';

import siteMetadata from 'src/data/siteMetadata';

const PlausibleScript: FC = () => {
  return (
    <>
      <Script
        strategy="lazyOnload"
        data-domain={siteMetadata.analytics.plausibleDataDomain}
        src="https://plausible.io/js/plausible.js"
      />
      <Script strategy="lazyOnload">
        {`
            window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }
        `}
      </Script>
    </>
  );
};

export default PlausibleScript;

// https://plausible.io/docs/custom-event-goals
export const logEvent = (eventName, ...rest) => {
  // @ts-expect-error fix this
  return window.plausible?.(eventName, ...rest);
};
