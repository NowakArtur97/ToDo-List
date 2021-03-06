export default class FormUtil {
  static extractData(form) {
    return [...form.elements].reduce((data, element) => {
      const isCheckedRadioBtn = element.type === "radio" && element.checked;
      const hasElementValue =
        element.name && element.value && element.type !== "radio";
      if (isCheckedRadioBtn || hasElementValue) {
        data[element.name] = element.value;
      }
      return data;
    }, {});
  }

  static populateData(form, data) {
    const elements = [...form.elements];

    const isRadioWithSameValue = (el, value) =>
      el.type === "radio" && el.value === value;

    for (let key of Object.keys(data)) {
      const element = elements.find(
        (el) =>
          isRadioWithSameValue(el, data[key]) ||
          (el.name === key && el.type !== "radio")
      );
      if (element) {
        if (element.type === "radio") {
          element.checked = true;
        } else {
          element.value = data[key];

          if (element.type === "color") {
            form.style.backgroundColor = data[key];
          }
        }
      }
    }
  }

  static resetForm(form) {
    form.reset();
    [...form.elements].forEach((element) => {
      if (element.type === "hidden") {
        element.value = "";
      }
    });
  }
}
