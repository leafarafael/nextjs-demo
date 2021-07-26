import {Fragment} from 'react';
import {UseRouter} from 'next/router';

import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function newMeetupPage(){
    const router = UseRouter();

    async function addMeetupHander(enteredMeetupData){
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers:{ 
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        console.log(data);

        router.push('/');
    }

    return  <NewMeetupForm onAddMeetup={addMeetupHander}/>
}

export default newMeetupPage;