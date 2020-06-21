import DragAndDrop from "./js/logic/DragAndDrop";
import NotePopUp from "./js/model/NotePopUp";

export default function main() {
  const notePopUp = new NotePopUp();
  notePopUp.popUpOnClick();

  const noteTest = new DragAndDrop(document.querySelector(".draggable"));
}