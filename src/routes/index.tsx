import { createFileRoute } from '@tanstack/react-router'
import LandingPage from '@/ui/pages/LandingPage'

export const Route = createFileRoute('/')({
  component: LandingPage,
})
