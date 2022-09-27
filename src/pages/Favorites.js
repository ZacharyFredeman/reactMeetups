import {useContext} from 'react';

import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';

function FavoritesPage(){
    const favoriteContex = useContext(FavoritesContext);    

    let content;

    if(favoriteContex.totalFavorites ===0){
        content = <p>You have no favorites yet. Click Add To Favorite to add to your Favorites</p>
    }else{
        content=<MeetupList meetups={favoriteContex.favorites}/>
    }
    //acts as temporary storage, data lot on page reload, can be improved by storing data onto a server

    return(
        <div>
            <h1>My Favorites</h1>
            {content}
        </div>
    );
}
export default FavoritesPage;