/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * test_dalek_scalars vectors were generated with the following code in curve25519-dalek source:
 *
 * let mut rng = OsRng;
 * for i in 0..5 {
 *   let a = Scalar::random(&mut rng);
 *   let b = Scalar::random(&mut rng);
 *   let a_add_b = a + b;
 *   let a_sub_b = a - b;
 *   let a_mul_b = a * b;
 *   let a_inv = a.invert();
 *   let b_inv = b.invert();
 *   let a_neg = -a;
 *   let b_neg = -b;
 *   
 *   print!("[\n  {:?},\n  {:?},\n  {:?},\n  {:?},\n  {:?},\n  {:?},\n  {:?},\n  {:?},\n  {:?}\n],\n",
 *        &a.to_bytes(),
 *        &b.to_bytes(),
 *        &a_add_b.to_bytes(),
 *        &a_sub_b.to_bytes(),
 *        &a_mul_b.to_bytes(),
 *        &a_inv.to_bytes(),
 *        &b_inv.to_bytes(),
 *        &a_neg.to_bytes(),
 *        &b_neg.to_bytes(),
 *       );
 * 
 * }        
 * 
 * [0]: a
 * [1]: b
 * [2]: a + b
 * [3]: a - b
 * [4]: a * b
 * [5]: 1/a
 * [6]: 1/b
 * [7]: -a
 * [8]: -b
 */
let test_dalek_scalars = [
  [
    [161, 1, 198, 57, 246, 95, 218, 191, 83, 140, 156, 107, 69, 82, 195, 25, 24, 79, 104, 125, 48, 33, 35, 107, 181, 26, 249, 235, 151, 232, 223, 14],
    [57, 199, 24, 93, 76, 161, 234, 137, 62, 7, 166, 8, 123, 43, 133, 126, 65, 69, 35, 1, 147, 37, 14, 13, 109, 239, 203, 150, 0, 116, 50, 14],
    [237, 244, 232, 57, 40, 158, 178, 241, 187, 246, 74, 209, 225, 131, 105, 131, 89, 148, 139, 126, 195, 70, 49, 120, 34, 10, 197, 130, 152, 92, 18, 13],
    [104, 58, 173, 220, 169, 190, 239, 53, 21, 133, 246, 98, 202, 38, 62, 155, 214, 9, 69, 124, 157, 251, 20, 94, 72, 43, 45, 85, 151, 116, 173, 0],
    [164, 163, 123, 248, 91, 244, 234, 97, 179, 130, 106, 120, 186, 255, 228, 83, 70, 83, 62, 188, 67, 202, 131, 71, 93, 220, 93, 169, 175, 80, 64, 13],
    [107, 91, 254, 155, 25, 81, 169, 190, 178, 26, 166, 187, 75, 254, 78, 189, 28, 184, 143, 21, 252, 43, 130, 46, 148, 10, 226, 247, 232, 3, 224, 5],
    [208, 201, 9, 45, 8, 112, 176, 2, 125, 102, 152, 180, 199, 22, 40, 228, 224, 202, 33, 204, 16, 24, 194, 149, 239, 39, 131, 23, 129, 90, 10, 8],
    [76, 210, 47, 35, 36, 3, 56, 152, 130, 16, 91, 55, 153, 167, 27, 251, 231, 176, 151, 130, 207, 222, 220, 148, 74, 229, 6, 20, 104, 23, 32, 1],
    [180, 12, 221, 255, 205, 193, 39, 206, 151, 149, 81, 154, 99, 206, 89, 150, 190, 186, 220, 254, 108, 218, 241, 242, 146, 16, 52, 105, 255, 139, 205, 1]
  ],
  [
    [205, 214, 177, 166, 52, 222, 183, 201, 104, 164, 192, 225, 75, 123, 35, 101, 212, 30, 177, 18, 97, 202, 133, 12, 239, 38, 69, 91, 16, 104, 14, 10],
    [101, 67, 119, 212, 226, 148, 142, 121, 194, 229, 106, 224, 204, 107, 116, 201, 254, 120, 166, 178, 83, 247, 64, 56, 65, 125, 149, 115, 153, 142, 115, 3],
    [50, 26, 41, 123, 23, 115, 70, 67, 43, 138, 43, 194, 24, 231, 151, 46, 211, 151, 87, 197, 180, 193, 198, 68, 48, 164, 218, 206, 169, 246, 129, 13],
    [104, 147, 58, 210, 81, 73, 41, 80, 166, 190, 85, 1, 127, 15, 175, 155, 213, 165, 10, 96, 13, 211, 68, 212, 173, 169, 175, 231, 118, 217, 154, 6],
    [210, 43, 104, 74, 63, 131, 100, 216, 216, 119, 110, 205, 196, 103, 15, 140, 191, 145, 128, 122, 89, 45, 95, 16, 166, 234, 237, 13, 198, 197, 187, 11],
    [159, 175, 47, 216, 250, 54, 129, 6, 253, 233, 15, 192, 207, 39, 50, 77, 182, 78, 21, 190, 71, 239, 127, 113, 37, 194, 115, 237, 131, 16, 119, 2],
    [24, 42, 76, 73, 126, 40, 170, 87, 92, 20, 134, 15, 122, 155, 172, 76, 247, 236, 11, 180, 43, 17, 245, 230, 51, 237, 142, 89, 60, 89, 251, 7],
    [32, 253, 67, 182, 229, 132, 90, 142, 109, 248, 54, 193, 146, 126, 187, 175, 43, 225, 78, 237, 158, 53, 122, 243, 16, 217, 186, 164, 239, 151, 241, 5],
    [136, 144, 126, 136, 55, 206, 131, 222, 19, 183, 140, 194, 17, 142, 106, 75, 1, 135, 89, 77, 172, 8, 191, 199, 190, 130, 106, 140, 102, 113, 140, 12]
  ],
  [
    [9, 92, 197, 204, 143, 47, 77, 243, 198, 82, 49, 216, 84, 181, 254, 127, 117, 78, 199, 29, 17, 164, 174, 150, 172, 69, 224, 3, 115, 229, 83, 14],
    [65, 115, 116, 81, 108, 100, 173, 78, 102, 66, 147, 109, 59, 172, 228, 100, 115, 7, 82, 103, 127, 253, 228, 232, 36, 66, 113, 58, 223, 230, 223, 15],
    [93, 251, 67, 193, 225, 48, 232, 233, 86, 248, 204, 162, 177, 103, 4, 208, 232, 85, 25, 133, 144, 161, 147, 127, 209, 135, 81, 62, 82, 204, 51, 14],
    [181, 188, 70, 216, 61, 46, 178, 252, 54, 173, 149, 13, 248, 2, 249, 47, 2, 71, 117, 182, 145, 166, 201, 173, 135, 3, 111, 201, 147, 254, 115, 14],
    [137, 200, 241, 12, 61, 204, 76, 247, 163, 132, 82, 14, 83, 116, 8, 251, 21, 245, 139, 246, 58, 237, 160, 165, 232, 121, 50, 180, 12, 182, 80, 5],
    [167, 34, 180, 223, 186, 246, 134, 164, 138, 252, 148, 119, 208, 21, 207, 251, 29, 232, 84, 172, 116, 109, 252, 69, 39, 167, 120, 9, 201, 96, 244, 9],
    [109, 237, 135, 164, 111, 79, 246, 126, 129, 90, 132, 202, 53, 189, 192, 50, 2, 74, 145, 50, 17, 116, 252, 144, 149, 237, 86, 118, 136, 114, 80, 3],
    [228, 119, 48, 144, 138, 51, 197, 100, 15, 74, 198, 202, 137, 68, 224, 148, 138, 177, 56, 226, 238, 91, 81, 105, 83, 186, 31, 252, 140, 26, 172, 1],
    [172, 96, 129, 11, 174, 254, 100, 9, 112, 90, 100, 53, 163, 77, 250, 175, 140, 248, 173, 152, 128, 2, 27, 23, 219, 189, 142, 197, 32, 25, 32, 0]
  ],
  [
    [107, 54, 103, 115, 131, 114, 172, 151, 219, 114, 143, 245, 154, 35, 27, 249, 124, 49, 67, 57, 141, 18, 228, 204, 23, 55, 24, 254, 234, 144, 194, 6],
    [100, 113, 142, 165, 46, 172, 112, 70, 205, 134, 59, 182, 169, 237, 166, 196, 153, 88, 196, 199, 62, 172, 69, 102, 237, 178, 202, 51, 191, 110, 227, 7],
    [207, 167, 245, 24, 178, 30, 29, 222, 168, 249, 202, 171, 68, 17, 194, 189, 22, 138, 7, 1, 204, 190, 41, 51, 5, 234, 226, 49, 170, 255, 165, 14],
    [244, 152, 206, 42, 111, 41, 78, 169, 228, 136, 75, 226, 207, 47, 83, 73, 227, 216, 126, 113, 78, 102, 158, 102, 42, 132, 77, 202, 43, 34, 223, 14],
    [224, 162, 158, 153, 142, 175, 11, 22, 121, 100, 92, 156, 71, 47, 223, 142, 210, 117, 170, 95, 141, 72, 168, 112, 196, 245, 253, 81, 3, 157, 169, 13],
    [13, 213, 19, 143, 93, 83, 143, 184, 139, 144, 22, 148, 209, 29, 19, 239, 14, 95, 48, 105, 4, 204, 114, 152, 19, 250, 184, 244, 122, 155, 105, 3],
    [47, 37, 243, 154, 182, 107, 127, 228, 187, 104, 190, 187, 150, 192, 210, 77, 128, 134, 197, 159, 117, 95, 86, 3, 160, 57, 221, 239, 37, 226, 105, 11],
    [130, 157, 142, 233, 150, 240, 101, 192, 250, 41, 104, 173, 67, 214, 195, 27, 131, 206, 188, 198, 114, 237, 27, 51, 232, 200, 231, 1, 21, 111, 61, 9],
    [137, 98, 103, 183, 235, 182, 161, 17, 9, 22, 188, 236, 52, 12, 56, 80, 102, 167, 59, 56, 193, 83, 186, 153, 18, 77, 53, 204, 64, 145, 28, 8]
  ],
  [
    [10, 107, 120, 66, 203, 30, 90, 132, 132, 165, 160, 64, 39, 170, 71, 248, 146, 56, 211, 155, 246, 200, 139, 232, 75, 90, 86, 197, 198, 122, 8, 15],
    [75, 199, 155, 159, 25, 142, 111, 67, 177, 142, 145, 119, 113, 119, 186, 207, 153, 200, 61, 111, 69, 148, 40, 188, 13, 90, 94, 28, 56, 212, 244, 7],
    [104, 94, 30, 133, 202, 73, 183, 111, 95, 151, 58, 21, 186, 39, 35, 179, 44, 1, 17, 11, 60, 93, 180, 164, 89, 180, 180, 225, 254, 78, 253, 6],
    [191, 163, 220, 162, 177, 144, 234, 64, 211, 22, 15, 201, 181, 50, 141, 40, 249, 111, 149, 44, 177, 52, 99, 44, 62, 0, 248, 168, 142, 166, 19, 7],
    [236, 73, 193, 170, 20, 52, 134, 160, 148, 98, 220, 8, 167, 96, 76, 185, 55, 110, 210, 101, 124, 134, 243, 238, 218, 234, 80, 94, 145, 13, 32, 8],
    [196, 175, 43, 35, 9, 109, 32, 94, 224, 231, 80, 47, 255, 90, 189, 143, 128, 2, 248, 8, 159, 200, 79, 10, 87, 144, 200, 30, 215, 69, 205, 12],
    [157, 10, 170, 92, 209, 173, 148, 174, 119, 190, 182, 148, 164, 18, 17, 159, 43, 22, 242, 3, 251, 206, 94, 221, 21, 214, 57, 40, 232, 231, 203, 6],
    [227, 104, 125, 26, 79, 68, 184, 211, 81, 247, 86, 98, 183, 79, 151, 28, 109, 199, 44, 100, 9, 55, 116, 23, 180, 165, 169, 58, 57, 133, 247, 0],
    [162, 12, 90, 189, 0, 213, 162, 20, 37, 14, 102, 43, 109, 130, 36, 69, 102, 55, 194, 144, 186, 107, 215, 67, 242, 165, 161, 227, 199, 43, 11, 8]
  ]
];

export default test_dalek_scalars;
