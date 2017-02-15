import React from 'react'

import './style.css'

const About = props => {
  return (
    <div className='AboutUs header'>
      <div className='container'>
        <div className='row'>
          <div className='text-center title'>
            <h1>About Us</h1>
          </div>
        </div>
      </div>
      <div className='container body'>
        <div className='row'>
          <div className='col-sm-8 who'>
            <h2>Who We Are</h2>
            <br />
            <h4>This application was created by a team of students from Enspiral Dev Academy in Auckland. </h4>
            <h4>It was built in one week as our final project for the course.
            </h4>
          </div>
          <div className='col-sm-4 contact'>
            <h2>Contact Us</h2>
            <address>
              <strong>
                Enspiral Dev Academy
              </strong>
              <br />
                19 Ruru St,
              <br />
                Eden Terrace, Auckland 1021
            </address>
            <address>
              <abbr title='Phone'>Phone:</abbr> (022) 368-6338
            </address>
          </div>
        </div>
      </div>
      <h2 className='text-center teamTitle'>
        Our team
      </h2>
      <div className='container'>
        <div className='team'>
          <div className='card col-md-2'>
            <img className='card-img-top circle' src='/images/displaypics/Ti.jpeg' height='150' width='150' alt='Card image cap' />
            <div className='card-block'>
              <h4 className='card-title'>Thibaud Bretin</h4>
              <a href='https://github.com/Ti-Bretin'><p className='card-text'>Click here for my Github
              </p></a>
            <p className='card-text'>Or email me at:</p>
                <p><a href='mailto:email'>thibaudtd@gmail.com</a></p>
            </div>
          </div>
          <div className='card col-md-2'>
            <img className='card-img-top circle' src='/images/displaypics/David.jpeg' height='150' width='150' alt='Card image cap' />
            <div className='card-block'>
              <h4 className='card-title'>David Christie</h4>
              <a href='https://github.com/davidchristie'><p className='card-text'>Click here for my Github
              </p></a>
              <p className='card-text'>Or email me at:</p>
              <p><a href='mailto:email'>davidchristie.nz@gmail.com</a></p>
            </div>
          </div>
          <div className='card col-md-2'>
            <img className='card-img-top circle' src='/images/displaypics/Amanda.png' height='150' width='150' alt='Card image cap' />
            <div className='card-block'>
              <h4 className='card-title'>Amanda Hogan</h4>
              <a href='https://github.com/amandahogan'><p className='card-text'>Click here for my Github
              </p></a>
              <p className='card-text'>Or email me at:</p>
              <p><a href='mailto:email'>hogan.ans@gmail.com</a></p>
            </div>
          </div>
          <div className='card col-md-2'>
            <img className='card-img-top circle' src='/images/displaypics/Quinn.jpeg' height='150' width='150' alt='Card image cap' />
            <div className='card-block'>
              <h4 className='card-title'>Quinn Hu</h4>
              <a href='https://github.com/Quinn-H'><p className='card-text'>Click here for my Github
              </p></a>
              <p className='card-text'>Or email me at:</p>
              <p><a href='mailto:email'>quinn.hu618@gmail.com</a></p>
            </div>
          </div>
          <div className='card col-md-2'>
            <img className='card-img-top circle' src='/images/displaypics/Jess.jpeg' height='150' width='150' alt='Card image cap' />
            <div className='card-block'>
              <h4 className='card-title'>Jessica Neary</h4>
              <a href='https://github.com/JessicaNeary'><p className='card-text'>Click here for my Github
              </p></a>
              <p className='card-text'>Or email me at:</p>
              <p><a href='mailto:email'>JessicaFNeary@gmail.com</a></p>
            </div>
          </div>
          <div className='card col-md-2'>
            <img className='card-img-top circle' src='/images/displaypics/Anna.jpeg' height='150' width='150' alt='Card image cap' />
            <div className='card-block'>
              <h4 className='card-title'>Anna Ulyanova</h4>
              <a href='https://github.com/AnnaUlyanova'><p className='card-text'>Click here for my Github
              </p></a>
              <p className='card-text'>Or email me at:</p>
              <p><a href='mailto:email'>a.ulyanova89@gmail.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
