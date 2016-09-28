if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
        module.hot.accept();
    }

}

import PageContainer from './page/page-container.jsx';
import React from 'react';
import ReactDom from 'react-dom';
ReactDom.render(
    <PageContainer />,
    document.getElementById("content")
);
