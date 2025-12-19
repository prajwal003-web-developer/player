import Head from "next/head";
import { useRouter } from "next/router";

export const servers = [
  "https://player.videasy.net/",
  "https://player.vidzee.wtf/embed/",
  "https://vidsync.xyz/embed/movie/",
   'https://vidfast.pro/',  

   'https://vidsrc-embed.ru/embed/',
   "https://vidrock.net/",
   "https://primesrc.me/embed/",
  
   'https://vidnest.fun/',
   'https://111movies.com/',   
    "https://spencerdevs.xyz/movie/",
    'https://www.vidking.net/embed/',
     'https://rivestream.net/embed?',
    
   
	
  ]

export default function Page() {
  const router = useRouter();
  let { server, type, id, season, episode } = router.query;

  

  if(!server){
    server=1
  }

  let link = ''

  const l1 = servers[server-1]


  if(type=='tv'){
    link = servers[server-1]+'tv/'+id+'/'+season+'/'+episode

    if(l1.startsWith("https://rivestream.net")){
      servers[server-1]+'type=tv&id='+id+'&season='+season+'&episode'+episode
    }
    else if(l1.startsWith("https://primesrc.me/embed")){
      link = l1+'tv?tmdb='+id+'&season='+season+'&episode='+episode
    }
  }else{
    link = servers[server-1]+'movie/'+id
    if(link.startsWith("https://rivestream.net")){
      link =servers[server-1]+'type=movie&id='+id
    }
    else if(l1.startsWith("https://primesrc.me/embed")){
      link = li+'movie&tmdb='+id
    }

  }

  


  return ( 
    
  <>

   <style>{`
        * {
        margin:0;
        padding:0;
        background:black;
        color:white;
   }`}
   </style>
  
    <iframe
  src={link}
  style={{ width: "100%", height: "96dvh",margin:0, border: "0" }}
  allowFullScreen
  allow="encrypted-media"
/>

{/* {link} */}
  </>


  );
}
