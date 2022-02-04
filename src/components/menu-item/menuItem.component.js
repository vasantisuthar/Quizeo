import React from "react";

const MenuItem = ({title, imageUrl, linkUrl}) => {
    return ( 
        <div className="menu-item">
            <h3>{title}</h3>
        </div>
     );
}
 
export default MenuItem;