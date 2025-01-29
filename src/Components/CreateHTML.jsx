export default function CreateHTML(inputType, data) {
    let inputText;
    if (inputType === "short text") {
        inputText = `
            <label> ${data.label} <label />
            <input placeholder=${data.placeholder} value=${data.value} type=${data.type} />
        `
    };

    console.log(inputText);
}