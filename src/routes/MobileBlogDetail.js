import React, {useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import LoadingScreen from "../components/loading";
import MobileTopBar from "../components/mobileOnly/components/MobileTopBar"

export default function MobileBlogDetail(){
    const [blogItem, setBlogItem] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();
    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await fetch(`https://professional-site-backend.herokuapp.com/blog/get/${id}`, {
                    method: "GET",
                    mode: "cors",
                    cache: "no-cache"
        });
        const data = await response.json();
        setBlogItem(data);
        setIsLoading(false);
        } catch (error) {
          console.error(error);
        }
      };
    fetchBlog();
      }, [id]);
      const {title, content, flavorImgURL} = blogItem || {};
    return(
        <div className="mobile-blog-detail">
            <MobileTopBar />
            {isLoading === false ?
            <div className="mobile-blog-content-wrapper">
                <div className="mobile-blog-top-row">
                    <div className="mobile-blog-title">
                        {title}
                    </div>
                    <a href = {flavorImgURL} className = "clickable"><img src={flavorImgURL} alt = "screen shot of website" /></a>
                </div>
                <div className="mobile-blog-bottom-row">
                    
                    <div className="mobile-blog-content">
                        {content}
                    </div>
                </div>
                
            </div> : <LoadingScreen />}
        </div>
    )
}