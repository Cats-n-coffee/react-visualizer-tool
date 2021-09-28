import * as React from 'react';
import { render as rltRender } from '@testing-library/react';
import AppProvider from '../context/AppProvider';

function render(ui, ...options) {
    const wrapper = { wrapper: AppProvider, ...options };
    return rltRender(ui, wrapper)
}

export * from '@testing-library/react'

export { render }