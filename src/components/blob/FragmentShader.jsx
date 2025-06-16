const fragmentShader = `
uniform float u_intensity;
uniform float u_time;

varying vec2 vUv;
varying float vDisplacement;

void main() {
    float distort = 2.0 * vDisplacement * u_intensity * sin(vUv.y * 10.0 + u_time);

    // Compute grayscale base value
    float gray = (abs(vUv.x - 0.5) + abs(vUv.y - 0.5)) * 1.5 * (1.0 - distort);

    // Darken it by scaling down (e.g., 0.5 = 50% brightness)
    gray *= 0.8;

    vec3 color = vec3(gray); // darker monochrome color
    gl_FragColor = vec4(color, 1.0);
}
`;

export default fragmentShader;

