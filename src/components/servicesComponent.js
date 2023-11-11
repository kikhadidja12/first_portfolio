import React from 'react';
import './services.css';
const ServicesComponent = () => {
    return (
        <div>
            <section id='sectionService'>
                <span id='spanServices'>
                    Nos Services
                </span>
                <p id='pServices'>
                    En tant qu'ingénieure en logiciels, je mets à votre disposition une expertise technique pour
                    le développement, la maintenance et l'optimisation de solutions logicielles sur mesure.
                </p>
                <div className='servicesDiv'>
                    <div className='serviceDiv'>
                        <img src='' alt='' className='servicesDivImg' />
                        <div id='serviceDivText'>
                            <h5>
                                Développement de logiciels personnalisés
                            </h5>
                            <p>

                            </p>
                        </div>
                    </div>
                    <div className='serviceDiv'>
                        <img src='' alt='' className='servicesDivImg' />
                        <div id='serviceDivText'>
                            <h5>
                                Développement de applications Web et Mobiles
                            </h5>
                            <p>

                            </p>
                        </div>
                    </div>
                    <div className='serviceDiv'>
                        <img src='' alt='' className='servicesDivImg' />
                        <div id='serviceDivText'>
                            <h5>
                                Conception et architecture logicielle
                            </h5>
                            <p>

                            </p>
                        </div>
                    </div>
                    <div className='serviceDiv'>
                        <img src='' alt='' className='servicesDivImg' />
                        <div id='serviceDivText'>
                            <h5>
                                Maintenance et mise à jour des logiciels
                            </h5>
                            <p>

                            </p>
                        </div>
                    </div>
                    <div className='serviceDiv'>
                        <img src='' alt='' className='servicesDivImg' />
                        <div id='serviceDivText'>
                            <h5>
                                Tests et assurance qualité
                            </h5>
                            <p>

                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default ServicesComponent;