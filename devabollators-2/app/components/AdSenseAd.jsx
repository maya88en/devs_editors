    // components/AdSenseAd.js
    import React, { useEffect } from 'react';

    const AdSenseAd = ({ adSlot }) => {
      useEffect(() => {
        try {
          // Push the ad unit to the AdSense array
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (err) {
          console.error("AdSense error:", err);
        }
      }, []); // Empty dependency array ensures this runs once after initial render

      return (
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-7446299963890807"
          data-ad-slot={adSlot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      );
    };

    export default AdSenseAd;