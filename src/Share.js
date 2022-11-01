import { RWebShare } from "react-web-share";
import { FaRegCommentDots } from "react-icons/fa";


function Share(){
return(
    <div>
       
      <RWebShare
        data={{
          text: "Web Share - GfG",
          url: "http://localhost:3000",
          title: "GfG",
        }}
        onClick={() => console.log("shared successfully!")}
      >
        
        <p className="icon"><FaRegCommentDots /></p>
        
      </RWebShare>
    </div>
    
    
   
)}


export default Share