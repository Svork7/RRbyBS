import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Contacts from './components/Contacts'
import NotFound from './components/NotFound'
import About from './components/About'
import Projects from './components/Projects'
import MainLayout from './layouts/MainLayout'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* /* выводит страницу на которую нет маршрута*/}
          <Route path="/" element={<MainLayout />}>
            {/*относительные ссылки*/}
            <Route path="about" element={<About />} />
            <Route index element={<Home />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="projects" element={<Projects />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
