import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'

import { styles } from '../styles.js'
import 'react-vertical-timeline-component/style.min.css'
import { experiences } from '../constants'

import { SectionWrapper } from '../hoc/'

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement contentStyle={{ background: '#111827', color: '#fff' }}
                             contentArrowStyle={{ borderRight: '7px solid #111827' }}
                             date={experience.date}
                             iconStyle={{background: experience.iconBg}}
                             icon={
                               <div className='flex justify-center items-center w-full h-full'>
                                 <img
                                   src={experience.icon}
                                   alt={experience.company_name}
                                   className='w-[60%] h-[60%] object-contain'
                                 />
                               </div>
                             } >
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{margin: 0}}>{experience.company_name}</p>

      <ul className="mt-5 list-disc ml-5 space-y-5">
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider" >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <div className='max-w-7xl mx-auto overflow-hidden'>
      <p className={styles.sectionSubText}>Was habe ich bisher gemacht?</p>
      <h2 className={styles.sectionHeadText}>Arbeitserfahrung</h2>

      <div className="mt-10 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default SectionWrapper(Experience, 'experience', 'bg-themeGrey-100')