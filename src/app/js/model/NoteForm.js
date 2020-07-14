import DOMElements from "../dom/DOMElements";
import Status from "../state/Status";

import ObserverManager from "../observer/ObserverManager";

export default class NoteForm {
  constructor(formUtil, taskService, noteService, notePropertiesUtil) {
    this.taskService = taskService;
    this.noteService = noteService;
    this.formUtil = formUtil;
    this.notePropertiesUtil = notePropertiesUtil;

    this.events = new ObserverManager("create", "update");

    this.addEventListeners();
  }

  addEventListeners() {
    DOMElements.noteForm.addEventListener(
      "submit",
      this.createOrUpdateTask.bind(this)
    );
    DOMElements.noteFormColorPicker.addEventListener(
      "input",
      this.changeFormColor.bind(this)
    );
  }

  createOrUpdateTask(e) {
    e.preventDefault();
    const task = this.formUtil.extractData(DOMElements.noteForm);

    if (!task.description) return;

    if (task.id) {
      this.events.notify("update", task);
    } else {
      this.setTaskProperties(task);
      this.events.notify("create", task);
      this.formUtil.resetForm(DOMElements.noteForm);
    }
  }

  populateForm(note) {
    const task = this.notePropertiesUtil.getTaskFromNote(note);
    this.formUtil.populateData(DOMElements.noteForm, task);
  }

  setTaskProperties(task) {
    task.id = task.id || this.taskService.getNextAvailableIndex();
    task.pinColor = this.notePropertiesUtil.getRandomGradient();
    task.rotation = this.notePropertiesUtil.getRandomRotation();
    const {
      xPosition,
      yPosition,
    } = this.notePropertiesUtil.getRandomPosition();
    task.xPosition = xPosition;
    task.yPosition = yPosition;
    task.status = Status.ACTIVE;
  }

  changeFormColor() {
    DOMElements.noteForm.style.backgroundColor =
      DOMElements.noteFormColorPicker.value;
  }
}
