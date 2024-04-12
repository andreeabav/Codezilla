import React from 'react'
import Carousel from './components/Carousel';
import Download from './components/Download';
import Presentation from './components/Presentation';
import Benefits from './components/Benefits';
import WideFrame from './components/WideFrame';
import BoxSeo from './components/BoxSeo';
import Team from './components/Team';
import Motto from './components/Motto';
import Faq from './components/Faq';
import ContactForm from './components/ContactForm';
function HomePage() {
    return (
        <div>
            <Carousel />
            <Download />
            <Presentation />
            <Benefits />
            <WideFrame />
            <BoxSeo />
            <Team />
            <Motto />
            <Faq />
            <ContactForm />

        </div>
    );
}
export default HomePage;