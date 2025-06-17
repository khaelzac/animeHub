import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [title, setTitle] = useState({})
  const [loading, setLoading] = useState(true)

  const fetchTitle = async () => {
    const response = await axios.get('https://animehub-613r.onrender.com/');
    const data = response.data;
    setTitle(data);
    setLoading(false);

    
  }
  useEffect(() => {
    
    fetchTitle();
    const onScroll = () => {
    // your scroll logic
  };

  window.addEventListener('scroll', onScroll, { passive: true });

  return () => window.removeEventListener('scroll', onScroll);
    // console.log(title);
  }, [])
  return (
    <>
      {!loading && title.map((item, index) => (
        <div key={index}>
          <h2>{item.title}</h2>
          <img src={item.images.jpg.image_url} alt={item.title} />
          <p>{item.synopsis}</p>


          <iframe
            src={item.trailer.embed_url}
            title="Embedded YouTube Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            style={{
              aspectRatio: '16/9',
              width: '70%',
            }}
          ></iframe>
        </div>
      ))}
    </>
  )
}

export default App

