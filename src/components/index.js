import React from 'react';

import Header from './header';
import Content from './content';

const Container = () => {
    return (
        <div style={{ flexGrow: 1 }}>
            <Header />
            <Content />
        </div>
    );
}

export default Container;