function rotateXFunc(angleInRadians) {
    // calculate cos and sin values from the angle
    var cosValue = Math.cos(angleInRadians);
    var sinValue = Math.sin(angleInRadians);

    // define a 4x4 matrix that rotates an object around the X-axis by the given angle
    return [
        1, 0, 0, 0,
        0, cosValue, sinValue, 0,
        0, -sinValue, cosValue, 0,
        0, 0, 0, 1,
    ];
}

function rotateYFunc(angleInRadians) {
    // calculate cos and sin values from the angle
    var cosValue = Math.cos(angleInRadians);
    var sinValue = Math.sin(angleInRadians);

    // define a 4x4 matrix that rotates an object around the Y-axis by the given angle
    return [
        cosValue, 0, sinValue, 0,
        0, 1, 0, 0, -sinValue, 0, cosValue, 0,
        0, 0, 0, 1,
    ];
}

function rotateZFunc(angleInRadians) {
    // calculate cos and sin values from the angle
    var cosValue = Math.cos(angleInRadians);
    var sinValue = Math.sin(angleInRadians);

    // define a 4x4 matrix that rotates an object around the Z-axis by the given angle
    return [
        cosValue, sinValue, 0, 0, -sinValue, cosValue, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1,
    ];
}

function scaleFunc(x, y, z) {
    // define a 4x4 matrix that scales an object by the given values along each axis
    return [
        x, 0, 0, 0,
        0, y, 0, 0,
        0, 0, z, 0,
        0, 0, 0, 1,
    ];
}

function translateFunc(x, y, z) {
    // define a 4x4 matrix that translates an object by the given values along each axis
    return [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        x, y, z, 1,
    ];
}

function invertFunc(matrix) {
    const n = matrix.length;
    const identityMatrix = Array.from({ length: n }, (_, i) => {
      return Array.from({ length: n }, (_, j) => i === j ? 1 : 0);
    });
  
    for (let i = 0; i < n; i++) {
      let pivot = matrix[i][i];
  
      for (let j = 0; j < n; j++) {
        matrix[i][j] /= pivot;
        identityMatrix[i][j] /= pivot;
      }
  
      for (let k = 0; k < n; k++) {
        if (k === i) continue;
  
        let factor = matrix[k][i] / matrix[i][i];
  
        for (let j = 0; j < n; j++) {
          matrix[k][j] -= factor * matrix[i][j];
          identityMatrix[k][j] -= factor * identityMatrix[i][j];
        }
      }
    }
  
    return identityMatrix;
  }

function transposeFunc(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    const result = [];
    for (let j = 0; j < cols; j++) {
        result[j] = [];
        for (let i = 0; i < rows; i++) {
        result[j][i] = matrix[i][j];
        }
    }

    return result;
}
  
  

function multiply(a, b) {
    // multiply two 4x4 matrices
    let result = [];
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            let sum = 0;
            for (var k = 0; k < 4; k++)
                sum = sum + a[i * 4 + k] * b[k * 4 + j];
            result[i * 4 + j] = sum;
        }
    }
    return result;
}

function updateTranslateFunc(axis, value) {
    // get the selected object and its index
    object = document.getElementById('objectlist').value;
    let indexObjectSelected = getIndexObjectSelected(object);

    // create a translation matrix along the specified axis
    if (axis == 'x') {
        var model_matrix = translateFunc(value, 0, 0);
    } else {
        var model_matrix = translateFunc(0, value, 0);
    }

    // multiply the current model matrix with the translation matrix
    let currentModelMatrix = objects[indexObjectSelected].modelMatrix;
    objects[indexObjectSelected].modelMatrix = multiply(currentModelMatrix, model_matrix);

    // redraw the scene
    for (var i = 0; i < objects.length; i++) {
        draw(objects[i].modelMatrix, objects[i].offset, objects[i].end);
    }
}

function updateScaleFunc() {
    // get the selected object and its index
    let value = document.getElementById('scale').value;
    selectedObject = document.getElementById('objectlist').value;
    let indexObjectSelected = getIndexObjectSelected(selectedObject);

    // create a scaling matrix
    let pointCenter = getPointCenter(objects[indexObjectSelected].offset * 12, objects[indexObjectSelected].offset * 12 + objects[indexObjectSelected].numVertices * 3, vertices);
    var translate1 = translateFunc(-pointCenter[0], -pointCenter[1], 0);
    var translate2 = translateFunc(pointCenter[0], pointCenter[1], 0);
    var scale_matrix = scaleFunc(value, value, value);
    var model_matrix = multiply(translate1, multiply(scale_matrix, translate2));

    // multiply the current model matrix with the scaling matrix
    let currentModelMatrix = objects[indexObjectSelected].modelMatrix;
    objects[indexObjectSelected].modelMatrix = multiply(model_matrix, currentModelMatrix);

    // redraw the scene
    for (var i = 0; i < objects.length; i++) {
        draw(objects[i].modelMatrix, objects[i].offset, objects[i].end);
    }
}

function updateRotateFunc(axis, value) {
    // get the selected object and its index
    selectedObject = document.getElementById('objectlist').value;
    let indexObjectSelected = getIndexObjectSelected(selectedObject);

    // create a rotation matrix along the specified axis
    let rotateValue = 0;
    let pointCenter = getPointCenter(objects[indexObjectSelected].offset * 12, objects[indexObjectSelected].offset * 12 + objects[indexObjectSelected].numVertices * 3, vertices);
    var translate1 = translateFunc(-pointCenter[0], -pointCenter[1], 0);
    var translate2 = translateFunc(pointCenter[0], -0, 0);
    var model_matrix;

    // multiply the current model matrix with the rotation matrix
    if (axis == 'x') {
        rotateValue = value - rotateXOld;
        var model_matrix = multiply(translate1, multiply(rotateXFunc(rotateValue), translate2));
        rotateXOld = value;
    } else if (axis == 'y') {
        rotateValue = value - rotateYOld;
        var model_matrix = multiply(translate1, multiply(rotateYFunc(rotateValue), translate2));
        rotateYOld = value;
    } else {
        rotateValue = value - rotateZOld;
        var model_matrix = multiply(translate1, multiply(rotateZFunc(rotateValue), translate2));
        rotateZOld = value;
    }

    // multiply the current model matrix with the rotation matrix
    let currentModelMatrix = objects[indexObjectSelected].modelMatrix;
    objects[indexObjectSelected].modelMatrix = multiply(model_matrix, currentModelMatrix);

    // redraw the scene
    for (var i = 0; i < objects.length; i++) {
        draw(objects[i].modelMatrix, objects[i].offset, objects[i].end);
    }
}