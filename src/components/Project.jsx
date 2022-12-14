import { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import projects from '../data/projects'
//import NotFound from './NotFound'

const Project = () => {
  const params = useParams()
  //перенаправление
  const navigate = useNavigate()
  console.log(params)
  const project = projects.find((project) => project.slug === params.slug)
  //перенапраление на страницу проектов

  useEffect(() => {
    if (!project) {
      navigate('..', { relative: 'path' })
    }
  }, [project, navigate])
  //отображение страницы нот фаунд без перенаправления
  /*if (!project) {
    return <NotFound />
  }*/
  return (
    <>
      <h1>{project?.title}</h1>
      <h2>{project?.slug}</h2>
      <h3>id: {project?.id}</h3>

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
