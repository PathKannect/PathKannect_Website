import React from 'react'
import MentorHeroSection from '../components/MentorHeroSection'
import MentorAboutSection from '../components/MentorAboutSection'
import MentorRequirements from '../components/MentorRequirements'
import MentorRegistration from '../components/MentorRegistration'
import WhyBecomeMentor from '../components/WhyBecomeMentor'

const Mentorpage = () => {
  return (
    <div>
        <MentorHeroSection />
        {/* <MentorAboutSection /> */}
        <WhyBecomeMentor />
        <MentorRequirements />
        <MentorRegistration />
    </div>
  )
}

export default Mentorpage