import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './header';

import StreamCreate from './streams/stream_create';
import StreamDelete from './streams/stream_delete';
import StreamEdit from './streams/stream_edit';
import StreamList from './streams/stream_list';
import StreamShow from './streams/stream_show';


class App extends React.Component {
    render () {
        return (
            <div className="app">
                <BrowserRouter>
                    <div>
                        <Header />
                        <div className="container">
                            <Route path="/" exact component={StreamList} />
                            <Route path="/streams/new" exact component={StreamCreate} />
                            <Route path="/streams/delete" exact component={StreamDelete} />
                            <Route path="/streams/edit" exact component={StreamEdit} />
                            <Route path="/streams/show" exact component={StreamShow} />
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;