import ReactDOM from 'react-dom';
import App from "./App.jsx";
import myReduxStore from "./redux/stores/Store.js";
import {Provider} from "react-redux";
ReactDOM.render(
    <Provider store={myReduxStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);