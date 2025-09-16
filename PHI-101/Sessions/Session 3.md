# Enhanced Study TOC for PHI-101 Assignment 5

## 1.0 Foundational Vector Calculus

_(Relevant for Q1, Q2, Q3, Q4, Q7)_

This section covers the mathematical language needed to describe fields. Your existing notes are a good foundation.

### 1.1 Coordinate Systems (Cartesian, Cylindrical, Spherical)

- **Key Definitions:**
    
    - **Base Vectors:** Mutually orthogonal unit vectors (ax​,ay​,az​ | aρ​,aϕ​,az​ | ar​,aθ​,aϕ​).
        
    - **Differential Elements:** Length (dl), area (dS), and volume (dV) in each system.
        
- **Foundational Prerequisites:** Basic 3D geometry and trigonometry.
    
- **Problem-Solving Technique:**
    
    - **Symmetry Analysis:** Choose the coordinate system that best matches the symmetry of the given field or source. For this assignment, you'll need Cylindrical for Q2, Q4b, Q4c and Spherical for Q4d.
        

### 1.2 Vector Differential Operators

- **Key Definitions:**
    
    - **Gradient (∇V):** A vector field representing the magnitude and direction of the maximum rate of increase of a scalar field V.
        
    - **Divergence (∇⋅A):** A scalar measure of the net outward flux of a vector field A from an infinitesimal volume. A non-zero divergence indicates a source or sink.
        
    - **Curl (∇×A):** A vector measure of the microscopic circulation of a vector field A. A non-zero curl indicates the field is not conservative.
        
    - **Laplacian (∇2):** A scalar operator that measures the "concentration" of a value relative to its surroundings. Can operate on scalars (∇2V) or vectors (∇2A).
        
- **Core Theorems/Laws/Principles:**
    
    - **Divergence (Gauss's) Theorem:** ∮S​A⋅dS=∫V​(∇⋅A)dV. Relates the flux through a closed surface to the divergence within the volume.
        
    - **Stokes' Theorem:** ∮L​A⋅dl=∫S​(∇×A)⋅dS. Relates the circulation around a closed loop to the curl through the open surface it bounds.
        
- **Essential Formulae & Equations:**
    
    - **Vector Identity:** ∇×(∇×A)=∇(∇⋅A)−∇2A. This identity is **critical** for deriving the wave equation in Q1.
        
    - You must be proficient with the formulae for Gradient, Divergence, and Curl in Cartesian, Cylindrical, and Spherical coordinates to solve Q2, Q3, and Q4.
        

---

## 2.0 Maxwell's Equations & Time-Varying Fields

_(Relevant for Q1, Q2, Q3, Q4, Q7)_

This is the core theoretical framework for all of electromagnetism and the most significant gap in your current notes. The assignment problems deal with dynamic fields, not static ones.

### 2.1 The Four Maxwell's Equations (Differential Form)

- **Foundational Prerequisites:** Understanding of vector differential operators (Section 1.2), electric fields (E), magnetic fields (B, H), electric displacement (D), charge density (ρv​), and current density (J).
    
- **Core Theorems/Laws/Principles:**
    
    - **Gauss's Law for E-Fields:** ∇⋅D=ρv​. Relates electric flux density to electric charge.
        
    - **Gauss's Law for B-Fields:** ∇⋅B=0. States that there are no magnetic monopoles.
        
    - **Faraday's Law of Induction:** ∇×E=−∂t∂B​. A changing magnetic field induces an electric field.
        
    - **Ampere-Maxwell Law:** ∇×H=J+∂t∂D​. A magnetic field is induced by a conduction current (J) or a changing electric field.
        
- **Key Definitions:**
    
    - **Displacement Current Density (Jd​):** The term Jd​=∂t∂D​. It is not a current of moving charges but a changing electric field that acts as a source for the magnetic field.
        
- **Essential Formulae & Equations:**
    
    - **Constitutive Relations:** D=ϵE and B=μH, where ϵ is permittivity and μ is permeability. In free space, ϵ=ϵ0​ and μ=μ0​.
        

### 2.2 The Continuity Equation

- **Core Theorems/Laws/Principles:**
    
    - **Equation of Continuity:** ∇⋅J=−∂t∂ρv​​. This is a statement of local charge conservation; the net current flowing out of a volume must equal the rate of decrease of charge within it.
        
- **Problem-Solving Technique (for Q3):**
    
    1. Calculate the divergence of the given current density, ∇⋅J.
        
    2. Set this equal to −∂t∂ρv​​.
        
    3. Integrate with respect to time t to find ρv​.
        
    4. Use the given boundary condition (e.g., ρv​(x,y,0,t)=0) to find the constant of integration.
        

---

## 3.0 Electromagnetic Wave Propagation

_(Relevant for Q1, Q2, Q5, Q6, Q7, Q8, Q9, Q10)_

This major topic is built upon Maxwell's equations and is the primary focus of your assignment.

### 3.1 The Wave Equation

- **Foundational Prerequisites:** Maxwell's Equations (Section 2.1), Vector Calculus (Section 1.2).
    
- **Problem-Solving Technique (Derivation for Q1):**
    
    1. Start with Faraday's Law: ∇×E=−∂t∂B​.
        
    2. Take the curl of both sides: ∇×(∇×E)=−∂t∂​(∇×B).
        
    3. Use the vector identity: ∇(∇⋅E)−∇2E=−∂t∂​(∇×B).
        
    4. Substitute the Ampere-Maxwell Law (∇×H=...) and Gauss's Law (∇⋅E=...) under **free space conditions** (ρv​=0,J=0).
        
    5. This simplifies to the **Helmholtz Wave Equation**: ∇2E=μ0​ϵ0​∂t2∂2E​.
        
    6. Identify the wave speed v2=1/(μ0​ϵ0​), which is equal to c2. A similar procedure yields the wave equation for B.
        

### 3.2 Uniform Plane Waves in Free Space

- **Key Definitions:**
    
    - **Uniform Plane Wave:** An EM wave where the electric and magnetic fields are uniform over any plane perpendicular to the direction of propagation.
        
    - **Transverse Electromagnetic (TEM) Wave:** Both E and B fields are perpendicular to the direction of propagation and to each other.
        
- **Essential Formulae & Equations:**
    
    - **Wave Speed (Free Space):** c=μ0​ϵ0​![](data:image/svg+xml;utf8,<svg%20xmlns="http://www.w3.org/2000/svg"%20width="400em"%20height="1.08em"%20viewBox="0%200%20400000%201080"%20preserveAspectRatio="xMinYMin%20slice"><path%20d="M95,702%0Ac-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14%0Ac0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54%0Ac44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10%0As173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429%0Ac69,-144,104.5,-217.7,106.5,-221%0Al0%20-0%0Ac5.3,-9.3,12,-14,20,-14%0AH400000v40H845.2724%0As-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7%0Ac-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z%0AM834%2080h400000v40h-400000z"></path></svg>)​1​≈3×108 m/s.
        
    - **Time-Harmonic Field Expression:** E(z,t)=E0​cos(ωt−kz+ϕ0​), where E0​ is the amplitude, ω is the angular frequency, k is the wave number, and ϕ0​ is the phase constant. The argument (ωt±kz) determines direction of propagation (−z for plus, +z for minus).
        
    - **Wave Parameters:**
        
        - Angular Frequency: ω=2πf, where f is frequency.
            
        - Wave Number: k=λ2π​, where λ is wavelength.
            
        - Relation: ω=vk. In free space, ω=ck.
            
    - **Intrinsic Impedance of Free Space:** η0​=ϵ0​μ0​​![](data:image/svg+xml;utf8,<svg%20xmlns="http://www.w3.org/2000/svg"%20width="400em"%20height="1.88em"%20viewBox="0%200%20400000%201944"%20preserveAspectRatio="xMinYMin%20slice"><path%20d="M983%2090%0Al0%20-0%0Ac4,-6.7,10,-10,18,-10%20H400000v40%0AH1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7%0As-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744%0Ac-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30%0Ac26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722%0Ac56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5%0Ac53.7,-170.3,84.5,-266.8,92.5,-289.5z%0AM1001%2080h400000v40h-400000z"></path></svg>)​≈120π≈377Ω.
        
    - **E-H Field Relation:** The amplitudes are related by ∣E∣=η0​∣H∣. The vectors are related by H=η0​1​(ak​×E), where ak​ is the unit vector in the direction of propagation.
        

### 3.3 Power and Intensity

- **Key Definitions:**
    
    - **Poynting Vector (S):** Represents the directional energy flux density (power per unit area) of an EM wave. Units: W/m².
        
    - **Intensity (I):** The time-average power per unit area, i.e., the average magnitude of the Poynting vector, ⟨S⟩.
        
- **Essential Formulae & Equations:**
    
    - **Poynting Vector:** S=E×H.
        
    - **Time-Average Intensity (Free Space):** I=⟨S⟩=2η0​E02​​=21​cϵ0​E02​. (Used in Q6, Q10).
        
    - **Root Mean Square (RMS) Value:** For a sinusoidal quantity X(t)=X0​cos(ωt), the RMS value is Xrms​=2![](data:image/svg+xml;utf8,<svg%20xmlns="http://www.w3.org/2000/svg"%20width="400em"%20height="1.08em"%20viewBox="0%200%20400000%201080"%20preserveAspectRatio="xMinYMin%20slice"><path%20d="M95,702%0Ac-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14%0Ac0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54%0Ac44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10%0As173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429%0Ac69,-144,104.5,-217.7,106.5,-221%0Al0%20-0%0Ac5.3,-9.3,12,-14,20,-14%0AH400000v40H845.2724%0As-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7%0Ac-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z%0AM834%2080h400000v40h-400000z"></path></svg>)​X0​​. (Used in Q6).
        

### 3.4 Polarization

- **Key Definitions:**
    
    - **Polarization:** The orientation of the electric field vector's oscillation as a function of time, observed at a fixed point in space.
        
- **Foundational Prerequisites:** Understanding of superposition and phasor representation of waves.
    
- **Problem-Solving Technique (for Q5):**
    
    1. Write the two E-field components, Ex​(z,t) and Ey​(z,t). Ensure they have the same argument (e.g., kz−ωt). You may need to use trigonometric identities like cos(A+π)=−cos(A).
        
    2. Identify the amplitudes E0x​ and E0y​.
        
    3. Identify the phase difference δ=ϕy​−ϕx​.
        
    4. Analyze the state:
        
        - **Linear Polarization:** If δ=0 or δ=±π. The E-field oscillates along a straight line.
            
        - **Circular Polarization:** If E0x​=E0y​ and δ=±2π​. The E-field vector traces a circle.
            
        - **Elliptical Polarization:** All other cases (different amplitudes, or δ is not 0,±π,±2π​). The E-field vector traces an ellipse.
            

---

## 4.0 EM Waves at Boundaries

_(Relevant for Q8, Q9)_

This section covers what happens when a wave transitions from one medium to another.

### 4.1 Wave Propagation in Lossless Dielectrics

- **Key Definitions:**
    
    - **Lossless Dielectric:** A material with σ=0 (zero conductivity), ϵ=ϵr​ϵ0​, and μ=μr​μ0​. For the media in Q8 & Q9, μr​=1.
        
- **Essential Formulae & Equations:**
    
    - **Wave Speed in Medium:** v=μϵ![](data:image/svg+xml;utf8,<svg%20xmlns="http://www.w3.org/2000/svg"%20width="400em"%20height="1.08em"%20viewBox="0%200%20400000%201080"%20preserveAspectRatio="xMinYMin%20slice"><path%20d="M95,702%0Ac-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14%0Ac0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54%0Ac44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10%0As173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429%0Ac69,-144,104.5,-217.7,106.5,-221%0Al0%20-0%0Ac5.3,-9.3,12,-14,20,-14%0AH400000v40H845.2724%0As-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7%0Ac-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z%0AM834%2080h400000v40h-400000z"></path></svg>)​1​=μr​ϵr​![](data:image/svg+xml;utf8,<svg%20xmlns="http://www.w3.org/2000/svg"%20width="400em"%20height="1.08em"%20viewBox="0%200%20400000%201080"%20preserveAspectRatio="xMinYMin%20slice"><path%20d="M95,702%0Ac-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14%0Ac0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54%0Ac44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10%0As173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429%0Ac69,-144,104.5,-217.7,106.5,-221%0Al0%20-0%0Ac5.3,-9.3,12,-14,20,-14%0AH400000v40H845.2724%0As-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7%0Ac-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z%0AM834%2080h400000v40h-400000z"></path></svg>)​c​.
        
    - **Wavelength in Medium:** λ=fv​=μr​ϵr​![](data:image/svg+xml;utf8,<svg%20xmlns="http://www.w3.org/2000/svg"%20width="400em"%20height="1.08em"%20viewBox="0%200%20400000%201080"%20preserveAspectRatio="xMinYMin%20slice"><path%20d="M95,702%0Ac-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14%0Ac0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54%0Ac44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10%0As173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429%0Ac69,-144,104.5,-217.7,106.5,-221%0Al0%20-0%0Ac5.3,-9.3,12,-14,20,-14%0AH400000v40H845.2724%0As-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7%0Ac-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z%0AM834%2080h400000v40h-400000z"></path></svg>)​λ0​​, where λ0​ is the free-space wavelength.
        
    - **Intrinsic Impedance of Medium:** η=ϵμ​![](data:image/svg+xml;utf8,<svg%20xmlns="http://www.w3.org/2000/svg"%20width="400em"%20height="1.28em"%20viewBox="0%200%20400000%201296"%20preserveAspectRatio="xMinYMin%20slice"><path%20d="M263,681c0.7,0,18,39.7,52,119%0Ac34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120%0Ac340,-704.7,510.7,-1060.3,512,-1067%0Al0%20-0%0Ac4.7,-7.3,11,-11,19,-11%0AH40000v40H1012.3%0As-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232%0Ac-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1%0As-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26%0Ac-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z%0AM1001%2080h400000v40h-400000z"></path></svg>)​=ϵr​![](data:image/svg+xml;utf8,<svg%20xmlns="http://www.w3.org/2000/svg"%20width="400em"%20height="1.08em"%20viewBox="0%200%20400000%201080"%20preserveAspectRatio="xMinYMin%20slice"><path%20d="M95,702%0Ac-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14%0Ac0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54%0Ac44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10%0As173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429%0Ac69,-144,104.5,-217.7,106.5,-221%0Al0%20-0%0Ac5.3,-9.3,12,-14,20,-14%0AH400000v40H845.2724%0As-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7%0Ac-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z%0AM834%2080h400000v40h-400000z"></path></svg>)​η0​​ (for non-magnetic media where μr​=1).
        

### 4.2 Normal Incidence at a Boundary

- **Foundational Prerequisites:** Understanding of wave propagation in different media (Section 4.1).
    
- **Key Definitions:**
    
    - **Incident Wave:** The original wave approaching the boundary.
        
    - **Reflected Wave:** The portion of the wave that bounces back from the boundary.
        
    - **Transmitted Wave:** The portion of the wave that passes through the boundary into the second medium.
        
- **Essential Formulae & Equations:**
    
    - **Reflection Coefficient (Γ):** The ratio of the reflected to incident E-field amplitudes. Γ=Ei0​Er0​​=η2​+η1​η2​−η1​​.
        
    - **Transmission Coefficient (τ):** The ratio of the transmitted to incident E-field amplitudes. τ=Ei0​Et0​​=η2​+η1​2η2​​.
        
    - **Relationship:** τ=1+Γ.
        
- **Problem-Solving Technique (for Q8, Q9):**
    
    1. Identify the properties of Medium 1 (μ1​,ϵ1​) and Medium 2 (μ2​,ϵ2​).
        
    2. Calculate the intrinsic impedances η1​ and η2​.
        
    3. Calculate the reflection coefficient Γ and transmission coefficient τ.
        
    4. Calculate the reflected E-field amplitude: Er0​=ΓEi0​.
        
    5. Calculate the transmitted E-field amplitude: Et0​=τEi0​.
        
    6. To find the change in wavelength, calculate λ1​=v1​/f and λ2​=v2​/f. Note that frequency f does not change across the boundary.

$$\mathbf{B} = \frac{\mu_0}{2}(\mathbf{J} \times \mathbf{r})$$If $\mathbf{J} = J\hat{z}$ and the position vector in the plane is $\mathbf{r} = x\hat{x} + y\hat{y}$, the cross product gives:$$\mathbf{B} = \frac{\mu_0 J}{2}(\hat{z} \times (x\hat{x} + y\hat{y})) = \frac{\mu_0 J}{2}(x\hat{y} - y\hat{x})$$