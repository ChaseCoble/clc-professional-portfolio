// import React, {useState, useEffect, useContext} from "react";
// import EditorItem from "./editorItem";
// import LoadingScreen from "../../loading";
// import TopBar from "../../topbar/TopBar";
// import Error from "../../../routes/error";
// import { contentContext } from "./contentContext";

// export default function ManagerInterface(){
//     const { content, setContent} = useContext(contentContext);
//     const [editorItems, setEditorItems ] = useState([]);
//     const [isLoading, setIsLoading ] = useState(true);
//     useEffect(() => {
//         const fetchEditorItems = async () => {
//           if (content === "portfolio") {
//             try {
//               const response = await fetch(
//                 "https://chasecoble.devcamp.space/portfolio/portfolio_items",
//                 {
//                   method: "GET",
//                   mode: "cors",
//                   cache: "no-cache"
//                 }
//               );
//               const data = await response.json();
//               setEditorItems(data.portfolio_items);
//               setIsLoading(false);
//             } catch (error) {
//               console.error(error);
//             }
//           } else if (content === "blog") {
//             try {
//               const response = await fetch(
//                 "https://chasecoble.devcamp.space/portfolio/portfolio_blogs",
//                 {
//                   method: "GET",
//                   mode: "cors",
//                   cache: "no-cache"
//                 }
//               );
//               const data = await response.json();
//               setEditorItems(data.portfolio_blogs);
//               setIsLoading(false);
//             } catch (error) {
//               console.error(error);
//             }
//           } else{
//             console.log("Error loading items")
//           }
//         };
      
//         fetchEditorItems();
//       }, [content]);

//       function getEditorItems(){
//         return (
//           editorItems.map((editorItem) => (
//             <EditorItem key={editorItem.id} item={editorItem} />
//           ))
//         );
//       }
//       function returnHandler(){
//         setContent('opening')
//       }
//       function newItemCreation(){
//         <ManagerModal item = {null} isNew = {true} />
//       }
//     return(
//         <div className='editor-items-wrapper'>
//             <TopBar />
//             <div className="editor-return-wrapper">
//                 <a href='' onClick = {returnHandler}>Click here to return to Content Manager Home</a>
//                 <a href='' onClick = {newItemCreation}>Click here to add a new item!</a>
//             </div>
//             {isLoading === false ? {getEditorItems} : <LoadingScreen />}
//         </div>
//     )
    
// }