// Example AdComponent.tsx
import React, { useEffect } from 'react';

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

interface AdComponentProps {
  adSlot: string;
  adFormat?: string; // e.g., 'auto', 'fluid'
  adLayout?: string; // e.g., 'in-article'
}

const AdComponent: React.FC<AdComponentProps> = ({ adSlot, adFormat = 'auto', adLayout = '' }) => {
  useEffect(() => {
    try {
      if (window.adsbygoogle) {
        window.adsbygoogle.push({});
      }
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }} // Adjust styling as needed
      data-ad-client="ca-pub-7446299963890807"
      data-ad-slot={adSlot}
      data-ad-format={adFormat}
      data-ad-layout={adLayout}
      data-full-width-responsive="true" // Optional, for responsive ads
    ></ins>
  );
};

export default AdComponent;