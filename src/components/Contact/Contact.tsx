import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){
  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>I'm ready to work | contact me now</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:chetanpanditt48@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:chetanpanditt48@gmail.com">chetanpanditt48@gmail.com</a>
        </div>
        <div>
        <a href="tel:+919111490648"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+919111490648">(+91) 9111490648</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}