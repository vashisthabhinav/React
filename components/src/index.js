import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './ComponentDetail';
import ApprovalCard from './ApprovalCard';
import './style/App.css';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warninig!</h4>
                    Are you sure you eant to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 4:45PM"
                    text="Hello there!"
                    avatar={faker.image.image()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Alex"
                    timeAgo="Today at 1:50PM"
                    text="How are you?"
                    avatar={faker.image.image()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Jane"
                    timeAgo="Today at 11AM"
                    text="Nice blog post"
                    avatar={faker.image.image()}
                />
            </ApprovalCard>
        </div>
    );
}
ReactDOM.render(<App />, document.querySelector('#root'))