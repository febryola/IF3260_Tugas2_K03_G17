var _Pmatrix;
var _Vmatrix;
var _Mmatrix;
var _Nmatrix;

var verticeKubus = [
  //back face
  -0.2, -0.2, -0.2, 0.2, -0.2, -0.2, 0.2, -0.16, -0.2, -0.2, -0.16, -0.2, -0.2,
  0.16, -0.2, 0.2, 0.16, -0.2, 0.2, 0.2, -0.2, -0.2, 0.2, -0.2, -0.2, -0.2,
  -0.2, -0.16, -0.2, -0.2, -0.16, 0.2, -0.2, -0.2, 0.2, -0.2, 0.16, -0.2, -0.2,
  0.2, -0.2, -0.2, 0.2, 0.2, -0.2, 0.16, 0.2, -0.2,

  //front face
  -0.2, -0.2, 0.2, 0.2, -0.2, 0.2, 0.2, -0.16, 0.2, -0.2, -0.16, 0.2, -0.2,
  0.16, 0.2, 0.2, 0.16, 0.2, 0.2, 0.2, 0.2, -0.2, 0.2, 0.2, -0.2, -0.2, 0.2,
  -0.16, -0.2, 0.2, -0.16, 0.2, 0.2, -0.2, 0.2, 0.2, 0.16, -0.2, 0.2, 0.2, -0.2,
  0.2, 0.2, 0.2, 0.2, 0.16, 0.2, 0.2,

  //bottom face
  -0.2, -0.2, 0.2, -0.16, -0.2, 0.2, -0.16, -0.2, -0.2, -0.2, -0.2, -0.2, 0.16,
  -0.2, 0.2, 0.2, -0.2, 0.2, 0.2, -0.2, -0.2, 0.16, -0.2, -0.2, -0.2, -0.2, 0.2,
  0.2, -0.2, 0.2, 0.2, -0.2, 0.16, -0.2, -0.2, 0.16, -0.2, -0.2, -0.2, 0.2,
  -0.2, -0.2, 0.2, -0.2, -0.16, -0.2, -0.2, -0.16,

  //top face
  -0.2, 0.2, 0.2, -0.16, 0.2, 0.2, -0.16, 0.2, -0.2, -0.2, 0.2, -0.2, 0.16, 0.2,
  0.2, 0.2, 0.2, 0.2, 0.2, 0.2, -0.2, 0.16, 0.2, -0.2, -0.2, 0.2, 0.2, 0.2, 0.2,
  0.2, 0.2, 0.2, 0.16, -0.2, 0.2, 0.16, -0.2, 0.2, -0.2, 0.2, 0.2, -0.2, 0.2,
  0.2, -0.16, -0.2, 0.2, -0.16,

  //left face
  -0.2, -0.2, 0.2, -0.2, -0.2, 0.16, -0.2, 0.2, 0.16, -0.2, 0.2, 0.2, -0.2,
  -0.2, -0.2, -0.2, -0.2, -0.16, -0.2, 0.2, -0.16, -0.2, 0.2, -0.2, -0.2, -0.2,
  0.2, -0.2, -0.2, -0.2, -0.2, -0.16, -0.2, -0.2, -0.16, 0.2, -0.2, 0.2, 0.2,
  -0.2, 0.16, 0.2, -0.2, 0.16, -0.2, -0.2, 0.2, -0.2,

  //right face
  0.2, -0.2, 0.2, 0.2, -0.2, 0.16, 0.2, 0.2, 0.16, 0.2, 0.2, 0.2, 0.2, -0.2,
  -0.2, 0.2, -0.2, -0.16, 0.2, 0.2, -0.16, 0.2, 0.2, -0.2, 0.2, -0.2, 0.2, 0.2,
  -0.2, -0.2, 0.2, -0.16, -0.2, 0.2, -0.16, 0.2, 0.2, 0.2, 0.2, 0.2, 0.16, 0.2,
  0.2, 0.16, -0.2, 0.2, 0.2, -0.2,
];

for (var i = 0; i < 12 * 4 * 6; i++) {
  if (i % 3 == 0) {
    vertices.push(verticeKubus[i]);
  } else {
    vertices.push(verticeKubus[i]);
  }
}

var verticeColors = [
  1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0,
  1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1,

  1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0,
  1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1,

  1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0,
  1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1,

  1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0,
  1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1,

  1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0,
  1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1,

  1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0,
  1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1,

  1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
  0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,

  1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
  0, 1, 0, 0, 1, 0, 0, 1, 0, 0,

  1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
  0, 1, 0, 0, 1, 0, 0, 1, 0, 0,

  1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
  0, 1, 0, 0, 1, 0, 0, 1, 0, 0,

  1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
  0, 1, 0, 0, 1, 0, 0, 1, 0, 0,

  0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
  0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,

  0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
  0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,

  0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
  0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,

  0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
  0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,

  0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
  0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
];

var vertexNormals = [
  // Back
  0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0,
  -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0,
  0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0,
  0.0, 0.0, -1.0, 0.0, 0.0, -1.0,

  // Front
  0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0,
  0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0,
  0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0,
  0.0, 0.0, 1.0,

  // Bottom
  0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0,
  0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0,
  -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0,
  0.0, -1.0, 0.0, 0.0, -1.0, 0.0,

  // Top
  0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0,
  0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0,
  0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0,
  0.0, 1.0, 0.0,

  // Left
  -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0,
  0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0,
  0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0,
  -1.0, 0.0, 0.0, -1.0, 0.0, 0.0,

  // Right
  1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0,
  1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0,
  1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0,
  1.0, 0.0, 0.0,

  //bottom
  0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0,
  0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0,
  -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0,
  0.0, -1.0, 0.0, 0.0, -1.0, 0.0,

  //right
  0.5, 0.5, 0.0, 0.5, 0.5, 0.0, 0.5, 0.5, 0.0, 0.5, 0.5, 0.0, 0.5, 0.5, 0.0,
  0.5, 0.5, 0.0, 0.5, 0.5, 0.0, 0.5, 0.5, 0.0, 0.5, 0.5, 0.0, 0.5, 0.5, 0.0,
  0.5, 0.5, 0.0, 0.5, 0.5, 0.0,

  //front
  0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.5, 0.5,
  0.0, 0.5, 0.5, 0.0, 0.5, 0.5, 0.0, 0.5, 0.5, 0.0, 0.5, 0.5, 0.0, 0.5, 0.5,
  0.0, 0.5, 0.5, 0.0, 0.5, 0.5,

  //left
  -0.5, 0.5, 0.0, -0.5, 0.5, 0.0, -0.5, 0.5, 0.0, -0.5, 0.5, 0.0, -0.5, 0.5,
  0.0, -0.5, 0.5, 0.0, -0.5, 0.5, 0.0, -0.5, 0.5, 0.0, -0.5, 0.5, 0.0, -0.5,
  0.5, 0.0, -0.5, 0.5, 0.0, -0.5, 0.5, 0.0,

  //back
  0.0, 0.5, -0.5, 0.0, 0.5, -0.5, 0.0, 0.5, -0.5, 0.0, 0.5, -0.5, 0.0, 0.5,
  -0.5, 0.0, 0.5, -0.5, 0.0, 0.5, -0.5, 0.0, 0.5, -0.5, 0.0, 0.5, -0.5, 0.0,
  0.5, -0.5, 0.0, 0.5, -0.5, 0.0, 0.5, -0.5,

  //back
  0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0,
  -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0,
  0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0,
  0.0, 0.0, -1.0, 0.0, 0.0, -1.0,

  //front
  0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0,
  0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0,
  0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0,
  0.0, 0.0, 1.0,

  //bottom
  0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0,
  0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0,
  -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0,
  0.0, -1.0, 0.0, 0.0, -1.0, 0.0,

  // Top
  0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0,
  0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0,
  0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0,
  0.0, 1.0, 0.0,

  // Left
  -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0,
  0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0,
  0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0,
  -1.0, 0.0, 0.0, -1.0, 0.0, 0.0,
];

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

var cameraPosition = [0, 0, 1];
var view_matrix = createViewMatrix(cameraPosition, [0, 0, 0], [0, 1, 0]);

var proj_matrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]; // Default: Ortographic
var zoomValue = 1

// Menggambar Objek
function draw(model_matrix, start, end) {
  gl.uniformMatrix4fv(_Pmatrix, false, proj_matrix);
  gl.uniformMatrix4fv(_Vmatrix, false, view_matrix);
  gl.uniformMatrix4fv(_Mmatrix, false, model_matrix);

  
  console.log(shadingOn)
  // belum diberi shading
  if (shadingOn){
    shading(model_matrix, view_matrix);
  } else{
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
  });

  for (var i = 0; i < objects.length; i++) {
    draw(
      objects[i].modelMatrix,
      objects[i].offset,
      objects[i].end
    );
  }

  let animateCheckbox = document.getElementById("switch-animate");
  animateCheckbox.checked = true;
}

function resetButton() {
  objects.splice(0, 1); // menghapus objek dengan indeks ke-0
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT); // hapus tampilan layar
  setUpInitScene();
  resetValueObject();
}

// Function to redraw scene
function redrawScene() {
  // redraw the scene
  for (var i = 0; i < objects.length; i++) {
    draw(
      objects[i].modelMatrix,
      objects[i].offset,
      objects[i].end
    );
  }
}

// Update view_matrix
function moveViewX(x) {
  // "Pindahkan" setiap objek berlawanan arah di sumbu-x
  cameraPosition[0] = x;
  view_matrix = createViewMatrix(cameraPosition, [0, 0, 0], [0, 1, 0]);
  redrawScene();
}

function moveViewY(y) {
  // "Pindahkan" setiap objek berlawanan arah di sumbu-y
  cameraPosition[1] = y;
  view_matrix = createViewMatrix(cameraPosition, [0, 0, 0], [0, 1, 0]);
  redrawScene();
}

function moveViewZ(z) {
  // "Pindahkan" setiap objek berlawanan arah di sumbu-z
  cameraPosition[2] = z;
  view_matrix = createViewMatrix(cameraPosition, [0, 0, 0], [0, 1, 0]);
  redrawScene();
}

// Update projection type
function toOrthographic() {
  proj_matrix = [
    1, 0, 0, 0, 
    0, 1, 0, 0, 
    0, 0, 0, 0, 
    0, 0, 0, 1
  ];
  redrawScene();
}

function toPerspective() {
  function createPerspectiveMatrix(fov, aspect, near, far) {
    const f = 1.0 / Math.tan(fov / 2.0);
    const rangeInv = 1.0 / (near - far);
  
    return [
      f / aspect, 0, 0, 0,
      0, f, 0, 0,
      0, 0, (near + far) * rangeInv, -1,
      0, 0, near * far * rangeInv * 2, 0
    ];
  }

  // Assign some default values
  var fov = 45;
  var near = 0.1;
  var far = 100;
  var aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;

  proj_matrix = createPerspectiveMatrix(fov, aspect, near, far);

  redrawScene();
}

function toOblique() {
  function createObliqueProjectionMatrix(theta, d, k) {
    var matrix = [
      1, 0, -d * Math.cos(theta), 0,
      0, 1, -d * Math.sin(theta), 0,
      0, 0, 1, 0,
      0, 0, k, 1
    ]
    
    return matrix;
  }

  proj_matrix = createObliqueProjectionMatrix(Math.PI/4, 1, 1);
  console.dir(proj_matrix);

  redrawScene();
}

setUpBuffer();
setUpInitScene();