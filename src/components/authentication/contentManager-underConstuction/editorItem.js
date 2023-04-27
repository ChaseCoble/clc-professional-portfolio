// import React, {useState, useContext} from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPencil } from "@fortawesome/free-solid-svg-icons";
// import ReactModal from "react-modal";
// import PortfolioManagerItemModal from "./modals/ManagerModal";
// import BlogManagerItemModal from "./modals/blogManagerItemModal";
// import { contentContext } from "./contentContext";

// export default function EditorItem(props){
//     const { content, setContent } = useContext(contentContext);
//     const [item, setItem] = useState(props.item);
//     const [isOpen, setIsOpen] = useState(false);

//     function clickHandler(){
//         setIsOpen(true);
//     }

//     function managerItemSetter(string){
//         if (string === 'portfolio'){
//             const {id, name, description, url, thumb_img_url, logo_url, category } = item;
//             return(
//                 <div className="portfolio-editor-item-wrapper">
//                     <div className="portfolio-editor-item-left-column">
//                         <div className="portfolio-editor-item-name">
//                             {id}
//                             { name }
//                             {category}
//                             { url }
//                             { logo_url }
//                         </div>
//                         <div className="portfolio-editor-item-description">
//                             { description }
//                         </div>
//                     </div>
//                     <div className="portfolio-editor-item-right-column">
//                         <div className = "editor-icon-wrapper">
//                             <a href="" onClick = {clickHandler} style={{color : "inherit"}}>
//                                 <FontAwesomeIcon icon = {faPencil} />
//                             </a>
//                         </div>
//                         <div className = "portfolio-editor-thumb-wrapper">
//                             <img src={thumb_img_url} alt = "program example" />
//                         </div>
//                     </div>
//                     <ReactModal
//                         isOpen={isOpen}
//                         className={'portfolio-editor-modal'}
//                         shouldCloseOnEsc={true}
//                         shouldCloseOnOverlayClick={true}
//                         role="See More Information">
//                         <PortfolioManagerItemModal item = {item}/>
//                     </ReactModal>
//                 </div>
//             )
//         } else if ( string === 'blog'){
//             const {id, title, content, blog_status, featured_image_url} = item;
//             return(
//                 <div className="blog-editor-item-wrapper">
//                     <div className="blog-editor-item-left-column">
//                         <div className="blog-editor-item-name">
//                             {id}
//                             { title }
//                             {blog_status}
//                         </div>
//                         <div className="blog-editor-item-description">
//                             { content }
//                         </div>
//                     </div>
//                     <div className="blog-editor-item-right-column">
//                         <div className = "editor-icon-wrapper">
//                             <a href="" onClick = {clickHandler} style={{color : "inherit"}}>
//                                 <FontAwesomeIcon icon = {faPencil} />
//                             </a>
//                         </div>
//                         <div className = "blog-editor-thumb-wrapper">
//                             <img src={featured_image_url} alt = "blog feature" />
//                         </div>
//                     </div>
//                     <ReactModal
//                         isOpen={isOpen}
//                         className={'blog-editor-modal'}
//                         shouldCloseOnEsc={true}
//                         shouldCloseOnOverlayClick={true}
//                         role="See More Information">
//                         <BlogManagerItemModal item = {item}/>
//                     </ReactModal>
//                 </div>
//             )
//         }
//     }
//     return(
//         <div className = "editor-item-wrapper">
//             {managerItemSetter(content)}
//         </div>
//     )
// }