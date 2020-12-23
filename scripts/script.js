const defaultSettings = {
    heigth: "400px",
    width: "800px",
    borderWidth: "1px",
    altText: "Here should ba an image",
    src: "./images/9.jpg"
};

const settings = {
    height: {
        min: 0,
        max: window.innerHeight,
        unit: "px"
    },
    width: {
        min: 0,
        max: window.innerWidth,
        unit: "px"
    },
    borderWidth: {
        min: 0,
        max: 1000,
        unit: "px"
    }
};

function setDefaultImageSettings() {
    var image = document.getElementsByClassName("image")[0];

    image.style.height = defaultSettings.heigth;
    image.style.width = defaultSettings.width;
    image.style["border-width"] = defaultSettings.borderWidth;
    image.alt = defaultSettings.altText;
    image.src = defaultSettings.src;
}

function setDefaultFieldSettings() {
    document.getElementsByName("height")[0].value = parseInt(defaultSettings.heigth);
    document.getElementsByName("width")[0].value = parseInt(defaultSettings.width);
    document.getElementsByName("borderWidth")[0].value = parseInt(defaultSettings.borderWidth);
    document.getElementsByName("altText")[0].value = defaultSettings.altText;
}

function changeImage() {
    var image = document.getElementsByClassName("image")[0];
    var random = Math.floor(Math.random() * 6) + 1;
    image.src = "./images/" + random + ".jpg";
}

function applyStyleChanges() {
    var image = document.getElementsByClassName("image")[0];
    var height = parseInt(document.getElementsByName("height")[0].value);
    var width = parseInt(document.getElementsByName("width")[0].value);
    var borderWidth = parseInt(document.getElementsByName("borderWidth")[0].value);
    var altText = document.getElementsByName("altText")[0].value;

    image.style.height = validateAndReturn(height, settings.height) + settings.height.unit;
    image.style.width = validateAndReturn(width, settings.width) + settings.width.unit;
    image.style["border-width"] = validateAndReturn(borderWidth, settings.borderWidth) + settings.borderWidth.unit;
    image.alt = isValidText(altText) ? altText : defaultSettings.altText;

    document.getElementsByName("height")[0].value = parseInt(image.style.height);
    document.getElementsByName("width")[0].value = parseInt(image.style.width);
    document.getElementsByName("borderWidth")[0].value = parseInt(image.style["border-width"]);
    document.getElementsByName("altText")[0].value = image.alt;
}

function validateAndReturn(value, valueSettings) {
    if (!value || value < valueSettings.min) {
        return valueSettings.min;
    } else if (value > valueSettings.max) {
        return valueSettings.max;
    }
    return value;
}

function isValidText(value) {
    return value && value.trim() !== '';
}

document.addEventListener('DOMContentLoaded', function() {

    setDefaultImageSettings();
    setDefaultFieldSettings();

    for (var input of document.getElementsByTagName("input")) {
        input.addEventListener("change", applyStyleChanges);
    }

    document.getElementsByClassName("image")[0].addEventListener("click", changeImage);
});