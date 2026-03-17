import NavBar from "../components/Navbar"
import MediaList from "../components/MediaList"
import {medias} from "../data/medias"

export default function Media(){
    return(
        <>
        <NavBar/>
        <MediaList title={"All Medias"} items={medias}/>
            </>
    )
}