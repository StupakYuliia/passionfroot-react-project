import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Audience from './components/Audience/Audience'
import Challenges from './components/Challenges/Challenges'
import Benefits from './components/Benefits/Benefits'

export default function App() {
  return (
    <div className='app-wrapper'>
      <Header/>
      <main>
        <Hero/>
        <Audience/>
        <Challenges/>
        <Benefits/>
      </main>
    </div>
  )  
}
