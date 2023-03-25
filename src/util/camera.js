// =========
// Constants
// =========
const defaultTargetPosition = [0, 0, 0];
const defaultUpDirection = [0, 1, 0];

// Clip space di [-1, 1]
const defaultWidth = 2;
const defaultHeight = 2;
const defaultDepth = 2;

const orthoMatrix = [
  1, 0, 0, 0,
  0, 1, 0, 0,
  0, 0, 0, 0,
  0, 0, 0, 1
];

// ===========
// View matrix
// ===========
let cameraPosition = [0, 0, 1];
let zoomLevel = 1;

function getViewMatrix(cameraPosition, targetPosition, upDirection, zoomLevel) {
  // Hitung orientasi kamera
  const zAxis = normalize(subtract(cameraPosition, targetPosition));
  const xAxis = normalize(cross(upDirection, zAxis));
  const yAxis = cross(zAxis, xAxis);

  return [
    xAxis[0] * zoomLevel, yAxis[0], zAxis[0], 0,
    xAxis[1], yAxis[1] * zoomLevel, zAxis[1], 0,
    xAxis[2], yAxis[2], zAxis[2] * zoomLevel, 0,
    -dot(xAxis, cameraPosition), -dot(yAxis, cameraPosition), -dot(zAxis, cameraPosition), 1
  ];
}

let view_matrix = getViewMatrix(cameraPosition, defaultTargetPosition, defaultUpDirection, zoomLevel);

// Update view_matrix
function moveViewX(x) {
  cameraPosition[0] = x;
  view_matrix = getViewMatrix(cameraPosition, defaultTargetPosition, defaultUpDirection, zoomLevel);
  redrawScene();
}

function moveViewY(y) {
  cameraPosition[1] = y;
  view_matrix = getViewMatrix(cameraPosition, defaultTargetPosition, defaultUpDirection, zoomLevel);
  redrawScene();
}

function moveViewZ(z) {
  cameraPosition[2] = z;
  view_matrix = getViewMatrix(cameraPosition, defaultTargetPosition, defaultUpDirection, zoomLevel);
  redrawScene();
}

function updateZoom(zoomDiff) {
  zoomLevel += zoomDiff;
  if (zoomLevel <= 0) {
    zoomLevel = 0.1
  }
  view_matrix = getViewMatrix(cameraPosition, defaultTargetPosition, defaultUpDirection, zoomLevel);
  redrawScene();
}

// =================
// Projection Matrix
// =================
function getOrthoMatrix(left, right, bottom, top, near, far) {
  const STMatrix = [
    2/(right - left), 0, 0, -(right + left)/(right - left),
    0, 2/(top - bottom), 0, -(top + bottom)/(top - bottom),
    0, 0, -2/(far - near), -(far + near)/(near - far),
    0, 0, 0, 1
  ];
  return STMatrix;
}

function getObliqueMatrix(left, right, bottom, top, near, far, theta, phi) {
  const ortMatrix = getOrthoMatrix(left, right, bottom, top, near, far);
  const shearMatrix = [
    1, 0, 0, 0,
    0, 1, 0, 0,
    -1 / Math.tan(theta), -1 / Math.tan(phi), 1, 0,
    0, 0, 0, 1 
  ];
  return multiply(ortMatrix, shearMatrix);
}

function getPerspectiveMatrix(fov, aspect, near, far) {
  const f = 1.0 / Math.tan(fov / 2.0);
  const rangeInv = 1.0 / (near - far);

  return [
    f / aspect, 0, 0, 0,
    0, f, 0, 0,
    0, 0, (near + far) * rangeInv, -1,
    0, 0, near * far * rangeInv * 2, 0
  ];
}

let proj_matrix = getOrthoMatrix(-defaultWidth/2, defaultWidth/2, -defaultHeight/2, defaultHeight/2, -2, 2);

// Update projection type
function toOrthographic() {
  const left = -defaultWidth/2;
  const right = defaultWidth/2;
  const bottom = -defaultHeight/2;
  const top = defaultHeight/2;

  const near = -2;
  const far = 2;

  proj_matrix = getOrthoMatrix(left, right, bottom, top, near, far);

  redrawScene();
}

function toPerspective() {
  // Assign some default values
  var fov = 45;
  var near = 0.1;
  var far = 1000;
  var aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;

  proj_matrix = getPerspectiveMatrix(fov, aspect, near, far);

  redrawScene();
}

function toOblique() {
  const left = -defaultWidth/2;
  const right = defaultWidth/2;
  const bottom = -defaultHeight/2;
  const top = defaultHeight/2;

  const near = -2;
  const far = 2;

  proj_matrix = getObliqueMatrix(left, right, bottom, top, near, far, 64 / 180 * Math.PI, 64 / 180 * Math.PI);

  redrawScene();
}