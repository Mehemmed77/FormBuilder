export default function CreateHTML(id, inputType, data) {
    const attributes = `${data.required ? "required" : ""} ${data.disabled ? "disabled" : ""}`;

    let inputText = ``;
    if (inputType === "short text") {
        inputText = `
        <label for="${id}"> ${data.label} </label>
        <input type="${data.type}" placeholder="${data.placeholder}" value="${data.value}"
        ${attributes}
        id="${id}" />`
    }

    if(inputType === "long text") {
        inputText = `<label for="${id}"> ${data.label} <label />
        <textarea placeholder="${data.placeholder}" value="${data.value}" 
        ${attributes}
        id="${id}"></textarea>`    
    }

    if(inputType === "radio") {
        inputText = `<input type="radio" value="${data.value}" 
        ${attributes}
        id="${id}" />
        <label for="${id}"> ${data.label} </label>`
    }
    if(inputType === "checkbox") {
        inputText = `<input type="checkbox" value="${data.value}"
        ${attributes}
        id="${id}" />
        <label for="${id}"> ${data.label} </label>`
    }

    if (inputType === "options") {
        const optionTags = Object.keys(data)
            .filter((key) => key.startsWith("option"))
            .map((key) => `<option value="${data[key]}">${data[key]}</option>`)
            .join("\n");

        return `<label>${data.label}</label>\n<select>${optionTags}\n</select>`;
    }

    return inputText;
}