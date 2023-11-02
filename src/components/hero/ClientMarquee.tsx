import { useRef } from 'react'
import styles from './styles.module.css'

const clients: Array<string> = [
  'telkom',
  'bmkg',
  'garutkab',
  'pijar',
  'dgti',
  'ezy',
  'dishub',
  'selleri'
]

function Clients() {
  return (
    <div className={styles['marquee-track']}>
      {clients.map((client) => (
        <img
          key={client}
          src={`/images/clients/${client}.png`}
          alt="bmkg"
          className="mx-3 h-12 w-auto object-contain"
        />
      ))}
    </div>
  )
}

const ClientMarquee = () => {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={ref}
      className="-z-10 mx-auto mt-5 flex w-full max-w-3xl flex-col items-start justify-center py-1 md:mt-10 md:flex-row md:items-center"
    >
      <h2 className="mr-0 flex-1 whitespace-nowrap font-medium text-gray-700 md:mr-6">
        Collaborated with
      </h2>
      <div className="relative mt-4 flex w-full overflow-hidden py-2 md:mt-0">
        <Clients />
        <Clients />
        <div className={styles['client-overlay']}></div>
      </div>
    </div>
  )
}

export default ClientMarquee
