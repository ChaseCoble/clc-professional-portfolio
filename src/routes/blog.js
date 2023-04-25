import React, {useEffect, useState} from "react";
import TopBar from "../components/topbar/TopBar";
import BlogItem from "../components/blog/blogItem";

export default function Blog() {
    const [blogItems, setBlogItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
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
        return blogItems.map((blogItem) => (
            (blogItem.blog_status === 'published') ? <BlogItem key = {blogItem.id} item = {blogItem} /> : null
        ))
      }
    return(
        <div id = "blog-wrapper">
            <TopBar/>
            <div id = "blog-content-wrapper">
                {getBlogItems()}
            </div>
        </div>
    )
}