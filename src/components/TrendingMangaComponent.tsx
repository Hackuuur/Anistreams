import { MANGA_CATEGORIES } from '../config'
import React, { useState } from 'react'
import TrendingMangaItem from './TrendingMangaItem'

const TrendingMangaComponent = () => {
    const [activeIndex,setActiveIndex] = useState<null | number>(null)

  return (
    <div>
        {MANGA_CATEGORIES.map((category,i)=>{
            
            return(
                <TrendingMangaItem key={i} category={category}  />

            )
        })}
    </div>
  )
}

export default TrendingMangaComponent