import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

import{useRef} from 'react';

function NewMeetupForm(props){

    const titelInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();


    function submitHandler(event){
        event.preventDefault();

        const enterTitle = titelInputRef.current.value;
        const enterImage = imageInputRef.current.value;
        const enterAddress = addressInputRef.current.value;
        const enterDescription = descriptionInputRef.current.value;

        const meetupData = {
            title: enterTitle,
            image: enterImage,
            address: enterAddress,
            description: enterDescription,
        };

        props.onAddMeetup(meetupData);
    }

    return(
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type = "text" required id ="title" ref={titelInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Meetup Image</label>
                    <input type = "url" required id ="image" ref={imageInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>Meetup Address</label>
                    <input type = "text" required id ="address" ref={addressInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Meetup Description</label>
                    <textarea id="description" required rows='5' ref={descriptionInputRef}></textarea>
                </div>
                <div className={classes.actions}>
                    <button> Add Meetup</button>
                </div>
            </form>
        </Card>
    );
}
export default NewMeetupForm;