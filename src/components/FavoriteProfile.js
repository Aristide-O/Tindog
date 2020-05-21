import React from "react";

import Navbar from "../components/Navbar";
import FavCard from "./FavCard";
import Footer from "./Footer/Footer";
import SideBar from "./SideBar";

const fakeCard = [
    {
        image: "https://images.unsplash.com/photo-1559321966-04643588828f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
        name: "Gérard",
        id: 0
    },
    {
        image: "https://images.unsplash.com/photo-1506551109886-6101f48c1ab9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
        name: "Patate",
        id: 1
    },
    {
        image: "https://images.unsplash.com/photo-1565057430174-c0477ddad363?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80",
        name: "Milou",
        id: 2
    },
    {
        image: "https://images.unsplash.com/photo-1577207989354-f076506b43e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=766&q=80",
        name: "Taran",
        id: 3
    },
    {
        image: "https://images.unsplash.com/photo-1526520112421-5054395689a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        name: "Burton",
        id: 4
    },
    {
        image: "https://images.unsplash.com/photo-1586225674384-48018cd72162?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=798&q=80",
        name: "Bébé",
        id: 5
    },
    {
        image: "https://images.unsplash.com/photo-1572896954319-785d85e13cb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=832&q=80",
        name: "Foxy",
        id: 6
    },
    {
        image: "https://images.unsplash.com/photo-1552401601-33db828218aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
        name: "Lardon",
        id: 7
    },
    {
        image: "https://images.unsplash.com/photo-1497993950456-cdb57afd1cf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
        name: "Lumine",
        id: 8
    }
]

class FavoriteProfile extends React.Component {
    state = {
        favorite : [...fakeCard]
    }

    delete = (e) => {
        const newState = this.state.favorite
        const index = newState.findIndex(fav => fav.id === parseInt(e.target.id))
        newState.splice(index, 1)
        this.setState({ favorite: newState })
    }

    render(){
        const data = this.props.location.data
        return(
            <div>
                <SideBar right />
            <Navbar />
                <h1 className="title-fav">Retrouve ici tes profils favoris !</h1>
                <div>
                    { this.state.favorite.map((doggy, i) => 
                    <div>
                        <FavCard key={i} image={doggy.image} name={doggy.name}/>
                        <img 
                            src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/star-512.png" 
                            alt="étoile de favoris" 
                            title="Supprimer des favoris" 
                            id={doggy.id} 
                            onClick={this.delete} 
                            className="button-unfav">
                        </img>
                    </div>
                    )}
                    {/* <FavCard image={data && data.dogImage.url} name={data && data.dogName.name.first}/> */}
                    <FavCard />
                    <img 
                        src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/star-512.png" 
                        alt="étoile de favoris" 
                        title="Supprimer des favoris" 
                        onClick={this.delete} 
                        className="button-unfav">
                    </img>
                </div>
                <Footer />
            </div>
        )
    }
}
export default FavoriteProfile;
