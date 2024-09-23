
import { Link } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <header>
        <div>
          <div className='text-center font-bold bg-lime-800 text-white ml-80 mr-80 mt-5 mb-8 p-3 rounded-md'>
            <h1 className='text-4xl'>Assalamu Alaikum</h1>
            <h1 className='text-3xl'>Welcome My Area</h1>
          </div>
          <div className='flex justify-end mb-10'>
            <ul>
              <Link className='m-5 p-2 rounded font-bold' to="/about">About</Link>
              <Link className='m-5 p-2 rounded font-bold' to="/skills">Skills</Link>
              <Link className='m-5 p-2 rounded font-bold' to="/blogs">Blog</Link>
              <Link className='m-5 p-2 rounded font-bold' to="/contact">Contact</Link>
            </ul>
          </div>
        </div>
      </header>
      <body>
        <div className='w-full  flex items-center justify-center'>
          <div className='bg-orange-50 w-1/2 h-72 items-center justify-center shadow-lg '>
            <h1 className='text-3xl font-bold m-5 text-center'>About me</h1>
            <p className='text-center m-5'>I, m a passionate student, web developer, and problem solver with a focus on creating dynamic and responsive websites. I enjoy tackling challenges in web development, improving user experiences, and continuously learning new technologies.</p>
            <div className='flex justify-center'>
              <div className='ml-7'>
                <h4 className='text-center'>Name:</h4>
                <h3 className='font-semibold'>Md. Shahin hossain</h3>
              </div>
              <div className='ml-7'>
                <h4 className='text-center'>Email:</h4>
                <h3 className='font-semibold'>ss0379182@gmail.com</h3>
              </div>
              <div className='ml-7'>
                <h4 className='text-center'>Date of birth:</h4>
                <h3 className='font-semibold'>08 August 2002</h3>
              </div>
              <div className='ml-7'>
                <h4 className='text-center'>From:</h4>
                <h3 className='font-semibold'>Sirajgong,Bangladesh</h3>
              </div>
            </div>
          </div>
        </div>
        <div className=''>
          <h1 className='font-bold text-3xl text-center m-10'>A Summary of My Resume</h1>
          <div className='flex justify-between px-96'>
            <div className='space-y-5 p-5'>
              <h2 className='text-2xl font-bold'>My Education</h2>
              <div>
                <h3 className='font-semibold text-xl'>Undergraduate:</h3>
                <p>Computer Science and Engineering</p>
                <p>Jashore University of Science and Technology</p>
                <p><span className='font-medium'>Session:</span> 2020-2021</p>
                <p><span className='font-medium'>CGPA: </span>loading ...</p>
                <div className="flex-grow border-b-2 border-gray-400 mt-2" />
              </div>
              <div>
                <h3 className='font-semibold text-xl'>Higher Scondary:</h3>
                <p>Science</p>
                <p>Ullapar Science College</p>
                <p><span className='font-medium'>Session:</span> 2018-2019</p>
                <p><span className='font-medium'>CGP: </span>5.00</p>
                <div className="flex-grow border-b-2 border-gray-400 mt-2" />
              </div>
              <div>
                <h3 className='font-semibold text-xl'>Scondary:</h3>
                <p>Science</p>
                <p>Saydabad High School</p>
                <p><span className='font-medium'>Session:</span> 2017-2018</p>
                <p><span className='font-medium'>CGP: </span>5.00</p>
                <div className="flex-grow border-b-2 border-gray-400 mt-2" />
              </div>
              <div>
                <h3 className='font-semibold text-xl'>Primary:</h3>
                <p>Hatsarotia Primary School</p>
                <p><span className='font-medium'>Session:</span> 2011-2012</p>
                <p><span className='font-medium'>CGP: </span>5.00</p>
              </div>
            </div>
            <div className='space-y-5 p-5'>
              <h2 className='text-2xl font-bold'>My library</h2>
              <div>
                <h3 className='font-semibold text-xl'>Web Developer:</h3>
                <p><span className='font-medium'>HTML</span></p>
                <p><span className='font-medium'>CSS</span></p>
                <p><span className='font-medium'>JavaScript</span></p>
                <p><span className='font-medium'>React</span></p>
                <p><span className='font-medium'>Express js</span></p>
                <p><span className='font-medium'>Node js</span></p>
                <p><span className='font-medium'>Mongo DB</span></p>
                <div className="flex-grow border-b-2 border-gray-400 mt-2" />
              </div>
              <div>
                <h3 className='font-semibold text-xl'>Problem Solver:</h3>
                <p><span className='font-medium'>Data Stucture</span></p>
                <p><span className='font-medium'>Algorithm</span></p>
                <p><span className='font-medium'>Dynamic Programming</span></p>
                <p><span className='font-medium'>Graph</span></p>
                <p><span className='font-medium'>Tree</span></p>
                <div className="flex-grow border-b-2 border-gray-400 mt-2" />
              </div>
              <div>
                <h3 className='font-semibold text-xl'>Language:</h3>
                <p><span className='font-medium'>C</span></p>
                <p><span className='font-medium'>C++</span></p>
                <p><span className='font-medium'>JavaScript</span></p>
                <p><span className='font-medium'>Python</span></p>
              </div>
            </div>
          </div>
        </div>
      </body>
      <footer className="footer footer-center bg-blue-200 text-base-content rounded p-10 space-y-5">
        <nav className="justify-center flex space-x-16">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <div className="justify-center flex space-x-16">
            <a href=''>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a href='https://www.youtube.com/watch?v=msJBwOYFLNs' target='_blank'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                  d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
        <aside>
          <p className='text-center'>Copyright © {new Date().getFullYear()} - All right reserved by ZerOne Industries Ltd</p>
        </aside>
      </footer>

    </>
  )
}

export default App
