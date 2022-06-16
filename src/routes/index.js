import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

const URLS = {
    HOME: '',
};

const BASE_NAME = process.env.PUBLIC_URL ? process.env.PUBLIC_URL : '/';

export default function AppRoutes() {
    return (
        <BrowserRouter basename={BASE_NAME}>
            <Routes>
                <Route path={URLS.HOME} element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}
