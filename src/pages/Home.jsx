import React from 'react';
import HeadlineRotator from '../components/HeadlineRotator';
import '../styles/Home.css';

const Home = () => {

    return (
        <>
            <main>
                <section className='d-flex align-items-center vh-100 default__padding white__container panel'>
                    <div className='fist__section__wrapper'>
                        <h3>
                            <span className="text__wrapper">Real </span>
                            <HeadlineRotator /><br />
                            <span className="text__wrapper">for Real People.</span>
                        </h3>
                    </div>
                </section>
                <section className='d-flex video__container panel'>
                    <video muted autoPlay loop src="https://miligram.pt/wp-content/uploads/2021/01/miligram_commercial.mp4"></video>
                </section>
                <section className='d-flex flex-column justify-content-center extra__padding green__container panel'>
                    <h3>20 Anos de Marcas Reais<br />com Impacto Real</h3>
                    <p>Transformar negócios em marcas é o nosso foco.</p>
                    <p>Marcas adaptáveis e ágeis, capazes de estabelecer laços com o seu público-alvo, tornando-se inesquecíveis e prontas a vencer no mercado. Através de um método singular – o BrandBeat – elevando a sua marca, no mundo digital e real.</p>
                    <h5>Bem-Vindo à Miligram.</h5>
                </section>
                <section className='d-flex align-items-center default__padding white__container vh-100 panel'>
                    <div className="box box-a" data-speed="clamp(1.8)" >a</div>
                    <div className="box box-b" data-speed="clamp(2)" >b</div>
                    <div className="box box-c" data-speed="clamp(1.5)" >c</div>
                </section>
                <section className='d-flex align-items-center default__padding black__container vh-100 panel'>
                    text
                </section>
            </main>
        </>
    );
}

export default Home;