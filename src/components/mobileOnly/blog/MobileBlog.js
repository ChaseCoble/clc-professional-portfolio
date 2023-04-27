import React, {useState} from "react";
import { Link } from "react-router-dom";
import MobileBlogItem from "./MobileBlogItem";
import MobileTopBar from "../components/MobileTopBar";

export default function MobileBlog(props){
    const [blogItems, setBlogItems] = useState(props.items);
    function getMobileBlogItems() {
        return blogItems.map((item) => {
          return (
            <Link key={item.id * 2} to={`/m/blog/${item.id}`}>
              <MobileBlogItem item={item} />
            </Link>
          );
        });
      }
    return(
        <div className="mobile-blog-container-wrapper">
            < MobileTopBar />
            <div className="mobile-blog-container">
                {getMobileBlogItems()}
            </div>
        </div>
    )
}