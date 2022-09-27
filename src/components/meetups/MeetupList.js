import classes from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";

function MeetupList(props){
    return(
        <ul className={classes.list}>
            {props.meetups.map(meetups => 
            <MeetupItem 
            key={meetups.id} 
            id={meetups.id} 
            img={meetups.img} 
            title={meetups.title} 
            address={meetups.address}
            description={meetups.description} />)}
        </ul>
    );
}
export default MeetupList;