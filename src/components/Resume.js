import React from 'react';
import { BiDownload } from 'react-icons/bi'

const Resume = () => {

    const handleDownload =()=>{
     
        window.open('/resume/AyushiResume.pdf', '_blank');
    }

    return (
        <section id="resume" className="resume">
            <div className="container" data-aos="fade-up">

                <div className="section-title row">
                    <h2 class="col-md-10">Resume</h2>
                    <div className="col-md-2">
                    <a className="btn downloadResume" 
                    // href="./assets/resume/Ayushi V Resume.pdf" 
                    onClick={handleDownload}
                   rel="noopener noreferrer">
                  <span>Resume <BiDownload /></span>
                </a>
    </div>
                    <p>Aspiring React Developer with expertise in
                        HTML, CSS, Bootstrap, Material UI, and
                        JavaScript. Actively seeking new
                        opportunities to elevate my career and
                        contribute to innovative projects. Passionate
                        about creating seamless user experiences
                        through cutting-edge technology. Open to
                        collaborations and growth opportunities.
                        Let's connect and explore the possibilities.</p>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <h3 className="resume-title">Summary</h3>
                        <div className="resume-item pb-0">
                            <h4>Ayushi Vivrekar</h4>
                            <p><em>Seeking a React JS Developer to craft innovative user interface,
                                collaborating closely with designers and backend engineers. Responsible
                                for translating UI/UX design into high-quality code, optimizing
                                performance, and ensuring seamless integration.</em></p>
                            <ul>
                                <li>Indore, MP, India</li>
                                <li>+91 6362628548</li>
                                <li>ayushi.viva@gmail.com</li>
                            </ul>
                        </div>

                        <h3 className="resume-title">Education</h3>
                        <div className="resume-item">
                            <h4>Bachleor's Of Engineering</h4>
                            <h5>2016 - 2020</h5>
                            <p><em>Swami Vivekanand College of engineering, Indore, MP</em></p>
                        </div>
                        <div className="resume-item">
                            <h4>Higher Secondary School</h4>
                            <h5>2015 - 2016</h5>
                            <p><em>XII th, Indore,MP</em></p>
                        </div>
                        <div className="resume-item">
                            <h4>Secondary School</h4>
                            <h5>2014 - 2015</h5>
                            <p><em>X th, Indore,MP</em></p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h3 className="resume-title">Professional Experience</h3>
                        <div className="resume-item">
                            <h4>React JS Developer</h4>
                            <h5>2022 - Present</h5>
                            <h3><b>Linuxbean Solutions</b></h3>
                            <p><em>Indore, MP, India</em></p>
                            <ul>
                                <p><b>Stocks Emoji Project:</b></p>
                                <li>Developed StocksEmoji (Share Market
                                    Project) platform to address the existing
                                    research gap in investment.</li>
                                <li>Launched user-centric products to assist in
                                    investment discovery, decision-making, and follow-up activities.</li>
                                <li>Orchestrated the development of a
                                    dynamic E-commerce platform to enhance
                                    the online shopping experience.</li>
                                <li>Expanded the product range to cater to
                                    diverse customer needs, resulting in a 30%
                                    increase in customer engagement.</li>
                                <li>Implemented a user-friendly interface,
                                    leading to a 25% decrease in bounce rates.</li>
                            </ul>

                        </div>
                        <div className="resume-item">
                            <h4>React JS Intern</h4>
                            <h5>2021 - 2021</h5>
                            <h3><b>Sysmetis IT Solutions</b></h3>
                            <p><em>Indore ,MP, India</em></p>
                            <ul>
                                <p><b>JUNO Application Project:</b></p>
                                <p>Spearheaded contribution to an Augmented
                                    Reality (AR) project involving the placement
                                    of spatial anchors to save and retrieve data
                                    positions.</p>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Resume;



