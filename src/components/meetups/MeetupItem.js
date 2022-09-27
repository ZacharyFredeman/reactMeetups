import classes from './MeetupItem.module.css';
import Card from '../ui/Card';
import { useContext} from 'react';
import FavoritesContext from '../../store/favorites-context';

function MeetupItem(props){
    const favoriteContex = useContext(FavoritesContext);

    const isFavorite = favoriteContex.isFavorite(props.id);

    function toggleFavoriteHandler(){
        if(isFavorite){
            //remove item from favorite
            favoriteContex.remFavorite(props.id);
        }
        else{
            //add to favorites
            favoriteContex.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.address,
            });
        }
    }


    return(
        <li className={classes.item}>
            <Card>
                <div className={classes.img}>
                    <img src={props.img} alt= {props.title}/>
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick ={toggleFavoriteHandler}>{isFavorite ? 'Remove From Favorite' : 'Add To Favorite'}</button>
                </div>
            </Card>
        </li>
    );
}
export default MeetupItem;