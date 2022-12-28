import React from 'react'
import ReactDOM from 'react-dom/client'
import faker from 'faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'
import './App.css'

const App = () => {
    
    return (
        <div className='ui container comments'>
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail 
            author="Carl" 
            timeAgo="Today at 4:30" 
            text="This is a post"
            avatar={faker.image.image()}
            />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail 
            author="Alex"
            timeAgo="Today at 3:30" 
            text="This is another post"
            avatar={faker.image.image()}
            />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail 
            author="Jane" 
            timeAgo="Yesterday at 2:22" 
            text="This is a third post"
            avatar={faker.image.image()}
            />
            </ApprovalCard>
        </div>
    )
}



ReactDOM.createRoot(document.getElementById('root')).render(<App />)
