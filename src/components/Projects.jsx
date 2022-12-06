import React from 'react'
import projects from '../data/projects'

function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      {projects.map((project) => {
        return <h3>{project.title}</h3>
      })}
    </div>
  )
}

export default Projects
