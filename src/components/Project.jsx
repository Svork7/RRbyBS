import { Link, useParams } from 'react-router-dom'
import projects from '../data/projects'

const Project = () => {
  const params = useParams()
  console.log(params)
  const project = projects.find((project) => project.slug === params.slug)
  return (
    <>
      <h1>{project.title}</h1>
      <h2>{project.slug}</h2>
      <h3>id: {project.id}</h3>

      {/*
      переход по абсолютной ссылке
      <Link to="/projects">К списку проектов</Link>*/}
      {/*переход по свойству relative*/}
      <Link to=".." relative="path">
        К списку проектов
      </Link>
    </>
  )
}

export default Project
