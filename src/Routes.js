import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect, useLocation, } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Loader from './component/Loader/Loader';
import NavMotion from './layout/NavMotion';
import MainLayout from './layout/MainLayout';
import MinimalLayout from './layout/MinimalLayout';

import LoginModal from './views/LoginModal'

const DashboardDefault = lazy(() => import('./views/Dashboard/Default'));

const Routes = () => {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Suspense fallback={<Loader />}>
                <Switch>
                    <Route path={[]}>
                        <MinimalLayout>
                            <Switch location={location} key={location.pathname}>
                                <NavMotion></NavMotion>
                            </Switch>
                        </MinimalLayout>
                    </Route>
                    <Route path={[ '/', ]}>
                        <MainLayout>
                            <Switch location={location} key={location.pathname}>
                                <NavMotion>
                                    <Route 
                                        path="/" 
                                        component={DashboardDefault} 
                                    />
                                </NavMotion>
                            </Switch>
                        </MainLayout>
                    </Route>
                    <Route path="/*" element={ <Redirect to="/" /> }/>
                </Switch>
            </Suspense>
        </AnimatePresence>
    );
};

export default Routes;
