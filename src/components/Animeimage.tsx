import Image from 'next/image';
import React from 'react'
interface Animeiposterimage {
    urls: string[];
    
  }
const Animeimage = ({ urls }: Animeiposterimage) => {
  return (
    <>
    {urls.map((url,i)=>(

        <div className="poster">
                  <Image alt='' fill src={url} />
        </div>
    ))

    }
    </>
  )
}

export default Animeimage