import React from 'react';
import './StoryReel.css';
import Story from './Story';

function StoryReel() {
    return (
        <div className="storyReel">
            <Story image='https://www.businessinsider.in/photo/53156239.cms'
                   profileSrc='https://www.businessinsider.in/photo/53156239.cms'
                   title='Virat Kohli' />
            <Story image='https://www.businessinsider.in/photo/53156239.cms'
                   profileSrc='https://www.businessinsider.in/photo/53156239.cms'
                   title='Virat Kohli' />
            <Story image='https://www.businessinsider.in/photo/53156239.cms'
                   profileSrc='https://www.businessinsider.in/photo/53156239.cms'
                   title='Virat Kohli' />
            <Story image='https://www.businessinsider.in/photo/53156239.cms'
                   profileSrc='https://www.businessinsider.in/photo/53156239.cms'
                   title='Virat Kohli' />
            <Story image='https://www.businessinsider.in/photo/53156239.cms'
                   profileSrc='https://www.businessinsider.in/photo/53156239.cms'
                   title='Virat Kohli' />
        </div>
    )
}

export default StoryReel
