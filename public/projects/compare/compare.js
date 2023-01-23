var data = {
    "Social Studies": {
      "Empty": 0.07096774193548387,
      "Beige": 0.0064516129032258064,
      "Black": 0.0064516129032258064,
      "Blue": 0.06451612903225806,
      "Brown": 0.025806451612903226,
      "Green": 0.09032258064516129,
      "Orange": 0.1935483870967742,
      "Purple": 0.15483870967741936,
      "Red": 0.06451612903225806,
      "Teal": 0.0064516129032258064,
      "what a frivolous question": 0.0064516129032258064,
      "White": 0.0064516129032258064,
      "Yellow": 0.3032258064516129
    },
    "English": {
      "Blue": 0.3096774193548387,
      "Brown": 0.0064516129032258064,
      "Red": 0.2903225806451613,
      "Orange": 0.0064516129032258064,
      "Yellow": 0.15483870967741936,
      "Green": 0.06451612903225806,
      "Purple": 0.07096774193548387,
      "Black": 0.012903225806451613,
      "Pink": 0.0064516129032258064,
      "what a frivolous question": 0.0064516129032258064,
      "Empty": 0.07096774193548387
    },
    "Science": {
      "Yellow": 0.06451612903225806,
      "Green": 0.6967741935483871,
      "Blue": 0.09032258064516129,
      "Red": 0.025806451612903226,
      "Orange": 0.0064516129032258064,
      "Purple": 0.03225806451612903,
      "what a frivolous question": 0.0064516129032258064,
      "Black": 0.012903225806451613,
      "Empty": 0.06451612903225806
    },
    "Math": {
      "Red": 0.4258064516129032,
      "Yellow": 0.04516129032258064,
      "Orange": 0.012903225806451613,
      "Green": 0.025806451612903226,
      "Purple": 0.012903225806451613,
      "Black": 0.01935483870967742,
      "Blue": 0.3870967741935484,
      "what a frivolous question": 0.0064516129032258064,
      "Empty": 0.06451612903225806
    }
}

function formSubmit() {
    let select1 = document.getElementById("class");
    let class_ = select1.options[select1.selectedIndex].text;
    let select2 = document.getElementById("color");
    let color = select2.options[select2.selectedIndex].text;

    if (class_ == "Select a class") {
        document.getElementById('result').innerHTML = "Please select a class!";
        document.getElementById('result').style.color = "red";
    }
    else if (color == "Select a color") {
        document.getElementById('result').innerHTML = "Please select a color!";
        document.getElementById('result').style.color = "red";
    }
    else {
        document.getElementById('result').innerHTML = (data[class_][color] * 100).toFixed(2) + "% of LASA students agree with you!" ;
        document.getElementById('result').style.color = "green";
    }
}