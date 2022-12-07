import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import projects from '../data/projects'

function Projects() {
  return (
    <>
      <h1>Projects</h1>
      {projects.map((project) => {
        return (
          <div key={project.id}>
            <Link to={project.slug} className="projectLink">
              {project.title}
            </Link>
          </div>
        )
      })}
    </>
  )
}

export default Projects
