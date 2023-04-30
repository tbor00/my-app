import Image from 'next/image'
import { Text } from 'components/ui'

type JobListType = {
  title?: string
  company: string
  image?: string
  date: string
  description?: string
  roles?: Array<{
    title: string
    description: string
    date: string
  }>
  location?: string
  topics?: string[]
}

const jobList: JobListType[] = [
  {
    company: 'DD360',
    image: 'dd360.png',
    date: '2021 - Present • 1 year 7 month',
    roles: [
      {
        title: 'Tech Lead',
        date: 'Apr. 2022 - Present',
        description:
          'In my role as a team leader, I spearheaded the delivery of cutting-edge and scalable digital solutions in the Fintech and Proptech industries. With a team of 15+ talented individuals, I provided guidance and direction on implementing efficient architectures that maximized our clients success.'
      },
      {
        title: 'Software Engineer',
        date: 'Oct. 2021 - Apr. 2022',
        description:
          'As a Senior Software Engineer, I was responsible for mentoring, developing and implementing high-quality software solutions for a platform to request loans. I worked closely with cross-functional teams, including product managers, designers, and data scientists.'
      }
    ],
    location: 'México',
    topics: [
      'Chakra UI',
      'Tailwind',
      'React',
      'Nextjs',
      'Typescript',
      'Javascript',
      'Nodejs',
      'AWS',
      'Lambda',
      'Zustand',
      'PostgreSQL',
      'Vitest',
      'Jest',
      'Cypress',
      'Hexagonal Architecture',
      'Clean Architecture',
      'Flux Architecture',
      'Microservices',
      'Storybook',
      'Communication skills',
      'Redux',
      'Scrum',
      'TypeORM',
      'Sequelize',
      'Rollup'
    ]
  },
  {
    title: 'Software Engineer',
    image: 'dacodes.jpg',
    company: 'DaCodes',
    date: 'Oct. 2021 - Apr. 2022 • 7 months',
    description:
      'I had the experience of belonging to the Talent Augmentation staff of DacoDes, working and collaborating with a global team of +200 employees.',
    location: 'México'
  },
  {
    title: 'Software Engineer',
    image: 'euda.jpg',
    company: 'Eudaimonia',
    date: 'Jun. 2021 - Oct. 2021 • 5 months',
    description:
      'As an engineer in a multi-team, I had the opportunity to participate in the creation of a global music app. I specialized in building an effective content management system (CMS) to manage all the content of the mobile app. Thanks to my ability to work on both frontend and backend, I was able to ensure a smooth user experience and efficient content management. I loved being part of a project that allows users to discover and enjoy music from all over the world in a simple and convenient way..',
    location: 'Argentina',
    topics: [
      'React/w context',
      'Material UI',
      'Typescript',
      'Javascript',
      'React testing library',
      'Jest',
      'Cucumber',
      'Nodejs',
      'Express',
      'PostgreSQL',
      'Scrum'
    ]
  },
  {
    title: 'Frontend Engineer',
    image: 'leverbox.jpg',
    company: 'Leverbox',
    date: 'Feb. 2021 - Jun. 2021 • 5 months',
    description:
      'I was part of a team dedicated to providing innovative solutions for claims management. My focus on developing intuitive and efficient platforms helped improve the user experience and streamline business processes. I strived to understand customer needs and worked tirelessly to translate them into impactful and effective solutions. I am proud to have contributed to building a robust and highly efficient infrastructure that helps clients solve their challenges and achieve their goals.',
    location: 'Argentina',
    topics: [
      'Vue',
      'Vuex',
      'React',
      'Javascript',
      'Pusher',
      'Sass/Less',
      'Chartjs',
      'Bootstrap',
      'i18n',
      'Scrum'
    ]
  },
  {
    title: 'Frontend Engineer',
    company: 'Argxentia',
    image: 'argxentia.png',
    date: 'Jan. 2018 - Feb. 2021 • 3 years 2 months',
    description:
      'I contributed to the development of an online platform for buying and selling electrical materials for electrical stores. I was responsible for ensuring an attractive and intuitive user experience through the interaction of visual elements and effective design. My work allowed customers to browse and purchase products efficiently, which in turn drove the companys growth and success.',
    location: 'Argentina',
    topics: [
      'HTML',
      'CSS',
      'Sass',
      'Less',
      'Bootstrap',
      'Javascript',
      'Redux',
      'React',
      'PHP',
      'Scrum'
    ]
  }
]

export function WorkExperience() {
  const hasRoles = (job: JobListType) => job.roles && job.roles.length > 0

  return (
    <div className="my-20">
      <Text variant="h1" bold="bold" className="text-3xl mb-4">
        Work Experience
      </Text>
      <Text variant="p" className="mt-2 text-sm text-slate-500 mb-12">
        Let{"'"}s take a tour of my professional experience. I have accumulated
        valuable expertise in software engineering through diverse projects,
        showcasing my skills in frontend and backend web development, and
        creating scalable and high-quality software solutions.
      </Text>
      <div style={{ maxWidth: '800px' }}>
        {jobList.map((job, index) => (
          <div className="mb-20" key={index}>
            <div className="flex gap-4">
              <div
                className="flex-none"
                style={{ width: '45px', height: '45px' }}
              >
                <Image
                  src={require(`public/work-experience/${job.image}`)}
                  alt={job.image}
                  style={{ objectFit: 'contain' }}
                  className="rounded-md"
                />
              </div>
              <div className="flex-initital">
                <Text variant="h2" bold="bold" className="text-xl">
                  {hasRoles(job) ? job.company : job.title}
                </Text>
                <div className="my-1">
                  {!hasRoles(job) && (
                    <Text variant="p" className="text-sm">
                      {job.company}
                    </Text>
                  )}
                  <Text variant="p" className="text-sm text-slate-500">
                    {job.date}
                  </Text>
                  <Text variant="p" className="text-sm text-slate-500">
                    {job.location}
                  </Text>
                </div>
                <div>
                  {!hasRoles(job) && (
                    <Text variant="p" className="mt-2 text-sm">
                      {job.description}
                    </Text>
                  )}
                  {job.roles?.map((role, index) => (
                    <div key={index} className="my-4">
                      <Text variant="h4" bold="bold" className="text-md">
                        {role.title}
                      </Text>
                      <Text variant="p" className="text-sm text-slate-500">
                        {role.date}
                      </Text>
                      <Text variant="p" className="mt-2 text-sm">
                        {role.description}
                      </Text>
                    </div>
                  ))}
                  <div className="mt-4">
                    <div className="flex flex-wrap gap-2">
                      {job.topics?.map((tech, index) => (
                        <div
                          key={index}
                          className="px-2 py-1 bg-purple-900 bg-opacity-50 shadow-lg rounded-md text-sm text-white"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
