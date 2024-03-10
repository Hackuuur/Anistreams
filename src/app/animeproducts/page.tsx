import AnimeReel from '@/components/AnimeReel'
import Footer from '@/components/Footer'
import { Wrapper } from '@/components/Wrapper'
import React from 'react'

const page = () => {
  return (
    <>
    <Wrapper>
    
    
    <AnimeReel query={{sort:'desc',limit:25}} title="All Anime" />
    
   
  </Wrapper>
  <Footer />
    </>
  )
}

export default page