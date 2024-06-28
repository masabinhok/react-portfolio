import './hero.css'

export default function Hero() {
  return (
    <div className="heroPage">
      <div className="heroLeft">
        <span className="heroHeading">Hi, I am Sabin Shrestha</span>
        <p className="heroIntro">I am a 19-year-old Computer Engineering student at Pulchowk, specializing in frontend development with a focus on creating dynamic, user-centric applications using React.</p>
      </div>
      <div className="heroRight">
        <img className='techskills'  src="../../../src/assets/html.png" />
        <img className='techskills'  src="../../../src/assets/css.png" />
        <img className='techskills'  src="../../../src/assets/js.png" />
        <img className='techskills'  src="../../../src/assets/react.png" />
        <img className='techskills'  src="../../../src/assets/github.png" />
        <img className='techskills'  src="../../../src/assets/python.png" />
        <img className='techskills'  src="../../../src/assets/c.png" />
        <img className='techskills'  src="../../../src/assets/c-.png" />
      </div>
    </div>
  )
}
