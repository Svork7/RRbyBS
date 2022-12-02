import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Contacts from './components/Contacts'
import NotFound from './components/NotFound'
import About from './components/About'
import MainLayout from './layouts/MainLayout'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* /* выводит страницу на которую нет маршрута*/}
          <Route path="/main" element={<MainLayout />}>
            {/*относительные ссылки*/}
            <Route path="about" element={<About />} />
            <Route index element={<Home />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
