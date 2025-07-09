import React, { useEffect } from 'react';

const AdsComponent = (props) => {
  const { dataAdSlot } = props;

  useEffect(() => {
    try {
      (adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <ins className="adsbygoogle"
         style={{ display: "block" }}
         data-ad-client="pub-7446299963890807"
         data-ad-slot={dataAdSlot}
         data-ad-format="auto"
         data-full-width-responsive="true">
    </ins>
  );
};

export default AdsComponent;