import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";


function NewMeetupPage(){

    const navigate = useNavigate();

    function addMeetupHandler(meetupData){
        fetch('https://reacttutorial-4dda1-default-rtdb.firebaseio.com/meetups.json',
        {
            method: 'POST', 
            body:JSON.stringify(meetupData), //should be in json format
            headers:{
                'Content-Type': 'application/json'
            },
        }
        ).then(() => {
            navigate('/'); //can also use async awiat, doesnt allow use of back button
        });//sends http request, axios can be used
    }

    return(
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/> 
        </section>
    );
}

export default NewMeetupPage;