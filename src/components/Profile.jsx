import React, { useEffect, useState } from 'react';
import '../Styles/Profile.css';
import profile_img from '../Assets/avatar.jpg';
import leetcode from '../Assets/leetcode.png';
import linkedin from '../Assets/linkedin.png';
import github from '../Assets/github.png';
import gmail from '../Assets/gmail1.png';
import achievement from '../Assets/achievement.png';
import certificate from '../Assets/certificate.png';

import { useParams } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
    const URL = 'https://script.googleusercontent.com/macros/echo?user_content_key=pgmseIzjT4PAj2FEWGLJW-9DrenslsMa_1AYQHS3ZXl0O2vhiDWIr5hwv-P0Xiluw1--z5ziwoI4bC54bWOYqg260seK_DTTm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnLJtlXQ5uYAyM5Z_q7a-UvitR5oZqSWz6Zt1jIFBehpe40AupPE06yd-3TwvNOMIR15UAjmzF2HZAj9WNsj8fMxcYB3PsuhdbNz9Jw9Md8uu&lib=MBkDDLo90xr7SpgmTZhNssTpwNphTLazC';

    const [data, setData] = useState([]);
    const [profile_data, setProfileData] = useState([]);
    const [skill, setSkill] = useState([]);
    const fetchData = async () => {
        const res = await axios.get(URL);
        setData(res.data.data);
    }

    useEffect(() => {
        fetchData();
    }, [])

    const { ID } = useParams();
    const filteredData = data.filter(item => { return item.UID === ID });
    let UID, Email1, Name, Email2, Linkedin, Year, Company, Jobprofile, Package, Skills, InternshipName, InternshipRole, InternshipDuration, InternshipStipend, Leetcode, Github, CertificateName1, CertificateProvider1, CertificateYear1, CertificateYear2, CertificateProvider2, CertificateName2, Rounds, Duration, Difficulty, Behavioral, Fundamental, Experience, Coding, Topics, Advice, Mistakes, ProfileLink;
    console.log(filteredData);
    if (filteredData.length > 0) {
        ({ UID, Email1, Name, Email2, Linkedin, Year, Company, Jobprofile, Package, Skills, InternshipName, InternshipRole, InternshipDuration, InternshipStipend, Leetcode, Github, CertificateName1, CertificateProvider1, CertificateYear1, CertificateYear2, CertificateProvider2, CertificateName2, Rounds, Duration, Difficulty, Behavioral, Fundamental, Experience, Coding, Topics, Advice, Mistakes, ProfileLink } = filteredData[0]);
        Skills = Skills.split(',');
    }


    const [isAbout, setIsAbout] = useState(true);
    const [isExperience, setIsExperience] = useState(false);
    const [isInterview, setIsInterview] = useState(false);
    const [isAdvice, setIsAdvice] = useState(false);
    const [isActive, setIsActive] = useState('1');

    const handleClickAbout = () => {
        setIsAbout(true);
        setIsAdvice(false);
        setIsExperience(false);
        setIsInterview(false);
        setIsActive('1');
        console.log('1')
    }
    const handleClickExperience = () => {
        setIsAbout(false);
        setIsAdvice(false);
        setIsExperience(true);
        setIsInterview(false);
        setIsActive('2');
    }
    const handleClickInterview = () => {
        setIsAbout(false);
        setIsAdvice(false);
        setIsExperience(false);
        setIsInterview(true);
        setIsActive('3');
    }
    const handleClickAdvice = () => {
        setIsAbout(false);
        setIsAdvice(true);
        setIsExperience(false);
        setIsInterview(false);
        setIsActive('4');
    }
    return (
        <>
            {filteredData.length > 0 ?
                <div className="profile_div">
                    <div className="profile_menu_div">
                        <div className="profile_menu">
                            <div className="student_img_div">
                                <img src={profile_img} alt="" className="profile_image" />
                            </div>
                            <div className="profile_intro">
                                <div className="helper_menu">
                                    <p className="profile_name_student">{Name}</p>
                                    <p className="profile_job">{Jobprofile}</p>
                                    <p className="profile_company">{Company} <span className='profile_package'>- {Package} LPA</span></p>
                                    <p className="profile_branch">B.E - IT</p>
                                    <p className="profile_batch">{Number(Year) - 4} - {Year} Batch</p>
                                </div>
                                <ul className="helper_menu_ul">
                                    <li onClick={() => handleClickAbout()} className={isActive === '1' ? 'helper_menu_li helper_menu_li_active' : 'helper_menu_li'}>About</li>
                                    <li onClick={() => handleClickExperience()} className={isActive === '2' ? 'helper_menu_li helper_menu_li_active' : 'helper_menu_li'}>Experience</li>
                                    <li onClick={() => handleClickInterview()} className={isActive === '3' ? 'helper_menu_li helper_menu_li_active' : 'helper_menu_li'}>Interview Details</li>
                                    <li onClick={() => handleClickAdvice()} className={isActive === '4' ? 'helper_menu_li helper_menu_li_active' : 'helper_menu_li'}>Advice</li>
                                </ul>
                            </div>
                            <div className="social_links_div">
                                <a href={Linkedin} target='_blank' className='social_link'><img src={linkedin} alt="" className="social_icon" /></a>
                                <a href={Leetcode} target='_blank' className='social_link'><img src={leetcode} alt="" className="social_icon" /></a>
                                <a href={Github} target='_blank' className='social_link'><img src={github} alt="" className="social_icon" /></a>
                                <a href='https://mail.google.com/' target='_blank' className='social_link'><img src={gmail} alt="" className="social_icon" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="profile_div_center">
                        <div className="profile_content">
                            {isAbout ?
                                <div className="about">
                                    <h2 className="about_title">About</h2>
                                    <div className="about_skills">
                                        <div className="about_div_title">Skills</div>
                                        <div className="skill_div">
                                            {Skills.map((skill, ind) => {
                                                return (
                                                    <div className="skill_items" key={ind}>{skill}</div>
                                                )
                                            })
                                            }
                                        </div>
                                    </div>
                                    <div className="about_certifications">
                                        <div className="about_div_title">Certifications</div>
                                        <div className="internships_div">
                                            <div className="experience_card">
                                                <div className="company_img_div1">
                                                    <img src={certificate} alt="" className="company_img" />
                                                </div>
                                                <div className='experience_div_right experience_div_right1'>
                                                    <p className="internship_name">{CertificateName1}</p>
                                                    <p className="internship_company">{CertificateProvider1}</p>
                                                    <p className="internship_duration">Issued {CertificateYear1}</p>
                                                </div>
                                            </div>
                                            <div className="experience_card">
                                                <div className="company_img_div1">
                                                    <img src={certificate} alt="" className="company_img" />
                                                </div>
                                                <div className='experience_div_right experience_div_right1'>
                                                    <p className="internship_name">{CertificateName2}</p>
                                                    <p className="internship_company">{CertificateProvider2}</p>
                                                    <p className="internship_duration">Issued {CertificateYear2}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> : ""}
                            {isExperience ?
                                <div className="about_skills">
                                    <div className="about_title experience_title">Internships</div>
                                    <div className="internships_div internships_div1">
                                        <div className="experience_card1">
                                            <div className="company_img_div">
                                                <img src={achievement} alt="" className="company_img" />
                                            </div>
                                            <div className='experience_div_right'>
                                                <p className="internship_name">{InternshipName}</p>
                                                <p className="internship_company">{InternshipRole}</p>
                                                <p className="job_time">Stipend : {InternshipStipend} ₹</p>
                                                <p className="internship_duration">Duration : {InternshipDuration} Months</p>
                                                {/* <p className="internship_location">Location: Pune</p> */}
                                            </div>
                                        </div>
                                    </div>
                                </div> : ""}
                            {isInterview ?
                                <div className='interview'>
                                    <div className="about_title interview_title">Interview Experience</div>

                                    <div className="interview_center">
                                        <div className="interview_section">
                                            <p className="interview_format">Interview Format</p>
                                            <p className="interview_format_details"><span className="sub_heading">Rounds : </span>{Rounds}</p>
                                            <p className="interview_format_details"><span className="sub_heading">Duration : </span> {Duration} Hours</p>
                                            <p className="interview_format_details"><span className="sub_heading">Difficulty of Technical Questions : </span> {Difficulty} </p>
                                            <p className="interview_format_details"><span className="sub_heading">CS Fundamentals Asked : </span> {Fundamental}</p>
                                        </div>
                                        <div className="interview_section">
                                            <p className="interview_format">Experience</p>
                                            <p className="interview_format_details">{Experience}</p>
                                        </div>
                                        <div className="interview_section">
                                            <p className="interview_format">Coding Round</p>
                                            <p className="interview_format_details"><span className="sub_heading">Questions Asked : </span>{Coding}</p>
                                            <p className="interview_format_details"><span className="sub_heading">Topics of Coding Questions : </span> {Topics}</p>
                                        </div>
                                        <div className="interview_section">
                                            <p className="interview_format">Behavioral Round</p>
                                            <p className="interview_format_details"><span className="sub_heading">Experience : </span> {Behavioral}</p>
                                        </div>
                                    </div>
                                </div> : ""}
                            {isAdvice ?
                                <div className='interview'>
                                    <div className="about_title">Bonus Information</div>
                                    <div className="interview_center">
                                        <div className="interview_section bonus_section">
                                            <p className="interview_format">Advice for Juniors</p>
                                            <p className="interview_format_details">{Advice}</p>
                                        </div>
                                        <div className="interview_section bonus_section">
                                            <p className="interview_format">Mistakes I could have Avoided</p>
                                            <p className="interview_format_details">{Mistakes}</p>
                                        </div>
                                    </div>
                                </div> : ""}
                        </div>
                    </div>
                </div>
                :
                <div className='loading_div'>
                    <div class="loader"></div>
                </div>
            }
        </>
    )
}

export default Profile;