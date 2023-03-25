function changeValueObject(){
    // get the selected object and its index
    selectedObject = document.getElementById('objectlist').value;
    let indexObjectSelected = getIndexObjectSelected(selectedObject);
    let obj = objects[indexObjectSelected]

    document.getElementById('rotateX').value = obj.rotateX;
    document.getElementById('rotateY').value = obj.rotateY;
    document.getElementById('rotateZ').value = obj.rotateZ;
    document.getElementById('scale').value = 1;
    rotateXOld = obj.rotateX;
    rotateYOld = obj.rotateY;
    rotateZOld = obj.rotateZ;
}

// This function resets the values of the rotation and scale input fields to their default values, and resets the old rotation values to 0.
function resetValueObject() {
    document.getElementById('rotateX').value = 0;
    document.getElementById('rotateY').value = 0;
    document.getElementById('rotateZ').value = 0;
    document.getElementById('scale').value = 1;
    rotateXOld = 0;
    rotateYOld = 0;
    rotateZOld = 0;
}

// This function calculates the center point of an array of points specified by their x, y, and z coordinates.
function getPointCenter(start, end, arr) {
    // Initialize variables to store the minimum and maximum x and y values of the array of points.
    let pointXMax = -1;
    let pointXMin = 1;
    let pointYMax = -1;
    let pointYMin = 1;

    // Loop through the array of points and update the minimum and maximum x and y values as necessary.
    for (var i = start; i < end; i += 3) {
        if (pointXMin > arr[i]) {
            pointXMin = arr[i];
        }

        if (pointXMax < arr[i]) {
            pointXMax = arr[i];
        }

        if (pointYMin > arr[i + 1]) {
            pointYMin = arr[i + 1];
        }

        if (pointYMax < arr[i + 1]) {
            pointYMax = arr[i + 1];
        }
    }

    // Calculate the x and y coordinates of the center point.
    let pointXCenter = (pointXMax + pointXMin) / 2;
    let pointYCenter = (pointYMax + pointYMin) / 2;

    // Log the center point coordinates to the console and return them as an array.
    console.log(pointXCenter, pointYCenter)
    return ([pointXCenter, pointYCenter])
}

// This function calculates the position of the mouse pointer relative to the canvas element.
function getMousePosition(canvas, event) {
    let result = [];
    let rect = canvas.getBoundingClientRect();
    let positionX = ((event.clientX - rect.left) / (canvas.width)) * 2 - 1;
    let positionY = -((event.clientY - rect.top) / (canvas.height)) * 2 + 1;
    console.log(positionX, positionY);
    result.push(positionX);
    result.push(positionY)
    return (result);
}

// This function returns the index of the specified object in the objects array.
function getIndexObjectSelected(object) {
    for (var i = 0; i < objects.length; i++) {
        if (objects[i].name == object) {
            indexObjectSelected = i;
            break;
        }
    }
    return indexObjectSelected;
}

// fuction to save the model
function save() {
    var json = JSON.stringify(objects, null, 4);
    let dataUri =
        "data:application/json;charset=utf-8," + encodeURIComponent(json);
    let exportFileDefaultName = "model.json";

    let linkElement = document.createElement("a");
    linkElement.setAttribute("href", dataUri);
    linkElement.setAttribute("download", exportFileDefaultName);
    linkElement.click();
}

function load(){
    var fileUpload = document.getElementById("file-load");
    fileUpload.click()
}

function importModel(){
    var fileUpload = document.getElementById("file-load");
    if (fileUpload.value !== null){
        var reader = new FileReader(); // File reader to read the file 
        
        // This event listener will happen when the reader has read the file
        reader.addEventListener('load', function() {
            var result = JSON.parse(reader.result); // Parse the result into an object 
          
            console.log(result);

            // menghapus semua objek yang ada pada canvas dengan mengosongkan array objects
            objects = [];

            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT); // hapus tampilan layar
            for (let object of result){
                objects.push(object)
            }

            changeValueObject()            
            redrawScene()
        });
        
        reader.readAsText(fileUpload.files[0]); // Read the uploaded file
    }
}


// This code adds an event listener to the canvas element that listens for a mousedown event and calls the getMousePosition function.
var canvasElement = document.querySelector("#glcanvas");
canvasElement.addEventListener('mousedown', (e) => {
    vec = getMousePosition(canvasElement, e);
});