import Head from 'next/head'
import { useEffect, useState } from 'react'
import "react-toggle/style.css"
import Toggle from 'react-toggle'
function Home() {
  const [dark, setDark] = useState(false);
  const [theme, setTheme] = useState("light")
  const [colo, setColo] = useState("black")
  const [op, setOp] = useState("white")
  useEffect(()=>{
    if(dark){
      setTheme("dark")
      setColo("white")
      setOp("black")
    }
    else if(!dark){
      setTheme("light")
      setColo("black")
      setOp("white")
    }
  },[dark])
  function handleDark(bool){
    setDark(!dark)
  }
  return (
    <div>
      <Head>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content=""/>
        <meta property="og:title" content="Project ARPANET: Expanding Communication to Every Nook and Cranny || Arnav Gurha and Sathvik Parasa"/>
        <meta property="og:description" content="2021 NHD senior documentary entry."/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
        <meta name="color-scheme" content="light dark"></meta>
      </Head>

      
      <nav className={`navbar navbar-${theme} bg-${theme}`}>
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Navbar</span>
          <Toggle
            icons={false}
            defaultChecked={dark}
            onChange={handleDark} />
        </div>
      </nav>
    <div style={{backgroundColor:op, display:'flex', flexDirection:"column", height:"100vh",alignItems:"center"}}>
       <h1 class="display-1" style={{color:colo}}>Display 1</h1>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const data = {
    foo:"bar"
  }

  return { props: { data } }
}
export default Home;