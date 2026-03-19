import NavBar from "../components/Navbar"
import Footer from "../components/Footer"
import CategoryBar from "../components/CategoryBar"
import MediaList from "../components/MediaList"
import {medias} from "../data/medias"

export default function Media(){
    return(
        <>
        <NavBar/>
       <CategoryBar/>
        <MediaList title={"All Medias"} items={medias}/>
        <Footer/>
            </>
    )
}