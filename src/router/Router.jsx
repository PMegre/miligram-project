import { Routes, Route } from 'react-router-dom';

import { TransitionProvider } from '../context/TransitionContext';
import TransitionComponent from '../components/Transition';

import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Blog from '../pages/Blog';
import Contacts from '../pages/Contact';
import Recruitment from '../pages/Recruitment';
import Footer from '../components/Footer';

const Router = () => {
    return (
        <>
            <TransitionProvider>
                <Routes>
                    <Route
                        index
                        path="/"
                        element={
                            <TransitionComponent>
                                <Home />
                            </TransitionComponent>
                        }
                    />
                    <Route
                        path="/about"
                        element={
                            <TransitionComponent>
                                <About />
                            </TransitionComponent>
                        }
                    />
                    <Route
                        path="/services"
                        element={
                            <TransitionComponent>
                                <Services />
                            </TransitionComponent>
                        }
                    />
                    <Route
                        path="/blog"
                        element={
                            <TransitionComponent>
                                <Blog />
                            </TransitionComponent>
                        }
                    />
                    <Route
                        path="/contact"
                        element={
                            <TransitionComponent>
                                <Contacts />
                            </TransitionComponent>
                        }
                    />
                    <Route
                        path="/recruitment"
                        element={
                            <TransitionComponent>
                                <Recruitment />
                            </TransitionComponent>
                        }
                    />
                </Routes>
                <Footer />
            </TransitionProvider>
        </>
    );
};

export default Router;
