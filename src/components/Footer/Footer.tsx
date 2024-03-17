import { Container } from './styles';
import reactIcon from '../../assets/react-icon.svg';
import linkedin from '../../assets/linkedin.svg';
import githubIcon from '../../assets/github.svg';
import whatsapp from '../../assets/whatsapp.svg';
import telegram from '../../assets/telegram.svg';
import instagramIcon from '../../assets/instagram.svg';

export function Footer() {
  return (
    <Container className="footer">

      <div>
        <p>
          chetan sharma | Ujjain (M.P) , Mob. (+91)9111490648
        </p>
      </div>
      <div>
        <p> {/* Corrected style attribute */}
          Copyright ©2024 chetansharma.in | All rights reserved
        </p>
      </div>

      <div className="social-media">
        <p  style={{color: 'white'  , background : 'blue' , padding: '0.5rem'}}>{"<FOLLOW ME ON/>"}</p>
        <a 
          href="https://www.linkedin.com/in/chetansharmali/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/lordchetan7773"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=%2B919111490648&text=Hello+chetan"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
        {/* <a
          href="https://t.me/CodeVinayak"
          target="_blank"
          rel="noreferrer"
        > */}
        {/* <img src={telegram} alt="telegram" /> */}
        {/* </a> */}
        <a
          href="https://www.instagram.com/chetan_panditt_/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </Container>
  );
}
