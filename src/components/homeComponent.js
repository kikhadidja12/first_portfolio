import React from 'react'
import './home.css';
import { Link } from 'react-scroll';

const handleDownloadCV = () => {
    const cvPath = process.env.PUBLIC_URL + '/assests/pdf/GUEMAT_Khadidja_Software_Engineer.pdf';

    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'CV_GUEMAT_Khadidja.pdf'; 
    link.click();
};

const HomeComponent = () => {
    return (
        <div>
            <section id='sectionHome'>
                <span id='spanHome'>
                    Bonjour,
                </span>
                <p id='pHome'>
                    Je m'appelle
                    <br />
                    <span id='spanNom'>GUEMAT Khadidja</span>
                    <br />
                    Ingénieure logiciel et Développeur(SE) Full Stack!
                </p>
                <Link to=''>
                    <button className='ButtonHome' onClick={handleDownloadCV}>
                        {/* <img src='' alt='' className='ButtonHomeImg' /> */}
                        Télécharger CV
                    </button>
                </Link>

            </section>
        </div>
    )
}

export default HomeComponent;