import { Fragment } from 'react';
import Head from 'next/head';
import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';


function HomePage(props){
    return (
    <Fragment>
        <Head>
            <title>NextJs Meetups</title>
            <meta name='description' content='NextJs Meetups'/>
        </Head>
        <MeetupList meetups={props.meetups}/>
    </Fragment>
    );
}


// export async function getServerSideProps(context){
//     const req = context.req;
//     const res = context.res;

//     return{
//         props:{
//             meetups:DUMMY_MEETUPS
//         }
//     };
// }


//RUNS ON SERVER SIDE ONLY

export async function getStaticProps(){
    //fetch data from api
    const client = await MongoClient.connect('mongodb+srv://admin:Leafa12afae!@cluster0.tb8ss.mongodb.net/meetupsdb?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find().toArray();

    client.close();

    return{
        props:{
            meetups: meetups.map(meetup => ({
                title:meetup.title,
                address: meetup.address,
                image: meetup.image,
                id:meetup._id.toString(),
            }))
        },
        revalidate:1
    };
}

export default HomePage;