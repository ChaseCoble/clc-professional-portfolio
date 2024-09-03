import { Fragment, useState} from "react";
import LoadingScreen from "../loading";

export default function IFrameWithLoader(props){
    const [isLoading, setIsLoading] = useState(true);
    const handleLoad = () => {
        setIsLoading(false)
    }
    const localSrc = props.src
    return (
        <Fragment>
            {isLoading && (
                <LoadingScreen />
            )}
            <iframe 
                title = "article demonstration" 
                src = {localSrc}  
                className = "article-content-frame" 
                onLoad = {handleLoad}
                style={{ display: isLoading ? 'none' : 'flex'}}
                />
            <a href= {localSrc} className = "article-visit-link">Visit the Application Here</a>
        </Fragment>
    )
}