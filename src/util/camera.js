var cameraPosition = [0, 0, 1];
var zoomFactor = 1

var view_matrix = createViewMatrix(cameraPosition, [0, 0, 0], [0, 1, 0], zoomFactor);
var proj_matrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]; // Default: Ortographic

// View matrix stuff
function createViewMatrix(cameraPosition, target, up, zoomFactor) {
  const zAxis = normalize(subtractVectors(cameraPosition, target));
  const xAxis = normalize(cross(up, zAxis));
  const yAxis = cross(zAxis, xAxis);

  return [
    xAxis[0] * zoomFactor, yAxis[0], zAxis[0], 0,
    xAxis[1], yAxis[1] * zoomFactor, zAxis[1], 0,
    xAxis[2], yAxis[2], zAxis[2] * zoomFactor, 0,
    -dot(xAxis, cameraPosition), -dot(yAxis, cameraPosition), -dot(zAxis, cameraPosition), 1
  ];
}

// Update view_matrix
function moveViewX(x) {
  // "Pindahkan" setiap objek berlawanan arah di sumbu-x
  cameraPosition[0] = x;
  view_matrix = createViewMatrix(cameraPosition, [0, 0, 0], [0, 1, 0], zoomFactor);
  redrawScene();
}

function moveViewY(y) {
  // "Pindahkan" setiap objek berlawanan arah di sumbu-y
  cameraPosition[1] = y;
  view_matrix = createViewMatrix(cameraPosition, [0, 0, 0], [0, 1, 0], zoomFactor);
  redrawScene();
}

function moveViewZ(z) {
  // "Pindahkan" setiap objek berlawanan arah di sumbu-z
  cameraPosition[2] = z;
  view_matrix = createViewMatrix(cameraPosition, [0, 0, 0], [0, 1, 0], zoomFactor);
  redrawScene();
}

function updateZoom(zoomDiff) {
  zoomFactor += zoomDiff;
  if (zoomFactor <= 0) {
    zoomFactor = 0.1
  }
  view_matrix = createViewMatrix(cameraPosition, [0, 0, 0], [0, 1, 0], zoomFactor);
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