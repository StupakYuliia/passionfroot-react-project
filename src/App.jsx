import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'

export default function App() {
  return (
    <div className='app-wrapper'>
      <Header/>
      <main>
        <Hero/>
      </main>
    </div>
  )  
}
