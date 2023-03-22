function toggleShading() {
    let animateCheckbox = document.getElementById('switch-shader');
    shadingOn = animateCheckbox.checked
    redrawScene()
}

function shading(modelMatrix, viewMatrix){
    var temp = multiply(modelMatrix, viewMatrix);
    var mvMatrix = [];
    var normalMatrix = [];

    for (var i = 0; i<16; i+=4){
        mvMatrix.push([temp[i], temp[i+1], temp[i+2], temp[i+3]]);
    }

    normalMatrix = invertFunc(mvMatrix);
    normalMatrix = transposeFunc(normalMatrix);
    var normalVector = [];
    for (var i = 0; i<4; i++){
        for (var j = 0; j<4; j++){
            normalVector.push(normalMatrix[i][j]);
        }
    }
    gl.uniformMatrix4fv(_Nmatrix, false, normalVector);
}

toggleShading()