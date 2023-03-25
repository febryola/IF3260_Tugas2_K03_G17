var verticeKubus = [
    //back face
    -0.2, -0.2, -0.2, 0.2, -0.2, -0.2, 0.2, -0.16, -0.2, -0.2, -0.16, -0.2, -0.2,
    0.16, -0.2, 0.2, 0.16, -0.2, 0.2, 0.2, -0.2, -0.2, 0.2, -0.2, -0.2, -0.2, -0.2, -0.16, -0.2, -0.2, -0.16, 0.2, -0.2, -0.2, 0.2, -0.2, 0.16, -0.2, -0.2,
    0.2, -0.2, -0.2, 0.2, 0.2, -0.2, 0.16, 0.2, -0.2,

    //front face
    -0.2, -0.2, 0.2, 0.2, -0.2, 0.2, 0.2, -0.16, 0.2, -0.2, -0.16, 0.2, -0.2,
    0.16, 0.2, 0.2, 0.16, 0.2, 0.2, 0.2, 0.2, -0.2, 0.2, 0.2, -0.2, -0.2, 0.2, -0.16, -0.2, 0.2, -0.16, 0.2, 0.2, -0.2, 0.2, 0.2, 0.16, -0.2, 0.2, 0.2, -0.2,
    0.2, 0.2, 0.2, 0.2, 0.16, 0.2, 0.2,

    //bottom face
    -0.16, -0.2, 0.2, -0.16, -0.2, -0.2, -0.2, -0.2, -0.2, -0.2, -0.2, 0.2, 0.16, -0.2, 0.2, 0.2, -0.2, 0.2, 0.2, -0.2, -0.2, 0.16, -0.2, -0.2, -0.2, -0.2, 0.2,
    0.2, -0.2, 0.2, 0.2, -0.2, 0.16, -0.2, -0.2, 0.16, -0.2, -0.2, -0.2, 0.2, -0.2, -0.2, 0.2, -0.2, -0.16, -0.2, -0.2, -0.16,

    //top face
    -0.2, 0.2, 0.2, -0.16, 0.2, 0.2, -0.16, 0.2, -0.2, -0.2, 0.2, -0.2, 0.16, 0.2,
    0.2, 0.2, 0.2, 0.2, 0.2, 0.2, -0.2, 0.16, 0.2, -0.2, -0.2, 0.2, 0.2, 0.2, 0.2,
    0.2, 0.2, 0.2, 0.16, -0.2, 0.2, 0.16, -0.2, 0.2, -0.2, 0.2, 0.2, -0.2, 0.2,
    0.2, -0.16, -0.2, 0.2, -0.16,

    //left face
    -0.2, -0.2, 0.2, -0.2, -0.2, 0.16, -0.2, 0.2, 0.16, -0.2, 0.2, 0.2, -0.2, -0.2, -0.2, -0.2, -0.2, -0.16, -0.2, 0.2, -0.16, -0.2, 0.2, -0.2, -0.2, -0.2,
    0.2, -0.2, -0.2, -0.2, -0.2, -0.16, -0.2, -0.2, -0.16, 0.2, -0.2, 0.2, 0.2, -0.2, 0.16, 0.2, -0.2, 0.16, -0.2, -0.2, 0.2, -0.2,

    //right face
    0.2, -0.2, 0.2, 0.2, -0.2, 0.16, 0.2, 0.2, 0.16, 0.2, 0.2, 0.2, 0.2, -0.2, -0.2, 0.2, -0.2, -0.16, 0.2, 0.2, -0.16, 0.2, 0.2, -0.2, 0.2, -0.2, 0.2, 0.2, -0.2, -0.2, 0.2, -0.16, -0.2, 0.2, -0.16, 0.2, 0.2, 0.2, 0.2, 0.2, 0.16, 0.2,
    0.2, 0.16, -0.2, 0.2, 0.2, -0.2,
];

var limasSegiempatVertice = [
    //bottom face
    -0.2,-0.2,0.2, -0.2,-0.2,-0.2, -0.16,-0.2,-0.2, -0.16,-0.2,0.2,
    0.16,-0.2,0.2, 0.16,-0.2,-0.2, 0.2,-0.2,-0.2, 0.2,-0.2,0.2,
    -0.2,-0.2,0.2, -0.2,-0.2,0.16, 0.2,-0.2,0.16, 0.2,-0.2,0.2,
    -0.2,-0.2,-0.2, 0.2,-0.2,-0.2, 0.2,-0.2,-0.16, -0.2,-0.2,-0.16,
  
    //right face
    0.2,-0.2,0.2, 0.2,-0.2,0.16, 0,0.2,-0.02, 0,0.2,0.02,
    0.2,-0.2,-0.2, 0,0.2,-0.02, 0,0.2,0.02, 0.2,-0.2,-0.16,
    0.2,-0.2,0.2, 0.2,-0.2,-0.2, 0.16,-0.16,-0.16, 0.16,-0.16,0.16,
  
    //front face
    -0.2,-0.2,0.2, 0.2,-0.2,0.2, 0.16,-0.16,0.16, -0.16,-0.16,0.16,
    -0.2,-0.2,0.2, -0.16,-0.2,0.2, 0.02,0.2,0.02, 0,0.2,0.02,
    0.16,-0.2,0.2, 0.2,-0.2,0.2, 0.02,0.2,0.02, 0,0.2,0.02,
  
    //left face
    -0.2,-0.2,0.2, 0,0.2,0.02, 0,0.2,-0.02, -0.2,-0.2,0.16,
    -0.2,-0.2,-0.2, -0.2,-0.2,-0.16, 0,0.2,0.02, 0,0.2,-0.02,
    -0.2,-0.2,0.2, -0.16,-0.16,0.16, -0.16,-0.16,-0.16, -0.2,-0.2,-0.2,
  
    //back face
    -0.2,-0.2,-0.2, -0.16,-0.16,-0.16, 0.16,-0.16,-0.16, 0.2,-0.2,-0.2,
    -0.2,-0.2,-0.2, 0,0.2,0.02, 0.02,0.2,0.02, -0.16,-0.2,-0.2,
    0.16,-0.2,-0.2, 0,0.2,0.02, 0.02,0.2,0.02, 0.2,-0.2,-0.2,
];

var prismaSegitigaVertice = [
    /*
        Alas
            Inner vertices: 
                A: (0.16, -0.2, -0.16) untuk pojok kanan bawah
                B: (-0.16, -0.2, -0.16) untuk pojok kiri bawah
                C: (0, -0.2, 0.16) untuk pojok atas
            Outer vertices
                D: (0.2, -0.2, -0.2) untuk pojok kanan bawah
                E: (-0.2, -0.2, -0.2) untuk pojok kiri bawah
                F: (0, -0.2, 0.2) untuk pojok atas
        Segiempatnya:
            ACFD, ADEB, BEFC
    */
    0.16,-0.2,-0.16, 0.2,-0.2,-0.2, 0,-0.2,0.2, 0,-0.2,0.16,
    0.16,-0.2,-0.16, -0.16,-0.2,-0.16, -0.2,-0.2,-0.2, 0.2,-0.2,-0.2,
    -0.16,-0.2,-0.16, 0,-0.2,0.16, 0,-0.2,0.2, -0.2,-0.2,-0.2,
    /*
        Tutup:
            Sama seperti alas, hanya saja y = 0.2
    */
    0.16,0.2,-0.16, 0,0.2,0.16, 0,0.2,0.2, 0.2,0.2,-0.2,
    0.16,0.2,-0.16, 0.2,0.2,-0.2, -0.2,0.2,-0.2, -0.16,0.2,-0.16,
    -0.16,0.2,-0.16, -0.2,0.2,-0.2, 0,0.2,0.2, 0,0.2,0.16,
    /*
        Sisi #1: Menghubungkan sebelah 'kiri'
    */
    -0.2,-0.2,-0.2, -0.176,-0.16,-0.152, -0.016,-0.16,0.168, 0,-0.2,0.2,
    0,-0.2,0.2, -0.016,-0.16,0.168, -0.016,0.16,0.168, 0,0.2,0.2,
    0,0.2,0.2, -0.016,0.16,0.168, -0.176,0.16,-0.152, -0.2,0.2,-0.2,
    -0.2,0.2,-0.2, -0.176,0.16,-0.152, -0.176,-0.16,-0.152, -0.2,-0.2,-0.2,
    /*
        Sisi #2: Menghubungkan sebelah 'kanan'
    */
    0.2,-0.2,-0.2, 0.176,-0.16,-0.152, 0.016,-0.16,0.168, 0,-0.2,0.2,
    0.2,-0.2,-0.2, 0.2,0.2,-0.2, 0.176,0.16,-0.152, 0.176,-0.16,-0.152,
    0.2,0.2,-0.2, 0,0.2,0.2, 0.016,0.16,0.168, 0.176,0.16,-0.152,
    0,0.2,0.2, 0,-0.2,0.2, 0.016,-0.16,0.168, 0.016,0.16,0.168,
    /*
        Sisi #3: Menghubungkan sebelah 'depan'
    */
    -0.2,-0.2,-0.2, -0.16,-0.16,-0.2, 0.16,-0.16,-0.2, 0.2,-0.2,-0.2,
    0.2,-0.2,-0.2, 0.16,-0.16,-0.2, 0.16,0.16,-0.2, 0.2,0.2,-0.2,
    0.2,0.2,-0.2, 0.16,0.16,-0.2, -0.16,0.16,-0.2, -0.2,0.2,-0.2,
    -0.2,0.2,-0.2, -0.16,0.16,-0.2, -0.16,-0.16,-0.2, -0.2,-0.2,-0.2,
]

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

var normalKubus = [
    // Back
    0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0,
    0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0,
    0.0, 0.0, -1.0, 0.0, 0.0, -1.0,

    // Front
    0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0,
    0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0,
    0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0,
    0.0, 0.0, 1.0,

    // Bottom
    0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0,
    0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0,
    0.0, -1.0, 0.0, 0.0, -1.0, 0.0,

    // Top
    0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0,
    0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0,
    0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0,
    0.0, 1.0, 0.0,

    // Left
    -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0,
    0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0,
    0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0,

    // Right
    1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0,
    1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0,
    1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0,
    1.0, 0.0, 0.0,
];

vertexNormals = [].concat(normalKubus, generateNormals(limasSegiempatVertice), generateNormals(prismaSegitigaVertice))