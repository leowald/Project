import "./NewItem.css";
import NewItemForm from "./NewItemForm";

function NewItem(props) {
  function setNewItem(item) {
    props.onNew(item);
  }
  return (
    <div className="boxshadow roundbox">
      <h2>Course Goal</h2>
      <NewItemForm></NewItemForm>
    </div>
  );
}

export default NewItem;
