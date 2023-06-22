import React from 'react';
import { AppRouter } from './router/AppRouter';

import { AppTheme } from './theme';

export function App() {
    return (
        <AppTheme>
            <AppRouter />
        </AppTheme>
    );
};
