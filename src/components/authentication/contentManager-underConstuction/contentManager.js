// import React, {useContext} from "react";
// import { contentContext } from "./contentContext";
// import DeniedAccess from "../../deniedAccess"
// import {authContext} from "../authContext"
// import TopBar from "../../topbar/TopBar";
// import PortfolioManager from "./portfolioManager";
// import Error from "../../../routes/error";
// import BlogManager from "./blogManager"

// export default function ContentManager() {
//     const authed = useContext(authContext)
//     const {content, setContent} = useContext(contentContext);

//     function setManagerPortfolio(string){
//         setContent(string);
//     }
//     function managerStateSetter(stateString){
//         switch(stateString){
//             case 'opening':
//                 return(
//                     <div className="content-manager-introduction-wrapper">
//                         <div className="content-manager-introduction-wrapper">
//                             <h1>Welcome to the content manager!</h1>
//                             <p> Select a button to initialize the proper manager</p>
//                             <div className = "content-manager-introduction-buttons">
//                                 <button type="button" onClick = {setManagerPortfolio('portfolio')}> Portfolio Manager </button>
//                                 <button type="button" onClick = {setManagerPortfolio('blog')}> Blog Manager </button>
//                             </div>
//                         </div>
//                     </div>
//                 )
//             case 'portfolio':
//                 return <PortfolioManager/>
//             case 'blog':
//                 return <BlogManager />
//             default:
//                 return <Error />
//         }
//     }
//     return (
//         <div id = "content-manager-fork-wrapper">
//             {authed === true ?
//             <div id="content-manager-wrapper">
//                 <TopBar/>
//                 {managerStateSetter(content)}
//             </div> :
//             <DeniedAccess />}
//         </div>
//     )
// }