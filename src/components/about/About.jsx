import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
                <p className="py-6">Check out my background right here</p>
            </div>
            <p className="text-xl mt-20">
                With four years of hands-on industry experience, I am a versatile Application Developer specializing in backend development. My expertise in Java and Spring Boot has allowed me to architect and build scalable, high-performance software solutions that meet and exceed client expectations. As a Certified AWS Solutions Architect Associate, I have a solid understanding of cloud-based infrastructure. I am dedicated to my professional growth and am open to mentorship opportunities to broaden my skill set and stay current with emerging technologies.
            </p>
            <br />

            <p className="text-xl">
                One of my standout abilities is automation using Python. Leveraging Python scripting, I have optimized workflows and enhanced operational efficiency, leading to substantial time and cost savings across various projects. My commitment to excellence extends beyond technical proficiency; I thrive in collaborative environments, am an effective communicator, and actively contribute to cross-functional teams. Eager to embrace new challenges, I am poised to apply my experience, AWS certification, and enthusiasm for learning to drive innovation, contribute to the success of forward-thinking organizations, and facilitate continuous growth within my team.
            </p>
        </div>
    </div>
  )
}

export default About