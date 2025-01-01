import { Navbar } from '@/components/Navbar'
import { History } from '@/pages/History'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/history/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <Navbar />
    <History />
  </div>
}
