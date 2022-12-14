import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import queryString from 'query-string'
import projects from '../data/projects'

function sortProjects(projects, key) {
  const sortedProjects = [...projects]
  //сортировка. Таким образом можно сортировать строки. Здесь в прямом алфавитном порядке
  sortedProjects.sort((a, b) => (a[key] > b[key] ? 1 : -1))
  return sortedProjects
}

function Projects() {
  const location = useLocation()
  const query = queryString.parse(location.search)
  const [sortKey, setSortKey] = useState(query.sort)
  const [sortedProjects, setSortedProjects] = useState(
    sortProjects(projects, sortKey)
  )
  console.log(sortProjects(projects, sortKey))
  console.log(location)
  console.log(query)
  console.log(sortKey)
  return (
    <>
      <h1>Projects</h1>
      {sortedProjects.map((project) => {
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
