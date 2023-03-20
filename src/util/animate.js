let currentAngles = {
    x: 0,
    y: 0,
    z: 0
};
let rotationSpeed = 0.000004;
let animateId = {
    x: null,
    y: null,
    z: null
};

function animate(axis) {
    // update current angle based on rotation speed
    currentAngles[axis] += rotationSpeed;

    // create new rotation matrix based on current angle
    let rotationMatrix;
    if (axis == 'x') {
        rotationMatrix = rotateXFunc(currentAngles.x);
    } else if (axis == 'y') {
        rotationMatrix = rotateYFunc(currentAngles.y);
    } else {
        rotationMatrix = rotateZFunc(currentAngles.z);
    }

    // get the selected object and its index
    selectedObject = document.getElementById('objectlist').value;
    let indexObjectSelected = getIndexObjectSelected(selectedObject);

    // multiply the current model matrix with the rotation matrix
    let currentModelMatrix = objects[indexObjectSelected].modelMatrix;
    objects[indexObjectSelected].modelMatrix = multiply(rotationMatrix, currentModelMatrix);

    // redraw the scene
    for (var i = 0; i < objects.length; i++) {
        draw(objects[i].modelMatrix, objects[i].offset, objects[i].end);
    }

    // request next animation frame
    animateId[axis] = requestAnimationFrame(function() { animate(axis) });
}

function toggleAnimate() {
    let animateCheckbox = document.getElementById('switch-animate');
    if (animateCheckbox.checked) {
        animateId.x = requestAnimationFrame(function() { animate('x') });
        animateId.y = requestAnimationFrame(function() { animate('y') });
        animateId.z = requestAnimationFrame(function() { animate('z') });
    } else {
        cancelAnimationFrame(animateId.x);
        cancelAnimationFrame(animateId.y);
        cancelAnimationFrame(animateId.z);
        currentAngles.x = 0;
        currentAngles.y = 0;
        currentAngles.z = 0;
    }
}
// aktifkan animasi
toggleAnimate();