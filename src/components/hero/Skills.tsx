import { classNames } from 'utils'
import { skills } from './constants'
import styles from './styles.module.css'

export default function Skills() {
  return (
    <div
      className="mt-3 flex h-8 overflow-hidden text-xl"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <h3 className="mr-2 text-2xl">expert in</h3>
      <div
        className={classNames(
          styles.rolling,
          'flex flex-col items-start gap-1'
        )}
      >
        {skills.map((skill, idx) => (
          <h3
            key={skill + idx}
            className="h-8 bg-gray-800 px-2 text-2xl font-medium text-white"
          >
            {skill}
          </h3>
        ))}
      </div>
    </div>
  )
}
