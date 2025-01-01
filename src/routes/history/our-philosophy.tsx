import { Navbar } from '@/components/Navbar'
import { OurPhilosophy } from '@/components/about/OurPhilosophy'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/history/our-philosophy')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <Navbar />
  <OurPhilosophy />
  </div>
}
