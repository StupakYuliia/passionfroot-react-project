import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Audience from './components/Audience/Audience'
import Challenges from './components/Challenges/Challenges'
import Benefits from './components/Benefits/Benefits'
import SpritePassionfroot from './components/SpritePassionfroot/SpritePassionfroot'
import Resources from './components/Resources/Resources'

export default function App() {
  return (
    <div className='app-wrapper'>
      <Header/>
      <main>
        <Hero/>
        <Audience/>
        <Challenges/>
        <Benefits/>
        <SpritePassionfroot/>
        <Resources/>
      </main>
    </div>
  )  
}
