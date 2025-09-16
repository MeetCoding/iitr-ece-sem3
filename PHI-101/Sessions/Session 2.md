# Enhanced Study TOC for PHI-101 (Physics)

# 1.0 Foundational Mathematical Concepts

This section covers the essential vector calculus and coordinate system concepts required for all problems in the assignment. A strong grasp of these mathematical tools is critical.

## 1.1 Coordinate Systems & Vector Operations

**(Relevant for all Questions)**

- **Foundational Prerequisites:**
    
    - Basic algebra, trigonometry, and calculus (differentiation and integration).
        
- **Key Definitions:**
    
    - **Vector:** A quantity with both magnitude and direction.
        
    - **Scalar:** A quantity with only magnitude.
        
    - **Unit Vector:** A vector of length one that points in a specific direction (e.g., ax​,ar​,aρ​).
        
- **Core Principles:**
    
    - The choice of coordinate system (Cartesian, Cylindrical, Spherical) should be based on the symmetry of the charge distribution to simplify calculations.
        
        - **Cartesian (x,y,z):** Use for rectangular symmetries (cubes, planes).
            
        - **Cylindrical (ρ,ϕ,z):** Use for cylindrical symmetries (infinite lines, cylinders).
            
        - **Spherical (r,θ,ϕ):** Use for spherical symmetries (point charges, spheres, spherical shells).
            
- **Essential Formulae & Equations:**
    
    - **Differential Length:**
        
        - Cartesian: dl=dx ax​+dy ay​+dz az​
            
        - Cylindrical: dl=dρ aρ​+ρdϕ aϕ​+dz az​
            
        - Spherical: dl=dr ar​+rdθ aθ​+rsinθdϕ aϕ​
            
    - **Differential Volume:**
        
        - Cartesian: dv=dx dy dz
            
        - Cylindrical: dv=ρ dρ dϕ dz
            
        - Spherical: dv=r2sinθ dr dθ dϕ
            

## 1.2 The Del Operator (∇) and Vector Integrals

**(Relevant for all Questions)**

- **Foundational Prerequisites:**
    
    - Partial Differentiation, Integration, understanding of coordinate systems from 1.1.
        
- **Key Definitions:**
    
    - **Gradient (∇V):** A vector that points in the direction of the maximum rate of increase of a scalar field V, with a magnitude equal to that rate of increase.
        
    - **Divergence (∇⋅A):** A scalar measure of the outward flux of a vector field A from an infinitesimal volume around a point.
        
    - **Curl (∇×A):** A vector measure of the rotation or circulation of a vector field A at a point.
        
    - **Laplacian (∇2V):** The divergence of the gradient of a scalar field V.
        
    - **Line Integral (∫L​A⋅dl):** Integrates a vector field along a path.
        
    - **Surface Integral (∫S​A⋅dS):** Integrates a vector field over a surface (calculates flux).
        
    - **Volume Integral (∫v​ρv​dv):** Integrates a scalar field over a volume.
        
- **Essential Formulae & Equations:**
    
    - **Gradient:** E=−∇V
        
    - **Divergence (Cartesian):** ∇⋅A=∂x∂Ax​​+∂y∂Ay​​+∂z∂Az​​
        
    - **Divergence (Cylindrical):** ∇⋅A=ρ1​∂ρ∂(ρAρ​)​+ρ1​∂ϕ∂Aϕ​​+∂z∂Az​​
        
    - **Divergence (Spherical):** ∇⋅A=r21​∂r∂(r2Ar​)​+rsinθ1​∂θ∂(Aθ​sinθ)​+rsinθ1​∂ϕ∂Aϕ​​
        
    - **Curl (Cartesian):** ∇×A=(∂y∂Az​​−∂z∂Ay​​)ax​+(∂z∂Ax​​−∂x∂Az​​)ay​+(∂x∂Ay​​−∂y∂Ax​​)az​
        

---

# 2.0 Electrostatic Fields and Charge

**(Relevant for Q1, Q2, Q3, Q4, Q5, Q7, Q10)**

This section covers the fundamental concepts of electric charge and the fields they produce in a vacuum (free space).

## 2.1 Coulomb's Law and Electric Field Intensity (E)

- **Key Definitions:**
    
    - **Electric Field Intensity (E):** The force per unit charge experienced by a positive test charge placed in the field. Units: Volts per meter (V/m) or Newtons per Coulomb (N/C).
        
    - **Charge Density:** Describes how charge is distributed.
        
        - **Line Charge (λ or ρL​):** Charge per unit length (C/m).
            
        - **Surface Charge (σ or ρs​):** Charge per unit area (C/m²).
            
        - **Volume Charge (ρ or ρv​):** Charge per unit volume (C/m³).
            
- **Core Laws:**
    
    - **Coulomb's Law:** Describes the electrostatic force between two point charges. The force is proportional to the product of the charges and inversely proportional to the square of the distance between them.
        
    - **Principle of Superposition:** The total electric field at a point due to a collection of charges is the vector sum of the electric fields produced by each individual charge.
        
- **Essential Formulae & Equations:**
    
    - **Electric Field from a Point Charge:** E=4πϵ0​r2Q​ar​
        
        - Q: Source charge (Coulombs)
            
        - ϵ0​: Permittivity of free space (≈8.854×10−12 F/m)
            
        - r: Distance from the charge to the point
            
        - ar​: Unit vector pointing from the charge to the point
            
- **Problem-Solving Techniques:**
    
    - To find the total charge (Qenc​) from a density, you must integrate over the appropriate dimension:
        
        - Q=∫L​λ dl (for line charge)
            
        - Q=∫S​σ dS (for surface charge)
            
        - Q=∫v​ρ dv (for volume charge)
            

## 2.2 Electric Flux Density (D)

- **Key Definitions:**
    
    - **Electric Flux (Ψ):** A measure of the flow of the electric field through a given area.
        
    - **Electric Flux Density (D):** A vector field, also called electric displacement, that is related to the electric field and the medium's permittivity. In free space, it is independent of the material. Units: Coulombs per square meter (C/m²).
        
- **Essential Formulae & Equations:**
    
    - **Definition of Flux:** Ψ=∫S​D⋅dS
        
    - **Relationship to E-field (in free space):** D=ϵ0​E
        

---

# 3.0 Gauss's Law

**(Relevant for Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q10)**

Gauss's Law provides a powerful method for calculating the electric field of charge distributions with high symmetry.

- **Foundational Prerequisites:**
    
    - Understanding of E and D fields, charge densities, and surface/volume integrals.
        
- **Core Laws:**
    
    - **Gauss's Law:** The total electric flux passing through any closed surface (a "Gaussian surface") is equal to the total charge enclosed by that surface.
        
- **Essential Formulae & Equations:**
    
    - **Integral Form:** ∮S​D⋅dS=Qenc​=∫v​ρv​dv
        
        - The left side is the net electric flux through a closed surface S.
            
        - The right side is the total charge enclosed within that surface.
            
    - **Differential Form (Maxwell's First Equation):** ∇⋅D=ρv​
        
        - Relates the divergence of the flux density at a point to the volume charge density at that same point.
            
- **Core Theorems:**
    
    - **Divergence Theorem:** Relates the flux through a closed surface to the integral of the divergence over the volume enclosed. ∮S​D⋅dS=∫v​(∇⋅D)dv. This theorem proves that the integral and differential forms of Gauss's Law are equivalent.
        
- **Problem-Solving Technique: Applying Gauss's Law**
    
    1. **Identify Symmetry:** Determine if the charge distribution is spherical, cylindrical, or planar.
        
    2. **Choose a Gaussian Surface:** Construct a closed surface that matches the symmetry, such that the electric flux density D is constant and normal to the surface (or parallel, resulting in zero flux) everywhere on the surface.
        
    3. **Evaluate ∮D⋅dS:** Due to the chosen symmetry, D will be constant on the surface, so the integral simplifies to Ds​∮dS=Ds​×(Surface Area).
        
    4. **Calculate Qenc​:** Find the total charge inside your Gaussian surface by integrating the charge density (ρv​, ρs​, or ρL​) within the volume.
        
    5. **Solve for D:** Set the results from steps 3 and 4 equal: Ds​×(Area)=Qenc​. Solve for the magnitude Ds​.
        
    6. **Find E:** Use E=D/ϵ0​ (in free space).
        

---

# 4.0 Electric Potential and Work

**(Relevant for Q9, Q11, Q12, Q13, Q14, Q15, Q16)**

This section deals with the scalar potential field V and its relationship to the vector electric field E, energy, and work.

- **Foundational Prerequisites:**
    
    - Understanding of E-fields and line integrals.
        
- **Key Definitions:**
    
    - **Electric Potential (V):** The work done per unit charge in moving a positive test charge from a reference point (often infinity) to a specific point in an electric field. It's a scalar quantity. Units: Volts (V).
        
    - **Potential Difference (VAB​):** The work done in moving a unit charge from point A to point B. VAB​=VB​−VA​.
        
    - **Conservative Field:** An electric field is conservative (or irrotational) if the work done in moving a charge between two points is independent of the path taken.
        
- **Core Principles:**
    
    - For any static electric field, the curl is zero: ∇×E=0. This mathematically proves that the electrostatic field is conservative.
        
- **Essential Formulae & Equations:**
    
    - **Work Done:** W=−q∫AB​E⋅dl
        
        - W: Work done (Joules) to move charge q from point A to B.
            
    - **Potential Difference:** VAB​=−∫AB​E⋅dl
        
    - **Finding E from V:** E=−∇V (The electric field is the negative of the gradient of the potential).
        
    - **Finding V from E:** V=−∫E⋅dl+C
        
    - **Potential due to a Point Charge:** V=4πϵ0​rQ​
        
    - **Poisson's Equation:** ∇2V=−ϵρv​​
        
    - **Laplace's Equation (for charge-free regions):** ∇2V=0
        
- **Problem-Solving Techniques:**
    
    - **Path Independence:** For a conservative field (∇×E=0), the work done between two points is simply W=q(VA​−VB​). You don't need to integrate along the specific path. You can often choose a much simpler path (like one along coordinate axes) or calculate the potential at the start and end points.
        

---

# 5.0 Materials and Boundary Conditions

**(Relevant for Q9, Q17, Q18)**

This section covers how electric fields behave in different materials (dielectrics) and at the interface between them.

- **Key Definitions:**
    
    - **Dielectric:** An electrical insulator that can be polarized by an applied electric field.
        
    - **Relative Permittivity (ϵr​):** The factor by which the electric field is reduced inside a dielectric compared to a vacuum. ϵr​≥1. Also called the dielectric constant.
        
    - **Permittivity (ϵ):** A measure of how much a material resists the formation of an electric field. ϵ=ϵr​ϵ0​.
        
    - **Polarization (P):** The density of permanent or induced electric dipole moments in a dielectric material. P=χe​ϵ0​E.
        
    - **Energy Density (wE​):** The energy stored in the electric field per unit volume. Units: Joules per cubic meter (J/m³).
        
- **Core Principles: Boundary Conditions**
    
    - At the boundary between two different dielectric materials, the electric field components must satisfy specific conditions:
        
        - **Tangential E-field is continuous:** E1t​=E2t​
            
        - **Normal D-field is continuous (if no surface charge):** D1n​=D2n​
            
- **Essential Formulae & Equations:**
    
    - **D-field in a material:** D=ϵE=ϵr​ϵ0​E
        
    - **D, E, and P relationship:** D=ϵ0​E+P
        
    - **Energy Density:** wE​=21​D⋅E=21​ϵE2=2ϵD2​
        
- **Problem-Solving Technique: Applying Boundary Conditions**
    
    1. **Decompose Fields:** Break the field vector in region 1 (E1​ or D1​) into its normal and tangential components with respect to the boundary surface.
        
    2. **Apply Tangential Condition:** Use E1t​=E2t​ to find the tangential component of the field in region 2, E2t​.
        
    3. **Apply Normal Condition:** Use D1n​=D2n​ to find the normal component of the flux density in region 2, D2n​.
        
    4. **Calculate Other Fields:** From D2n​, find E2n​=D2n​/ϵ2​.
        
    5. **Reconstruct the Vector:** Combine the normal and tangential components to get the full field vector in region 2 (E2​ or D2​).