import React, {useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import LoadingScreen from "../components/loading";

export default function MobileBlogDetail(){
    const [blogItem, setBlogItem] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();
    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await fetch(`https://chasecoble.devcamp.space/portfolio/portfolio_blogs/${id}`, {
                    method: "GET",
                    mode: "cors",
                    cache: "no-cache"
        });
        const data = await response.json();
        setBlogItem(data.portfolio_blog);
        setIsLoading(false);
        } catch (error) {
          console.error(error);
        }
      };
    fetchBlog();
      }, [id]);
      const {title, content, featured_image_url} = blogItem || {};
    return(
        <div className="mobile-blog-detail">
            {isLoading === false ?
            <div className="mobile-blog-content-wrapper">
                <div className="mobile-blog-left-column">
                    <div className="mobile-blog-title">
                        {title}
                    </div>
                    <div className="mobile-blog-content">
                        {content}
                    </div>
                </div>
                <div className="mobile-blog-right-column">
                    <img src={featured_image_url} alt = "screen shot of website" />
                </div>
            </div> : <LoadingScreen />}
        </div>
    )
}