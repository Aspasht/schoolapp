import { Layout } from '@/components/Layout'
import { ContactForm } from '@/components/contact/ContactForm'
import { ContactHero } from '@/components/contact/ContactHero'
import { ContactInfo } from '@/components/contact/ContactInfo'
import { LocationMap } from '@/components/contact/LocationMap'


export const Contact = () => {
  return (
    <Layout>
        <ContactHero />
        <ContactForm />
        <ContactInfo />
        <LocationMap />
    </Layout>
  )
}
