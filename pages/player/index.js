import Head from "next/head";
import { useRouter } from "next/router";

export const servers = [

   'https://vidsrc-embed.ru/embed/',
   'https://vidfast.pro/',
   'https://111movies.com/',
	
   
    'https://vidnest.fun/',
    //'https://www.vidking.net/embed/',
    
   
	
  ]

export default function Page() {
  const router = useRouter();
  let { server, type, id, season, episode } = router.query;

  

  if(!server){
    server=1
  }

  let link = ''

  if(type=='tv'){
    link = servers[server-1]+'tv/'+id+'/'+season+'/'+episode
  }else{
    link = servers[server-1]+'movie/'+id
  }

  if(server=1){
    link = link+'?autoplay=true'
  }

  return (
    
    <iframe
  src={link}
  style={{ width: "100%", height: "96dvh",margin:0, border: "0" }}
  allowFullScreen
  allow="encrypted-media"
/>


  );
}
