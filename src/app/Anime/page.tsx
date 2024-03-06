import AnimeReel from '@/components/AnimeReel'
import { Wrapper } from '@/components/Wrapper'
import React from 'react'

const page = () => {
  return (
    <Wrapper>
      <div className="" >
      <AnimeReel query={{sort:'desc',limit:25}} title="All Anime" />
      </div>
     
    </Wrapper>
  )
}

export default page