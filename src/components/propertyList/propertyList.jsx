import React from 'react';
import './propertyList.css'; // Make sure this file exists and is in the same folder

// Named export for PropertyList
export const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img 
        
          src="https://i.pinimg.com/236x/7a/a1/94/7aa19415266b8ad0ad570b7d2ecc3e8e.jpg" 
          alt="" 
          className="pListImg" 
        />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>233 hotels</h2>
        </div>
      </div>
      <div  className="pListItem" >
        <img 
          src="https://i.pinimg.com/236x/8c/64/57/8c6457c6a0d24f184a0f9cee2a537d4e.jpg" 
          alt="" 
          className="pListImg" 
        
        />
        <div className="pListTitles">
          <h1>Apartments</h1>
          <h2>233 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img 
          src="https://i.pinimg.com/236x/38/e5/c7/38e5c784036d0d789c37a50e3e634432.jpg" 
          alt="" 
          className="pListImg" 
        />
        <div className="pListTitles">
          <h1>Resorts</h1>
          <h2>233 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img 
          src="https://i.pinimg.com/236x/9f/e0/a1/9fe0a1d7ff24788ef2cd88e8a1a9e57e.jpg" 
          alt="" 
          className="pListImg" 
        />
        <div className="pListTitles">
          <h1>Villas</h1>
          <h2>233 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img 
          src="https://i.pinimg.com/236x/9c/be/97/9cbe974595f3bcc9a06eefcd13f95a9a.jpg" 
          alt="" 
          className="pListImg" 
        />
        <div className="pListTitles">
          <h1>Cabins</h1>
          <h2>233 hotels</h2>
        </div>
      </div>
    </div>
  );
};
