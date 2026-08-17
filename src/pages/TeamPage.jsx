import emreSahiner from '../assets/team-emre-sahiner.jpeg'
import aylinMercan from '../assets/team-aylin-mercan.jpeg'
import ademKutlu from '../assets/team-adem-kutlu.jpeg'

const team = [
  {
    id: 1,
    name: 'Emre Şahiner',
    role: 'Software Development Instructor',
    description: 'Supports the team during the development process.',
    image: emreSahiner,
  },
  {
    id: 2,
    name: 'Aylin Mercan',
    role: 'Full Stack Developer',
    description: '',
    image: aylinMercan,
  },
  {
    id: 3,
    name: 'Adem Kutlu',
    role: 'Full Stack Developer',
    description: '',
    image: ademKutlu,
  },
]

function TeamPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Page header / breadcrumb */}
      <section className="flex flex-col items-center justify-center gap-2 bg-gray-50 px-6 py-10 md:py-16">
        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900">Team</h1>
        <p className="text-sm text-gray-500">Home &gt; Team</p>
      </section>

      {/* Team grid */}
      <section className="flex flex-col items-center gap-2 px-6 py-16">
        <span className="text-sm text-gray-500">Our Team</span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-8">
          MEET THE TEAM
        </h2>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-8 w-full max-w-4xl">
          {team.map((member) => (
            <div
              key={member.id}
              className="flex flex-col items-center text-center gap-2 w-full sm:w-64"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-40 rounded-full object-cover shadow-md"
              />
              <h3 className="text-base font-bold text-slate-900 mt-2">{member.name}</h3>
              <p className="text-sm font-semibold text-sky-500">{member.role}</p>
              {member.description && (
                <p className="text-sm text-gray-500 leading-6">{member.description}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default TeamPage
