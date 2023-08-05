import Heroshow from '@/components/Heroshow'
import Info from '@/components/Info'
import Services from '@/components/Services'
import Image from 'next/image'

export default function Home() {
  return (
   
    <main className='max-w-4xl mx-auto p-4 mt-3'>

      <div>

        <Heroshow/>
        <Info/>
        <Services/>
      </div>
    </main>
  )
}
