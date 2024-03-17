import styled from "styled-components";

export const Container = styled.section`
  padding-top: 15%;
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  background: rgba(0,0,0,0);
  .hero-text{
    & > p{
      font-size: 1.8rem;
    }
    h1{
      font-size: 7rem;
    }

    h3{
      color:var(--green);
      margin: 1rem 0;
    }

    .cllgname{
      color:var(--green); 
      // background : black ; 
    }
    p.small-resume {
      margin-bottom: 5rem;
    }
  }
// New added
  .social-media{
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    padding-top:5rem;
    padding-left:1rem;
    img,span{
      font-size: 5rem;
      width: 5rem;
      background:white ; 
      padding : 0.5rem ;
      border-radius : 1rem ; 
      border:0.2rem black solid ; 
    }
  }
  .resume{
  
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    padding-top:5rem;
    padding-left:1rem;
    margin-top: 0rem;
    margin-bottom: 5rem;
    img,span{
      font-size: 5rem;
      width: 6rem;
      background:white ; 
      padding : 0.5rem ;
      border-radius : 1rem ; 
      border:0.2rem black solid ; 
    }
  }
  .resumea{
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }
  .button{
    margin-top: 5rem;
    padding: 1.4rem 6rem;
  }

  .hero-image{
    img{
      max-width: 500px;
    }
  }


  @media(max-width: 960px){
    display: block;
    margin-top: 15%;
    .hero-text{

      h1{
        font-size: 5rem;
      }
    }
    
    .hero-image{
      display: none;
    }
  }

  @media(max-width: 600px){
    margin-top: 35%;
  }
  @media(max-width: 480px){
    margin-top: 45%;
  }
`
