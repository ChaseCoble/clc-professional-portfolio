import React from "react";

export default function NavBar() {
    // function listBlogItems() {
        
    // }
    return(
        <div id = "nav-bar-wrapper">
            <ul className = "dropdown-menu nav-bar theme1">
                <li><a className = "dropdown-item nav-link" href="">About</a></li>
                <li><a className = "dropdown-item nav-link" href = ""> Biography </a></li>
                <li><a className = "dropdown-item nav-link" href ="">Contact</a></li>
                <li>
                    <div className = "dropdown"> 
                        <a className = "dropdown-toggle" href = "" role = "button" data-bs-toggle = "dropdown" aria-expanded = "false">
                            Blog
                        </a>
                        <ul className = "blog-item-list dropdown-menu">
                            listBlogItems
                        </ul>
                    </div> 
                </li>
                <li>
                    <div className = "dropdown"> 
                        <button className = "dropdown-toggle" data-bs-toggle = "dropdown" aria-expanded = "false">
                            Portfolio
                        </button>
                        <ul className = "blog-item-list dropdown-menu">
                            listportfolioitems
                        </ul>
                    </div> 
                </li>
            </ul>    
        </div>
    )
}