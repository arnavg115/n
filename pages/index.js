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
        <title>Home page</title>
      </Head>
      
      <nav className={`navbar navbar-${theme} bg-${theme}`} style={{position:"sticky", top:0,}}>
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">NHD 2021</span>
          <Toggle
            icons={false}
            defaultChecked={dark}
            onChange={handleDark} />
        </div>
      </nav>
    <div style={{backgroundColor:op, display:'flex', flexDirection:"column", overflow:"scroll",width:"100%",alignItems:"center", scrollSnapType:"y"}}>
      <div style={{display:"flex",alignItems:"center", height:"95vh", scrollSnapAlign:"center"}}>
        <h1 className="display-1" style={{color:colo,}}>Project ARPANET<span className="text-muted"> by Sathvik P. and Arnav G.</span></h1>
       </div>
       <div style={{display:"flex",alignItems:"center", height:"95vh",scrollSnapAlign:"center"}}>
       <iframe width="1020" height="630" src="https://www.youtube.com/embed/zZgtbyj8o1c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       </div>
       <div style={{display:"flex",alignItems:"center", height:"95vh",scrollSnapAlign:"center"}}>
       <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Script</button>
       <div class="collapse" id="collapseExample">
        <div class="card card-body" style={{backgroundColor:op, borderColor:colo, color:colo, marginLeft:"20px", maxWidth:"70vw"}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis. Massa tincidunt dui ut ornare lectus sit amet est. Ac turpis egestas integer eget aliquet nibh praesent tristique magna. Posuere morbi leo urna molestie at elementum eu. Blandit massa enim nec dui nunc mattis. Mattis aliquam faucibus purus in massa tempor nec feugiat. Maecenas sed enim ut sem viverra aliquet eget sit amet. Bibendum ut tristique et egestas quis ipsum suspendisse. Tincidunt nunc pulvinar sapien et.

Amet massa vitae tortor condimentum lacinia quis vel. Ultrices sagittis orci a scelerisque purus. Velit scelerisque in dictum non. Nisi vitae suscipit tellus mauris a. Quam elementum pulvinar etiam non quam. Quam vulputate dignissim suspendisse in. Dui id ornare arcu odio. Elementum nibh tellus molestie nunc non blandit. Ut faucibus pulvinar elementum integer enim. Sagittis vitae et leo duis ut diam. Urna et pharetra pharetra massa massa ultricies mi quis. Purus gravida quis blandit turpis cursus in hac habitasse platea. Purus faucibus ornare suspendisse sed nisi lacus sed viverra. Urna cursus eget nunc scelerisque viverra. Lobortis scelerisque fermentum dui faucibus in ornare quam. Varius morbi enim nunc faucibus a pellentesque sit amet. Magna eget est lorem ipsum dolor sit amet consectetur. Aliquam ut porttitor leo a diam sollicitudin tempor id. Vitae sapien pellentesque habitant morbi tristique. Diam in arcu cursus euismod quis viverra nibh.

Pretium vulputate sapien nec sagittis. Varius duis at consectetur lorem. Congue eu consequat ac felis donec et odio. Aliquet risus feugiat in ante metus dictum at tempor. Tortor posuere ac ut consequat semper viverra nam libero justo. Metus aliquam eleifend mi in. Ipsum consequat nisl vel pretium. Velit laoreet id donec ultrices tincidunt arcu non. At lectus urna duis convallis convallis tellus id interdum. Nisl pretium fusce id velit ut tortor.

Vel pretium lectus quam id leo in vitae turpis. Egestas maecenas pharetra convallis posuere morbi leo urna molestie. Id leo in vitae turpis massa sed elementum. Vitae et leo duis ut diam quam. Feugiat pretium nibh ipsum consequat nisl vel. Volutpat blandit aliquam etiam erat velit scelerisque in dictum non. Ut sem viverra aliquet eget sit amet tellus cras adipiscing. Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue. Risus sed vulputate odio ut. Dui nunc mattis enim ut tellus elementum. Accumsan tortor posuere ac ut consequat semper viverra nam libero. Ipsum dolor sit amet consectetur adipiscing elit. Aliquam vestibulum morbi blandit cursus risus at.

Diam donec adipiscing tristique risus nec feugiat in fermentum. Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Gravida arcu ac tortor dignissim convallis aenean et tortor at. Nunc sed augue lacus viverra vitae congue eu consequat ac. Tempor orci eu lobortis elementum nibh tellus molestie. Dolor purus non enim praesent elementum facilisis leo vel fringilla. Vitae aliquet nec ullamcorper sit amet risus nullam eget felis. Non quam lacus suspendisse faucibus interdum. Amet consectetur adipiscing elit pellentesque habitant morbi. Augue neque gravida in fermentum et sollicitudin ac. Arcu dictum varius duis at consectetur. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Diam vulputate ut pharetra sit. Senectus et netus et malesuada.
        </div>
      </div>
       </div>
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