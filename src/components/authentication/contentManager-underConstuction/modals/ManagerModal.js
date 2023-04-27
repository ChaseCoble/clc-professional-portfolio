// import React,{useEffect, useState, useContext} from "react";
// import { contentContext } from "../contentContext";

// export default function ManagerModal(props) {
//     const propid = item.id;
//     const [editorItem, setEditorItem ] = useState({})
//     const [ isLoading, setIsLoading ] = useState(true);
//     const [ value, setValue ] = useState({});
//     const [ isNew, setIsNew] = useState(props.isNew);
//     const { content, setContent } = useContext(contentContext);
//     useEffect(() => {
//         const fetchEditorItems = async () => {
//           if (content === "portfolio") {
//             try {
//               const response = await fetch(
//                 `https://chasecoble.devcamp.space/portfolio/portfolio_items/${propid}`,
//                 {
//                   method: "GET",
//                   mode: "cors",
//                   cache: "no-cache"
//                 }
//               );
//               const data = await response.json();
//               setEditorItem(data.portfolio_item);
//               setIsLoading(false);
//             } catch (error) {
//               console.error(error);
//             }
//           } else if (content === "blog") {
//             try {
//               const response = await fetch(
//                 `https://chasecoble.devcamp.space/portfolio/portfolio_blogs/${propid}`,
//                 {
//                   method: "GET",
//                   mode: "cors",
//                   cache: "no-cache"
//                 }
//               );
//               const data = await response.json();
//               setEditorItem(data.portfolio_blog);
//               setIsLoading(false);
//             } catch (error) {
//               console.error(error);
//             }
//           } else{
//             console.log("Error loading items")
//           }
//         };
      
//         fetchEditorItems();
//       }, [content, propid]);
//     function handleSubmit(contentString){

//     } 
//     const handleChange = (event) => {
//         if (event.target.files) {
//           setFile(event.target.files[0]);
//         } else {
//           setValue(event.target.value);
//         }
//       };
//     function generateEditor(contentString, newBool){
//         if ( contentString === 'portfolio'){
//             const {id, name, description, url, thumb_img_url, logo_url, category } = editorItem;
            
//             if (newBool === true){
//                 return(
//                     <div className = "editor-modal-wrapper">
//                         <div className = "editor-modal-top-wrapper">
//                             <div className ="editor-modal-id-wrapper">New Item</div>
//                         </div>


//                     </div>
//                 )
//             }
//         }
//     } 
//     return(
//         <div>
//         </div>
//     )
// }
