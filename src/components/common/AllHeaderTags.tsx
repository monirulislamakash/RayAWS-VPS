import React from 'react'

const AllHeaderTags = () => {
  return (
    <>
        {/* Google verification Tag */}
        <meta name="google-site-verification" content="ixwSHQZjj-JnWg7grMwRLJ1fAD0r6qt3y8dXtthfE3Q" />
        {/* <!-- Google Tag Manager --> */}
        <script>
            {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5K9GXPFG');
            `}
        </script>
        {/* <!-- End Google Tag Manager --> */}
        {/* <!-- Social Meta Tags --> */}
    </>
  )
}
export default AllHeaderTags
