var _Pmatrix;
var _Vmatrix;
var _Mmatrix;
var _Nmatrix;

for (var i = 0; i < 12 * 4 * 6; i++) {
    vertices.push(verticeKubus[i]);

}

for (var i = 0; i < 12 * 4 * 4; i++) {
    vertices.push(limasSegiempatVertice[i]);
}

for (var i = 0; i < prismaSegitigaVertice.length; i ++) {
    vertices.push(prismaSegitigaVertice[i]);
}

function setUpBuffer() {
    // Create and store data into vertex buffer
    var vertex_buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    // Create and store data into color buffer
    var color_buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, color_buffer);
    gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array(verticeColors),
        gl.STATIC_DRAW
    );

    var normal_buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, normal_buffer);
    gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array(vertexNormals),
        gl.STATIC_DRAW
    );

    /*======== Associating attributes to vertex shader =====*/
    console.log(shaderProgram);
    _Pmatrix = gl.getUniformLocation(shaderProgram, "Pmatrix");
    _Vmatrix = gl.getUniformLocation(shaderProgram, "Vmatrix");
    _Mmatrix = gl.getUniformLocation(shaderProgram, "Mmatrix");
    _Nmatrix = gl.getUniformLocation(shaderProgram, "Nmatrix");

    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    var _position = gl.getAttribLocation(shaderProgram, "position");
    console.log(_position);
    gl.vertexAttribPointer(_position, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(_position);

    gl.bindBuffer(gl.ARRAY_BUFFER, color_buffer);
    var _color = gl.getAttribLocation(shaderProgram, "color");
    console.log(_color);
    gl.vertexAttribPointer(_color, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(_color);

    gl.bindBuffer(gl.ARRAY_BUFFER, normal_buffer);
    var _normal = gl.getAttribLocation(shaderProgram, "normal");
    console.log(_normal);
    gl.vertexAttribPointer(_normal, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(_normal);

    gl.useProgram(shaderProgram);

    gl.enable(gl.DEPTH_TEST);

    gl.depthFunc(gl.LEQUAL);

    gl.clearColor(0, 0, 0, 0);
    gl.clearDepth(1.0);
    gl.viewport(0.0, 0.0, canvas.width, canvas.height);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
}

function setUpBufferFromObjects() {
    // Create and store data into vertex buffer
    var vertex_buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);

    var vertices_array = objects[0].vertices.concat(
        objects[1].vertices,
        objects[2].vertices
    );
    var colors_array = objects[0].color.concat(
        objects[1].color,
        objects[2].color
    );
    var vertexNormals_array = objects[0].normals.concat(
        objects[1].normals,
        objects[2].normals
    );

    gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array(vertices_array),
        gl.STATIC_DRAW
    );

    // Create and store data into color buffer
    var color_buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, color_buffer);
    gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array(colors_array),
        gl.STATIC_DRAW
    );

    var normal_buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, normal_buffer);
    gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array(vertexNormals_array),
        gl.STATIC_DRAW
    );

    /*======== Associating attributes to vertex shader =====*/
    console.log(shaderProgram);
    _Pmatrix = gl.getUniformLocation(shaderProgram, "Pmatrix");
    _Vmatrix = gl.getUniformLocation(shaderProgram, "Vmatrix");
    _Mmatrix = gl.getUniformLocation(shaderProgram, "Mmatrix");
    _Nmatrix = gl.getUniformLocation(shaderProgram, "Nmatrix");

    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    var _position = gl.getAttribLocation(shaderProgram, "position");
    console.log(_position);
    gl.vertexAttribPointer(_position, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(_position);

    gl.bindBuffer(gl.ARRAY_BUFFER, color_buffer);
    var _color = gl.getAttribLocation(shaderProgram, "color");
    console.log(_color);
    gl.vertexAttribPointer(_color, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(_color);

    gl.bindBuffer(gl.ARRAY_BUFFER, normal_buffer);
    var _normal = gl.getAttribLocation(shaderProgram, "normal");
    console.log(_normal);
    gl.vertexAttribPointer(_normal, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(_normal);

    gl.useProgram(shaderProgram);

    gl.enable(gl.DEPTH_TEST);

    gl.depthFunc(gl.LEQUAL);

    gl.clearColor(0, 0, 0, 0);
    gl.clearDepth(1.0);
    gl.viewport(0.0, 0.0, canvas.width, canvas.height);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
}

// Menggambar Objek
function draw(model_matrix, start, end) {
    gl.uniformMatrix4fv(_Pmatrix, false, proj_matrix);
    gl.uniformMatrix4fv(_Vmatrix, false, view_matrix);
    gl.uniformMatrix4fv(_Mmatrix, false, model_matrix);

    if (shadingOn) {
        shading(model_matrix, view_matrix);
    } else {
        let normalMatrix = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        gl.uniformMatrix4fv(_Nmatrix, false, normalMatrix);
    }

    for (var i = start; i < end; i++) {
        gl.drawArrays(gl.TRIANGLE_FAN, i * 4, 4);
    }
}

function setUpInitScene() {
    var model_matrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

    objects.push({
        name: "cube",
        offset: 0,
        end: 24,
        numVertices: 96,
        vertices: vertices.slice(0, 96 * 3),
        color: verticeColors.slice(0, 96 * 3),
        normals: vertexNormals.slice(0, 96 * 3),
        modelMatrix: model_matrix,
        rotateX : 0,
        rotateY : 0,
        rotateZ : 0,
    });

    objects.push({
        name: "limas",
        offset: 24,
        end: 40,
        numVertices: 64,
        vertices: vertices.slice(96 * 3, 96 * 3 + 64 * 3),
        color: verticeColors.slice(96 * 3, 96 * 3 + 64 * 3),
        normals: vertexNormals.slice(96 * 3, 96 * 3 + 64 * 3),
        projMatrix: proj_matrix,
        modelMatrix: model_matrix,
        rotateX : 0,
        rotateY : 0,
        rotateZ : 0,
    });


    let prismVertices = prismaSegitigaVertice.length / 3
    objects.push({
        "name": "prisma",
        "offset": 40,
        "end": 40 + prismVertices / 4,
        "numVertices": prismVertices,
        "vertices": vertices.slice(96 * 3 + 64 * 3, 96 * 3 + 64 * 3 + prismVertices * 3),
        "color": verticeColors.slice(96 * 3 + 64 * 3, 96 * 3 + 64 * 3 + prismVertices * 3),
        "normals": vertexNormals.slice(96 * 3 + 64 * 3, 96 * 3 + 64 * 3 + prismVertices * 3),
        "projMatrix": proj_matrix,
        "modelMatrix": model_matrix
    })

    console.log(96 * 3 + 64 * 3, 96 * 3 + 64 * 3 + prismVertices * 3)
    console.log(objects[2].normals);

    var init_translate_cube = translateFunc(0, 0.3, 0);
    var init_translate_limas = translateFunc(-0.3, -0.3, 0);
    var init_translate_prism = translateFunc(0.3, -0.3, 0);

    // cube
    let cube_model_matrix = objects[0].modelMatrix
    objects[0].modelMatrix = multiply(cube_model_matrix, init_translate_cube);

    // limas
    let limas_model_matrix = objects[1].modelMatrix
    objects[1].modelMatrix = multiply(limas_model_matrix, init_translate_limas);

    // limas
    let prism_model_matrix = objects[2].modelMatrix
    objects[2].modelMatrix = multiply(prism_model_matrix, init_translate_prism);

    for (var i = 0; i < objects.length; i++) {
        draw(
            objects[i].modelMatrix,
            objects[i].offset,
            objects[i].end
        );
    }
    document.getElementById('scale').value = 1;

    let animateCheckbox = document.getElementById("switch-animate");
    animateCheckbox.checked = true;
}

function resetObject(objectIndex) {
    var model_matrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

    var init_translate_cube = translateFunc(0, 0.3, 0);
    var init_translate_limas = translateFunc(-0.3, -0.3, 0);
    var init_translate_prism = translateFunc(0.3, -0.3, 0);

    if (objectIndex === 0) {
        // Kubus
        objects[0] = {
            name: "cube",
            offset: 0,
            end: 24,
            numVertices: 96,
            vertices: vertices.slice(0, 96 * 3),
            color: verticeColors.slice(0, 96 * 3),
            normals: vertexNormals.slice(0, 96 * 3),
            modelMatrix: model_matrix,
            rotateX : 0,
            rotateY : 0,
            rotateZ : 0,
        }

        let cube_model_matrix = objects[0].modelMatrix
        objects[0].modelMatrix = multiply(cube_model_matrix, init_translate_cube);
    } else if (objectIndex === 1) {
        // Limas
        objects[1] = {
            name: "limas",
            offset: 24,
            end: 40,
            numVertices: 64,
            vertices: vertices.slice(96 * 3, 96 * 3 + 64 * 3),
            color: verticeColors.slice(96 * 3, 96 * 3 + 64 * 3),
            normals: vertexNormals.slice(96 * 3, 96 * 3 + 64 * 3),
            projMatrix: proj_matrix,
            modelMatrix: model_matrix,
            rotateX : 0,
            rotateY : 0,
            rotateZ : 0,
        }

        let limas_model_matrix = objects[1].modelMatrix
        objects[1].modelMatrix = multiply(limas_model_matrix, init_translate_limas);
    } else if (objectIndex === 2) {
        // Prisma
        let prismVertices = prismaSegitigaVertice.length / 3
        objects[2] = {
            "name": "prisma",
            "offset": 40,
            "end": 40 + prismVertices / 4,
            "numVertices": prismVertices,
            "vertices": vertices.slice(96 * 3 + 64 * 3, 96 * 3 + 64 * 3 + prismVertices * 3),
            "color": verticeColors.slice(96 * 3 + 64 * 3, 96 * 3 + 64 * 3 + prismVertices * 3),
            "normals": vertexNormals.slice(96 * 3 + 64 * 3, 96 * 3 + 64 * 3 + prismVertices * 3),
            "projMatrix": proj_matrix,
            "modelMatrix": model_matrix
        }

        let prism_model_matrix = objects[2].modelMatrix
        objects[2].modelMatrix = multiply(prism_model_matrix, init_translate_prism);
    }

    for (var i = 0; i < objects.length; i++) {
        draw(
            objects[i].modelMatrix,
            objects[i].offset,
            objects[i].end
        );
    }
    document.getElementById('scale').value = 1;

    let animateCheckbox = document.getElementById("switch-animate");
    animateCheckbox.checked = true;
    stopAnimation();
    toggleAnimate();
}

function resetButton() {
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT); // hapus tampilan layar

    resetValueObject();
    resetObject(getIndexObjectSelected(document.getElementById('objectlist').value));
}

function resetCamera() {
    // ubah terlebih dahulu nilai pada cameraPosition
    cameraPosition = [0, 0, 1];

    // mengubah zoom menjadi 1
    // mengubah value zoom agar ke posisi default
    zoomLevel = 1;

    view_matrix = getViewMatrix(cameraPosition, defaultTargetPosition, defaultUpDirection, zoomLevel);
    proj_matrix = getOrthoMatrix(-defaultWidth/2, defaultWidth/2, -defaultHeight/2, defaultHeight/2, -2, 2);

    // reset value pada camera
    document.getElementById('cameraX').value = 0;
    document.getElementById('cameraY').value = 0;
    document.getElementById('cameraZ').value = 1;
}


// Function to redraw scene
function redrawScene() {
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT); // hapus tampilan layar

    // redraw the scene
    for (var i = 0; i < objects.length; i++) {
        draw(
            objects[i].modelMatrix,
            objects[i].offset,
            objects[i].end
        );
    }

}

setUpBuffer();
setUpInitScene();