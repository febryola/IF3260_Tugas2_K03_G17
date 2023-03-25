function generateNormals(vertices) {
  /*
    Cara kerja:
      Menghitung normal dari setiap segiempat yang dibuat.
      Ambil 4 vertex pertama (12 elemen), misal A, B, C, D.
      Hitung (B - A) dan (C - B), hasil crossnya adalah normalnya.
  */
  /*
    0.16,-0.2,-0.16, 0,-0.2,0.16, 0,-0.2,0.2, 0.2,-0.2,-0.2,
    0.16,-0.2,-0.16, 0.2,-0.2,-0.2, -0.2,-0.2,-0.2, -0.16,-0.2,-0.16,
    -0.16,-0.2,-0.16, -0.2,-0.2,-0.2, 0,-0.2,0.2, 0,-0.2,0.16,
  */
  let normals = []
  for (let i = 0; i < vertices.length; i += 12) {
    let A = [vertices[i], vertices[i + 1], vertices[i + 2]]
    let B = [vertices[i + 3], vertices[i + 4], vertices[i + 5]]
    let C = [vertices[i + 6], vertices[i + 7], vertices[i + 8]]

    let P = subtract(B, A)
    let Q = subtract(C, B)

    let normal = normalize(cross(P, Q))

    normals = [...normals, ...normal, ...normal, ...normal, ...normal]
  }
  return normals
}