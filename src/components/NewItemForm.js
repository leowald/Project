import "./NewItemForm.css";
import React, { useState } from "react";

function NewItemForm(props) {
  
  return (
    <form>
      <div className="form_item">
        <label></label>
        <input
         type="text"
        ></input>
      </div>
      <button type="submit">ADD GOAL</button>
    </form>
  );
}

export default NewItemForm;
