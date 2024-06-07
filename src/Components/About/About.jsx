import './About.css';
const About = () => {
    return <>
        <div  id="#about" className='about'>
            <div className="about-heading">
                <h1>About</h1>
            </div>
            <div className="about-info">
                <div className='about-info-mean'>Hello I'm Naman Prabhat Chaturvedi a passionate web developer with keen eye to MERN Stack with a background in IT. I strive to create impactful and visually stunning Software solutions that leave a lasting impression.</div>
                <div className='about-info-text'>
                    <h2>Education</h2>
                    <ul className='about-ul'>
                        <li>Prasad Institute Of Technology,Jaunpur<span className='about-sp'>2021-2025</span>
                            <ul className='about-value'>
                                <li>BTECH 3rd Year</li>
                                <li>Branch- CSE</li>
                            </ul>
                        </li>
                        <li>R.N Tagore Senior Secondary School<span>2019</span>
                            <ul className='about-value' >
                                <li>Intermediate</li>
                                <li>76.6%</li></ul>
                        </li>
                        <li>R.N Tagore Senior Secondary School<span>2017</span>
                            <ul className='about-value'>
                                <li>High School</li>
                                <li>8.2 CGPA</li></ul>
                        </li>

                    </ul>
                </div>
                <div className='about-info-text-2'>
                    <h2>Skills</h2>
                    <ul className='h-text'>
                        <h2>Web Development</h2>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>ReactJS</li>
                    </ul>
                </div>
            </div>
        </div>
        
    </>

}
export default About;
