import { useRef } from 'react'
import styles from './styles.module.css'

interface Client {
  name: string
  url: string
}

const clients: Array<Client> = [
  { name: 'tunezhub.svg', url: 'https://tunezhub.com' },
  { name: 'verity.svg', url: 'https://www.verityhealth.io' },
  { name: 'azyanna.webp', url: 'https://azyanna.com' },
  { name: 'selleri.png', url: 'https://selleri.co.id' },
  { name: 'dgti.png', url: 'https://dgti.co.id' },
  { name: 'telkom.png', url: 'https://telkom.co.id' },
  { name: 'pijar.png', url: 'https://pijarbelajar.id' },
  { name: 'bmkg.png', url: 'https://bmkg.go.id' },
  { name: 'ezy.png', url: 'https://id.linkedin.com/company/ezy-it-pte-ltd' }
]

function Clients() {
  return (
    <div className={styles['marquee-track']}>
      {clients.map((client) => (
        <a href={client.url} target="_blank" className="mx-3 cursor-pointer">
          <img
            key={client.name}
            src={`/images/clients/${client.name}`}
            alt={client.name}
            className="h-10 w-auto object-contain"
          />
        </a>
      ))}
    </div>
  )
}

const ClientMarquee = () => {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={ref}
      className="relative mx-auto mt-5 flex w-full max-w-3xl flex-col items-center justify-center py-1 md:mt-10 md:flex-row md:items-center md:text-left"
    >
      <h2 className="mr-0 flex-1 whitespace-nowrap font-medium text-gray-700 md:mr-6 text-center md:text-left">
        Trusted by
      </h2>
      <div
        className={`relative mt-4 flex w-full overflow-hidden py-2 md:mt-0 ${styles['marquee-wrapper']}`}
      >
        <Clients />
        <Clients />
        <div className={styles['client-overlay']}></div>
      </div>
    </div>
  )
}

export default ClientMarquee
