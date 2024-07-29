import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Tutors from "../components/Tutors"
import Partners from "../components/Partners"
import ContactInfo from "../components/ContactInfo"

import '../styles/Home.css'


import parse from 'html-react-parser'

import { homeSection } from "../data/HomeSection"
import { coursesSection } from "../data/CoursesSection"
import { tutorsSection, tutorsList } from "../data/TutorsSection"
import { partnersSection, partnersList } from "../data/PartnersSection"
import { contactInfoSection } from "../data/ContactInfoSection"



function Home() {
    return (
        <>
            <Navbar />
            <div className="wrapper">
                <section id="home">
                    <img src={homeSection.image} />
                    <div className="kolom">
                        {parse(homeSection.content)}
                    </div>
                </section>
                <section id="courses">
                    <div className="kolom">
                        {parse(coursesSection.content)}
                    </div>
                    <img src={coursesSection.image} />
                </section>
                <section id="tutors">
                    <div className="tengah">
                        <div className="kolom">
                            {parse(tutorsSection.content)}
                        </div>
                        <Tutors tutorsList={tutorsList} />
                    </div>
                </section>
                <section id="partners">
                    <div className="tengah">
                        <div className="kolom">
                            {parse(partnersSection.content)}
                        </div>
                        <Partners partnersList={partnersList} />
                    </div>
                </section>
                <ContactInfo contactList={contactInfoSection} />
            </div>
            <Footer />
        </>
    )
}

export default Home
