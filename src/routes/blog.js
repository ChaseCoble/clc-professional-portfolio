import React, {useEffect, useState, useContext} from "react";
import TopBar from "../components/topbar/TopBar";
import BlogItem from "../components/blog/blogItem";
import LoadingScreen from "../components/loading";
import { mobContext } from "../index";
import MobileBlog from "../components/mobileOnly/blog/MobileBlog";

export default function Blog() {
    const [blogItems, setBlogItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const isMob = useContext(mobContext);
    useEffect(() => {
        const fetchBlogItems = async () => {
          try {
            const response = await fetch("https://chasecoble.devcamp.space/portfolio/portfolio_blogs", {
              method: "GET",
              mode: "cors",
              cache: "no-cache"
            });
            const data = await response.json();
            setBlogItems(data.portfolio_blogs);
            setIsLoading(false)
          } catch (error) {
            console.error(error);
          }
        };
        fetchBlogItems();
      }, []);
      function getBlogItems() {
        const restrictedArray = [];
        function getRandomInt(max){
          return Math.floor(Math.random() * max);
        }
        for(let blogItem of blogItems ){
          function randomizePosition(){
            const RandomInt = getRandomInt(15);
            if (restrictedArray.includes(RandomInt) || RandomInt === undefined){
              if (restrictedArray.length === 16) {
                console.warn("All possible positions have been tried!");
                return null;
              }
              return randomizePosition();
            } else {
              restrictedArray.push(RandomInt);
              const gridAreaInt = RandomInt + 1;
              return(gridAreaInt)
            }
          }
          const gridArea = randomizePosition();
          
          let angle = "";
          const angleInt = getRandomInt(6);
          switch(angleInt){          
            case 0: 
              angle = 45;
              break;
            case 1:
              angle = -45;
              break;
            case 2:
              angle = 30;
              break;
            case 3: 
              angle = -30;
              break;
            case 4:
              angle= 0;
              break;
            case 5: 
              angle = 0;
              break;
            case 6:
              angle = 60;
              break;
            default:
              console.log("angle assignment error");
              angle = 180;
              break;
          }
          
          blogItem.gridArea = gridArea; 
          blogItem.angle = angle

        }

        return blogItems.map((blogItem) => (
            (blogItem.blog_status === 'published') ? <BlogItem key = {blogItem.id} item = {blogItem} /> : null
        ))
  }  
  return (
    <div id="blog-wrapper">
      {isLoading === false ? (
        isMob ? (
          <MobileBlog items={blogItems} />
        ) : (
          <>
            <TopBar/>
            <div className="blog-header-wrapper">Blog Postings</div>
            <div id="blog-content-wrapper">
              {getBlogItems()}
            </div>
          </>
        )
      ) : (
        <LoadingScreen/>
      )}
    </div>
  );
}