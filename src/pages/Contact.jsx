import React from 'react';
import { useEffect } from "react";
import { Row, Col, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(useGSAP, ScrollSmoother, ScrollTrigger);

const Contact = () => {

     useEffect(() => {
        const smoother = ScrollSmoother.create({
            smooth: 2,
            smoothTouch: 0.1,
            effects: true,
        });

        return () => {
            // Clean up the ScrollSmoother instance when the component unmounts
            smoother.kill();
        };
    }, []);

    return (
        <>
            <main>
                <section className='d-flex vh-100 first__block__padding black__container first__section'>
                    <Container fluid>
                        <Row>
                            <Col xs={6}>
                                <h2>Agora que já nos conhece.</h2>
                                <h4>Entre em contacto, nós ajudamos!</h4>
                                <p>
                                    Tv. Dinâmica 31,<br />
                                    4500-492 Espinho
                                </p>
                                <p>
                                    T: <a href="tel:229549102">229 549 102</a> (Chamada para a rede fixa nacional)<br />
                                    E: <a href="miligram@miligram.pt">miligram@miligram.pt</a>
                                </p>
                            </Col>
                            <Col xs={6}>
                                <p>Tenho um projecto fantástico em mente e preciso da vossa ajuda para o concretizar!</p>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicName">
                                        <Form.Control size="lg" type="text" placeholder="Nome" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control size="lg" type="email" placeholder="email@exemplo.com" />
                                    </Form.Group>
                                    <Form.Check
                                        required
                                        label="Li e aceito os termos e condições"
                                        feedback="Deve aceitar antes de enviar."
                                        feedbackType="invalid"
                                    />
                                    <Button size="lg" type="submit">Enviar</Button>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className='d-flex vh-100 first__block__padding white__container'>
                    text
                </section>
            </main>
        </>
    );
}

export default Contact;