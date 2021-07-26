import classes from './MeetupDetail.module.css';
import Image from 'next/image';

function MeetupDetail(props){
    return (
        <section className={classes.detail}>
            <img src={props.image} 
            alt={props.title} layout="fill"/>
            <h1>{props.title}</h1>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </section>
    )
}

export default MeetupDetail;