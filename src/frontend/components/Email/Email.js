import React from "react";

export default function Email() {
  return (
    <div>
      <textarea
        className="placeholder"
        placeholder="   Please type your message here!"
      ></textarea>

      <div className="emailBox">
    
     
      </div>
  
      <a href="mailto:anitha.k.dharaneedharan@gmail.com?Subject=Hello">
        Send email
      </a>
    </div>
  );
}
