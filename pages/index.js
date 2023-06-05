import React from 'react'
import { useRef, useEffect } from 'react'
import Head from 'next/head'



const Home = (props) => {
  const vidRef=useRef();
  useEffect(() => { vidRef.current.play(); },[]);
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Tidy Moral Chough</title>
          <meta property="og:title" content="Tidy Moral Chough" />
        </Head>
        <video
          src="https://d2ts3zms369ah.cloudfront.net/zo6r%2Ffile%2F3d22dd743e183ee46e9e2cfda62d9414_video.mp4?response-content-disposition=inline%3Bfilename%3D%223d22dd743e183ee46e9e2cfda62d9414_video.mp4%22%3B&amp;response-content-type=video%2Fmp4&amp;Expires=1685944861&amp;Signature=A7zOQuyGFaRdgnjIgm4BoODDawhJTBYcyJCA3bz8znivXKfeEdj5W3Mx58JzT7SqNlp9vssRo3ZPrhDFEhSMNdpuk-Y2SBimKeS12SPYb3LCE~BOqWcQSdHk68BHOKcINZI5yjb3G3lQx4YXqCeBVNYWxpQQR~acl8l167ziK2cZLItYJvaVH2CK68WDh45lT8PPRXY30bhwrMMlurpW4EadPgMFW9ih-t-QZhY7-Fl7Jsp1JvCVrEUIHTDEvHWvNeSohDrPDzweUb6RoTPZ6eOsJaGUOViXGB96q7yyfzNfXVL3znZStfKBwRVHcbar1Is7a6MGxFtxwoZ63PLc5Q__&amp;Key-Pair-Id=APKAJT5WQLLEOADKLHBQ"
          loop   
          ref={ vidRef }
          preload="none"
          autoPlay
          className="home-video"
        ></video>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-video {
            width: 100%;
            height: 100%;
          }
        `}
      </style>
    </>
  )
}

export default Home
