import 'flexible'
import React from 'react'
import ReactDOM from 'react-dom'
import FastClick from 'fastclick'


if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function(){
        FastClick.attach(document.body)
    },false)
}

const render = Component => {
    ReactDOM.render(
        <Provider store={store}>
            <AppContainer>
                <Component />
            </AppContainer>
        </Provider>,
        document.getElementById('root')
    )
};

render(Route);

if (module.hot) {
    module.hot.accept('./router/', () => {
        render(Route);
    })
}

registerServiceWorker();