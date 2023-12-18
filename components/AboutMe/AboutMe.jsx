import React from 'react'

function AboutMe({route}) {
  return (
    <>
        <section id='about' className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24' aria-label="about me">
          <div className="text-slate-500">
            <p className=' mb-2'>Passionate and self-motivated developer enamored with the dynamic world of <span className='hover-highlight'>JavaScript</span>. {/* With a rich journey spanning back to 2017, */} I've been immersed in the art of website design, continually evolving my skills as a <span className='hover-highlight'>self-taught</span> developer. Presently, I contribute my talents as a <span className='hover-highlight'>Front-end Developer</span> at <span className="hover-highlight">WPDeveloper</span>, a dynamic hub where we specialize in the intricate realms of <span className="hover-highlight">WordPress</span> and cutting-edge <span className="hover-highlight">SAAS</span> product development.</p>
            <p className=' mb-2'>My expertise revolves around the powerful synergy of JavaScript and <span className="hover-highlight">React</span>, forming the cornerstone of my preferred working stack. The thrill of staying on the cutting edge of technology propels me forward, fueling a relentless desire to learn and seamlessly integrate <span className="hover-highlight">new skills</span> demanded by the ever-evolving landscape of <span className="hover-highlight">web development</span>.</p>
            <p className=''>In this exciting journey, I find joy in crafting not just <span className="hover-highlight">web apps</span> but dynamic and engaging digital experiences. As I continue to navigate the vast possibilities of the tech realm, I'm driven by a commitment to excellence and a genuine <span className="hover-highlight">passion</span> for the artistry of <span className="hover-highlight">code</span>.</p>
          </div>
        </section>
    </>
  )
}

export default AboutMe
