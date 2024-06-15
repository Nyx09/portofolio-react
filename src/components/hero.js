import logo from '../image/Logo.svg'

export default function Hero() {
    return (
      <section
        id="hero"
        className="px-10 w-full flex gap-12 flex-col lg:flex-row 
                   justify-center items-center align-center mt-40 
                   mb-5 lg:mt-10 max-w-5xl mx-auto lg:gap-0 h-[80vh]">
        <div className="flex-1 flex flex-col justify-center items-center gap-5">
          <div>
            <h4 className="text-center text-xl font-bold">
                Hi and welcome to
            </h4>
            <h2 className="text-center text-emerald-500 text-5xl font-bold">
              My Portfolio Website
            </h2>
            <h4 className="text-center text-xl font-bold pt-5">
                My Name is Nelvin Lee, Nice to meet you 
            </h4>
          </div>
          <p className="text-center">
          I am an Information Systems Fresh-Graduate from Binus University West Jakarta with a special interest in Quality Assurance (QA) and Software Development Engineer in Test (SDET). During my internship at Mandiri Utama Finance and DANA, I gained valuable experience in QA methodologies and SDET practices. My skills include the ability to adapt to challenging situations while building good working relationships with all coworkers. </p>
        </div>
        <div className="flex-1">
          <img src={logo}
               alt="Hello.svg"
               className="w-full h-full bg-cover"/>
        </div>
      </section>
    );
  }