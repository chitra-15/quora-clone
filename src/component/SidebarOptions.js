import React from "react";
import '../css/SidebarOptions.css';
import { Add } from "@material-ui/icons"; 

function SidebarOptions() {
    return (
        <div className = "sidebaroptions">
            <div className = "sidebarOption">
              <img 
                  src = "https://qphs.fs.quoracdn.net/main-thumb-t-930-100-cbbsbwijdhpyzlpipejvqpiijhhoaday.jpeg"
                  alt = ""
             />
             <p>History</p>
            </div>
            
            <div className = "sidebarOption">
              <img 
                  src = "https://www.marketingdonut.co.uk/sites/default/files/how-develop-your-business-business-operation130099706.jpg"
                  alt = ""
             />
             <p>Business</p>
            </div>
            
            <div className = "sidebarOption">
              <img 
                  src = "https://www.techrepublic.com/a/hub/i/r/2020/06/09/cc4f5223-9109-497d-a7e6-26e7ed9ba1ff/resize/1200x/1288595df3dabbc87b9355587905bfee/ai-brain-2.jpg"
                  alt = ""
             />
             <p>Psychology</p>
            </div>

            <div className = "sidebarOption">
              <img 
                  src = "https://s3.envato.com/files/303141951/1-07720.jpg"
                  alt = ""
             />
             <p>Cooking</p>
            </div>


            <div className = "sidebarOption">
              <img 
                  src = "https://www.liveabout.com/thmb/pwO4o_iDrZRTmmhs7eOfD25Qoqw=/1500x1125/smart/filters:no_upscale()/pop-music-57bce3863df78c87634ea806.jpg"
                  alt = ""
             />
             <p>Music</p>
            </div>

            <div className = "sidebarOption">
              <img 
                  src = "https://www.thehindu.com/education/jy3dkh/article33948588.ece/ALTERNATES/LANDSCAPE_1200/27epbs-science"
                  alt = ""
             />
             <p>Science</p>
            </div>

            <div className = "sidebarOption">
              <img 
                  src = "https://www.healthcareitnews.com/sites/hitn/files/Global%20healthcare_2.jpg"
                  alt = ""
             />
             <p>Health</p>
            </div>

            <div className = "sidebarOption">
              <img 
                  src = "https://image.shutterstock.com/image-vector/online-cinema-art-movie-watching-260nw-586719869.jpg"
                  alt = ""
             />
             <p>Movies</p>
            </div>

            <div className = "sidebarOption">
              <img 
                  src = "https://cdn.britannica.com/84/203584-050-57D326E5/speed-internet-technology-background.jpg"
                  alt = ""
             />
             <p>Technology</p>
            </div>

            <div className = "sidebarOption">
              <img 
                  src = "https://thebetterkashmir.com/betterkashmircontent/uploads/2021/04/education.jpg"
                  alt = ""
             />
             <p>Education</p>
            </div>

            <div className = "sidebarOption">
              <Add />
              <p className="text">Discover Spaces</p>
            </div>
            
        </div>
    );
}

export default SidebarOptions;