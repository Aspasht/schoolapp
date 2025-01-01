import { Navbar } from '@/components/Navbar'
import { OurEarlyAge } from '@/components/about/OurEarlyAge'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/history/early-years')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <Navbar />
      <OurEarlyAge />
    </div>
  )
}
