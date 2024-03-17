import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import Illustration from "../../assets/illustration.svg"
import githubIcon from '../../assets/github.svg'
import Hello from '../../assets/Hello.gif'
import gfg from '../../assets/gfg.svg'
import leetcode from '../../assets/leetcode.svg'
import chetancv from '../../assets/chetancv.svg'
import telegram from '../../assets/telegram.svg'
export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Hello <img src={Hello} alt="Hello" width="20px" />, I'm</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>I'm Chetan Sharma</h1>
          <h4>From <span className="cllgname"> Ujjain (M.P)</span> , pursuing my B.Tech from <span className="cllgname"> Indian Institute of Information Technology Jabalpur [ IIITJ ]   </span> Batch 2020, I am fueled by a passion for leveraging technology to shape a brighter future.</h4>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>Full Stack Developer [ MongoDB , Express.js , React.js , Next.js , Node.js ] , C++ , JavaScript , TypeScrpt , SQL , GitHub , BootStrap</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume"></p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <div className="resume"><a className="resumea"
              href="https://drive.google.com/file/d/1OpdJ_XDw9QsDBdWaZBKnU_lg8GjUxTGJ/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <img src={telegram} alt="" /> 
              <h3>Download my resume for your refference </h3>
            </a></div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          {/* <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">Contact</NavHashLink>
          </BrowserRouter> */}
          <h3 style={{ color: 'black', background: 'white', padding: '1rem', borderRadius: '1rem' }}>Discover the essence of my coding prowess across various platforms:</h3>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
          <div className="social-media">
            <a
              href="https://leetcode.com/leetcodechetansharma/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={leetcode} alt="Linkedin" />
            </a>
            <a
              href="https://github.com/lordchetan7773"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a
              href="https://auth.geeksforgeeks.org/user/chetansharma7773"
              target="_blank"
              rel="noreferrer"
            >
              <img src={gfg} alt="Whatsapp" />
            </a>
            <a
              href="https://t.me/CodeVinayak"
              target="_blank"
              rel="noreferrer"
            >
              {/* <img src={telegram} alt="telegram" /> */}
            </a></div>
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={Illustration} alt="Ilustração" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}