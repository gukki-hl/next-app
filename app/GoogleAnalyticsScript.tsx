import Script from "next/script";
import React from "react";

//**插入Google Analytics的JavaScript 脚本，用于埋点和数据收集**
const GoogleAnalyticsScript = () => {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-E720JHXSJ2"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', 'G-E720JHXSJ1');
        `}
      </Script>{" "}
    </>
  );
};

export default GoogleAnalyticsScript;
