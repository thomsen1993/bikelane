import EventsFilter from '@/components/events-page/sections/EventsFilter'
import HeroEvents from '@/components/events-page/sections/HeroEvents'
import Sponsors from '@/components/events-page/sections/Sponsors'
import React from 'react'

const page = () => {
  return (
    <main>
      <HeroEvents/>
      <EventsFilter/>
      <Sponsors/>
    </main>
  )
}

export default page
