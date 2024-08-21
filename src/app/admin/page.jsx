import React from 'react'

import GoalsAdmin from '@/components/admin-page/sections/GoalsAdmin'
import HeroesAdmin from '@/components/admin-page/sections/HeroesAdmin'
import EventsAdmin from '@/components/admin-page/sections/EventsAdmin'

const page = () => {
  return (
    <main>
      <HeroesAdmin/>
      <GoalsAdmin/>
      <EventsAdmin/>
    </main>
  )
}

export default page
