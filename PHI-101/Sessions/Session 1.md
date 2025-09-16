## Prompt:
```text
# ROLE AND GOAL

You are an expert academic tutor and curriculum designer. Your goal is to analyze a student's assignment and their current table of contents (TOC) for a subject. Based on this analysis, you will create a comprehensive and updated Table of Contents that functions as a complete study guide. This new TOC must meticulously detail every concept, skill, and piece of information required to successfully and thoroughly complete the assignment.

# CONTEXT

I am a student preparing for an assignment. I have a basic table of contents, but I am not sure if it covers everything I need to know. I need you to bridge the gap between my current knowledge outline and the knowledge required by the assignment problems.

# TASK

Your task is to perform a deep analysis of the provided assignment and the current TOC. Then, generate a new, "Enhanced Study TOC".

## CRITERIA FOR THE ENHANCED STUDY TOC:

1.  **Hierarchical Structure:** Organize the output in a clear, logical, nested structure. Use headings for major topics and sub-headings for smaller concepts.

2.  **Incorporate Existing TOC:** Integrate the topics from my original TOC, placing them in the correct logical order and expanding upon them.

3.  **Identify and Add Missing Concepts:** From the assignment, identify all required topics, sub-topics, and concepts that are missing from my original TOC and add them.

4.  **Detail Essential Components:** For each relevant topic/sub-topic, you MUST explicitly list the following:

    * **Key Definitions:** Crucial terminology and their precise definitions.

    * **Foundational Prerequisites:** What concepts must be understood *before* tackling this topic?

    * **Core Theorems/Laws/Principles:** List all relevant theorems, laws, or principles. State the name and a concise one-sentence summary of its purpose (e.g., "Pythagorean Theorem: Relates the sides of a right-angled triangle.").

    * **Essential Formulae & Equations:** List all necessary formulae. For each formula, briefly define every variable (e.g., for $E=mc^2$, define E, m, and c).

    * **Problem-Solving Techniques:** Mention specific methods or step-by-step procedures required to solve the types of problems in the assignment (e.g., "Integration by Parts," "Free Body Diagram Analysis," "Kirchhoff's Voltage Law Application").

5.  **Assignment Mapping:** Crucially, for each major section in your new TOC, explicitly reference which question(s) from the assignment it directly applies to. For example: `(Relevant for Q1, Q3b)`.

6.  **Formatting:** Use Markdown for clear formatting. Use `#` for main topics, `##` for sub-topics, `###` for finer details, and bullet points (`*` or `-`) for lists of formulae, theorems, etc. Use LaTeX for all mathematical notation by enclosing it in '$' delimiters.

# INPUTS

Here are my assignment and my current table of contents.

Assignment file attached

---

[START CURRENT TOC]

---

  

  

  

---

[END CURRENT TOC]

---

# OUTPUT FORMAT

Produce only the "Enhanced Study TOC". Do not add any conversational filler before or after the output. The output should be a single, well-structured document that I can use directly as my study plan.

**Example Structure:**

# 1.0 Foundational Prerequisites

## 1.1 Topic A (e.g., Basic Algebra)

* **Key Concepts:** Variables, Equations

* **Essential Formulae:** $ax^2 + bx + c = 0$

# 2.0 Core Topic: [Name of the Main Topic] (Relevant for Q1, Q2)

## 2.1 Sub-Topic: [Name of Sub-Topic]

* **Key Definitions:** [Definition 1], [Definition 2]

* **Relevant Theorems:**

    * [Theorem Name 1]: [Brief Description]

* **Essential Formulae:**

    * [Formula 1]: $y = mx + c$, where $y$ is the vertical axis value, $m$ is the slope...

* **Problem-Solving Technique:**

    * [Technique Name]: [Brief step-by-step description]

---
```

## TOC Post Assignment 1

```text
# Enhanced Study TOC for PHI-101 Assignment 1

# 1.0 Foundational Mathematical Concepts

This section covers the essential prerequisites you must master before tackling the specific topics in the assignment.

## 1.1 Vector Algebra

- **Key Definitions:**
    
    - **Scalar:** A quantity with only magnitude (e.g., mass, temperature).
        
    - **Vector:** A quantity with both magnitude and direction (e.g., force, velocity).
        
    - **Position Vector:** A vector from the origin to a point in space.
        
    - **Unit Vector (aV​):** A vector with a magnitude of 1, used to indicate direction. aV​=∣V∣V​.
        
- **Foundational Prerequisites:**
    
    - Basic arithmetic and algebra.
        
- **Essential Formulae & Equations:**
    
    - **Vector Magnitude:** For A=Ax​ax​+Ay​ay​+Az​az​, its magnitude is ∣A∣=Ax2​+Ay2​+Az2​![](data:image/svg+xml;utf8,<svg%20xmlns="http://www.w3.org/2000/svg"%20width="400em"%20height="1.88em"%20viewBox="0%200%20400000%201944"%20preserveAspectRatio="xMinYMin%20slice"><path%20d="M983%2090%0Al0%20-0%0Ac4,-6.7,10,-10,18,-10%20H400000v40%0AH1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7%0As-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744%0Ac-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30%0Ac26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722%0Ac56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5%0Ac53.7,-170.3,84.5,-266.8,92.5,-289.5z%0AM1001%2080h400000v40h-400000z"></path></svg>)​.
        
    - **Dot Product (Scalar Product):** A⋅B=∣A∣∣B∣cosθAB​=Ax​Bx​+Ay​By​+Az​Bz​.
        
    - **Cross Product (Vector Product):** A×B=∣A∣∣B∣sinθAB​⋅an​, where an​ is a unit vector normal to the plane containing A and B. It is calculated using the determinant:
        
        A×B=![](data:image/svg+xml;utf8,<svg%20xmlns="http://www.w3.org/2000/svg"%20width="0.333em"%20height="3.600em"%20viewBox="0%200%20333%203600"><path%20d="M145%2015%20v585%20v2400%20v585%20c2.667,10,9.667,15,21,15%0Ac10,0,16.667,-5,20,-15%20v-585%20v-2400%20v-585%20c-2.667,-10,-9.667,-15,-21,-15%0Ac-10,0,-16.667,5,-20,15z%20M188%2015%20H145%20v585%20v2400%20v585%20h43z"></path></svg>)​ax​Ax​Bx​​ay​Ay​By​​az​Az​Bz​​![](data:image/svg+xml;utf8,<svg%20xmlns="http://www.w3.org/2000/svg"%20width="0.333em"%20height="3.600em"%20viewBox="0%200%20333%203600"><path%20d="M145%2015%20v585%20v2400%20v585%20c2.667,10,9.667,15,21,15%0Ac10,0,16.667,-5,20,-15%20v-585%20v-2400%20v-585%20c-2.667,-10,-9.667,-15,-21,-15%0Ac-10,0,-16.667,5,-20,15z%20M188%2015%20H145%20v585%20v2400%20v585%20h43z"></path></svg>)​
        
- **Problem-Solving Techniques:**
    
    - **Finding Angle Between Vectors:** Use the dot product formula: θAB​=arccos(∣A∣∣B∣A⋅B​).
        
    - **Finding a Vector Normal to Two Vectors:** Use the cross product A×B.
        

## 1.2 Trigonometry

- **Key Definitions:**
    
    - **SOH CAH TOA:** Basic definitions for sine, cosine, and tangent in a right-angled triangle.
        
    - **Radians and Degrees:** Units for measuring angles.
        
- **Essential Formulae & Equations:**
    
    - **Pythagorean Identity:** sin2θ+cos2θ=1.
        
    - **Conversion:** 180∘=π radians.
        
    - **Inverse Functions:** arctan(y/x) (or `atan2(y,x)`) to find an angle from coordinates.
        

## 1.3 Basic Calculus

- **Key Definitions:**
    
    - **Definite Integral:** The area under a curve between two points, representing accumulation.
        
- **Problem-Solving Techniques:**
    
    - **Integration for Length/Area/Volume:** Set up and evaluate a definite integral with the correct limits based on the problem's geometry.
        

---

# 2.0 Coordinate Systems: The Building Blocks (Relevant for Q1-Q14)

This section details the three coordinate systems used in the assignment. Understanding the variables, unit vectors, and geometry of each is crucial.

## 2.1 Cartesian (Rectangular) System

- **Key Definitions:**
    
    - **Coordinates:** (x,y,z). They represent distances along three mutually perpendicular axes.
        
    - **Unit Vectors:** (ax​,ay​,az​). These are constant and point along their respective axes.
        
    - **Surfaces:** x=c is a plane, y=c is a plane, z=c is a plane.
        

## 2.2 Cylindrical System

- **Key Definitions:**
    
    - **Coordinates:** (ρ,ϕ,z).
        
        - ρ: Radial distance from the z-axis (0≤ρ<∞).
            
        - ϕ: Azimuthal angle from the x-axis in the x-y plane (0≤ϕ<2π).
            
        - z: Vertical height, same as in the Cartesian system (−∞<z<∞).
            
    - **Unit Vectors:** (aρ​,aϕ​,az​). Note that the directions of aρ​ and aϕ​ change with the angle ϕ.
        
    - **Surfaces:** ρ=c is a cylinder, ϕ=c is a half-plane, z=c is a plane.
        

## 2.3 Spherical System

- **Key Definitions:**
    
    - **Coordinates:** (r,θ,ϕ).
        
        - r: Radial distance from the origin (0≤r<∞).
            
        - θ: Polar (or co-latitude) angle from the positive z-axis (0≤θ≤π).
            
        - ϕ: Azimuthal angle, same as in the cylindrical system (0≤ϕ<2π).
            
    - **Unit Vectors:** (ar​,aθ​,aϕ​). The directions of all three unit vectors change depending on the point's location.
        
    - **Surfaces:** r=c is a sphere, θ=c is a cone, ϕ=c is a half-plane.
        

---

# 3.0 Coordinate System Transformations (Relevant for Q1, Q2, Q3, Q4, Q5, Q6)

This is the core skill for the first half of the assignment: converting points and vectors from one system to another.

## 3.1 Point Transformation

- **Foundational Prerequisites:** Section 1.2 (Trigonometry), Section 2.0 (Coordinate Systems).
    
- **Essential Formulae & Equations:**
    
    - **Cartesian to Cylindrical:**
        
        - ρ=x2+y2![](data:image/svg+xml;utf8,<svg%20xmlns="http://www.w3.org/2000/svg"%20width="400em"%20height="1.28em"%20viewBox="0%200%20400000%201296"%20preserveAspectRatio="xMinYMin%20slice"><path%20d="M263,681c0.7,0,18,39.7,52,119%0Ac34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120%0Ac340,-704.7,510.7,-1060.3,512,-1067%0Al0%20-0%0Ac4.7,-7.3,11,-11,19,-11%0AH40000v40H1012.3%0As-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232%0Ac-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1%0As-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26%0Ac-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z%0AM1001%2080h400000v40h-400000z"></path></svg>)​
            
        - ϕ=arctan(y/x) (use `atan2` for correct quadrant)
            
        - z=z
            
    - **Cylindrical to Cartesian:**
        
        - x=ρcosϕ
            
        - y=ρsinϕ
            
        - z=z
            
    - **Cartesian to Spherical:**
        
        - r=x2+y2+z2![](data:image/svg+xml;utf8,<svg%20xmlns="http://www.w3.org/2000/svg"%20width="400em"%20height="1.28em"%20viewBox="0%200%20400000%201296"%20preserveAspectRatio="xMinYMin%20slice"><path%20d="M263,681c0.7,0,18,39.7,52,119%0Ac34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120%0Ac340,-704.7,510.7,-1060.3,512,-1067%0Al0%20-0%0Ac4.7,-7.3,11,-11,19,-11%0AH40000v40H1012.3%0As-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232%0Ac-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1%0As-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26%0Ac-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z%0AM1001%2080h400000v40h-400000z"></path></svg>)​
            
        - θ=arccos(z/r)
            
        - ϕ=arctan(y/x)
            
    - **Spherical to Cartesian:**
        
        - x=rsinθcosϕ
            
        - y=rsinθsinϕ
            
        - z=rcosθ
            
- **Problem-Solving Technique:**
    
    - For a given point, identify the "known" variables and use the appropriate set of formulas to solve for the "unknown" variables. Pay close attention to the domains of the angles (θ and ϕ) and the signs of x and y to determine the correct quadrant for ϕ.
        

## 3.2 Vector Transformation

- **Foundational Prerequisites:** Section 3.1 (Point Transformation).
    
- **Core Principles:** A vector transformation involves two steps: (1) substituting the coordinate variables (e.g., replacing x with ρcosϕ) and (2) transforming the unit vectors (e.g., replacing ax​ with its equivalent in cylindrical coordinates).
    
- **Essential Formulae & Equations:**
    
    - Unit Vector Dot Products (Transformation Table): This table is essential.
        
        | ⋅ | ax​ | ay​ | az​ |
        
        | :---: | :---: | :---: | :---: |
        
        | aρ​ | cosϕ | sinϕ | 0 |
        
        | aϕ​ | −sinϕ | cosϕ | 0 |
        
        | az​ | 0 | 0 | 1 |
        

|⋅|ax​|ay​|az​|
|---|---|---|---|
|ar​|sinθcosϕ|sinθsinϕ|cosθ|
|aθ​|cosθcosϕ|cosθsinϕ|−sinθ|
|aϕ​|−sinϕ|cosϕ|0|

- **Problem-Solving Technique:**
    
    - **Cartesian → Cylindrical/Spherical:**
        
        1. Start with the vector in Cartesian coordinates, e.g., F=Fx​ax​+Fy​ay​+Fz​az​.
            
        2. Substitute all Cartesian variables (x,y,z) with their cylindrical/spherical equivalents in the component functions (Fx​,Fy​,Fz​).
            
        3. Express the Cartesian unit vectors (ax​,ay​,az​) in terms of the target system's unit vectors using the transformation matrix or dot product relations. For example, ax​=cosϕaρ​−sinϕaϕ​.
            
        4. Group the terms for each of the new unit vectors (aρ​,aϕ​,az​ or ar​,aθ​,aϕ​) and simplify.
            

---

# 4.0 Vector Operations and Component Analysis (Relevant for Q7, Q8, Q9, Q10, Q11)

This section applies vector algebra to problems involving finding components relative to specific directions or surfaces.

## 4.1 Vector Algebra in Different Systems

- **Foundational Prerequisites:** Section 1.1 (Vector Algebra).
    
- **Problem-Solving Techniques:**
    
    - **Dot Product:** In any orthogonal system (Cartesian, Cylindrical, Spherical), the dot product is the sum of the products of corresponding components: A⋅B=Aρ​Bρ​+Aϕ​Bϕ​+Az​Bz​.
        
    - **Cross Product:** Can be calculated using the determinant method, remembering that the unit vectors are position-dependent (for cylindrical and spherical).
        
        A×B=![](data:image/svg+xml;utf8,<svg%20xmlns="http://www.w3.org/2000/svg"%20width="0.333em"%20height="3.600em"%20viewBox="0%200%20333%203600"><path%20d="M145%2015%20v585%20v2400%20v585%20c2.667,10,9.667,15,21,15%0Ac10,0,16.667,-5,20,-15%20v-585%20v-2400%20v-585%20c-2.667,-10,-9.667,-15,-21,-15%0Ac-10,0,-16.667,5,-20,15z%20M188%2015%20H145%20v585%20v2400%20v585%20h43z"></path></svg>)​aρ​Aρ​Bρ​​aϕ​Aϕ​Bϕ​​az​Az​Bz​​![](data:image/svg+xml;utf8,<svg%20xmlns="http://www.w3.org/2000/svg"%20width="0.333em"%20height="3.600em"%20viewBox="0%200%20333%203600"><path%20d="M145%2015%20v585%20v2400%20v585%20c2.667,10,9.667,15,21,15%0Ac10,0,16.667,-5,20,-15%20v-585%20v-2400%20v-585%20c-2.667,-10,-9.667,-15,-21,-15%0Ac-10,0,-16.667,5,-20,15z%20M188%2015%20H145%20v585%20v2400%20v585%20h43z"></path></svg>)​
        
    - **Unit Vector in Direction of H:** Calculate as aH​=∣H∣H​.
        

## 4.2 Vector Component Analysis

- **Core Principles:**
    
    - The scalar component of a vector **A** along a direction given by a unit vector **a** is A⋅a.
        
    - The vector component of **A** along a direction **a** is (A⋅a)a.
        
- **Problem-Solving Techniques:**
    
    - **Component Parallel to an Axis (e.g., ax​):** Find the scalar component by computing H⋅ax​. This requires expressing ax​ in the coordinate system of H (e.g., cylindrical) or vice-versa using the transformation relations from Section 3.2.
        
    - **Component Normal to a Surface:** The direction normal to a surface is given by the unit vector corresponding to the variable that is constant on that surface.
        
        - Normal to ρ=c is ±aρ​.
            
        - Normal to ϕ=c is ±aϕ​.
            
        - Normal to r=c is ±ar​.
            
        - The vector component is (H⋅anormal​)anormal​.
            
    - **Component Tangential to a Surface:** A vector is tangential to a surface if it has no component normal to it.
        
        - Htangential​=H−Hnormal​.
            
        - For a surface like ϕ=30∘, the tangential components lie in the directions of the other two unit vectors of that system (i.e., the aρ​ and az​ components).
            
    - **Component Parallel to a Line:** Represent the line as a vector, find the unit vector in that line's direction, and then compute the dot product. For the line y=−2,z=0, the direction is along the x-axis, so the unit vector is ax​.
        

---

# 5.0 Differential Calculus for Electromagnetics (Relevant for Q12, Q13, Q14)

This section covers the differential lengths, areas, and volumes that are fundamental to integration in different coordinate systems.

## 5.1 Differential Length, dl

- **Key Definition:** An infinitesimal vector displacement.
    
- **Essential Formulae & Equations:**
    
    - **Cartesian:** dl=dx ax​+dy ay​+dz az​
        
    - **Cylindrical:** dl=dρ aρ​+ρ dϕ aϕ​+dz az​
        
    - **Spherical:** dl=dr ar​+r dθ aθ​+rsinθ dϕ aϕ​
        
- **Problem-Solving Technique:**
    
    - To find the length of a curve, identify which variable(s) are changing. Set the differentials of the constant variables to zero in the formula for dl. For example, for a curve with $\rho=$const and $z=$const, dρ=0 and dz=0, so dl=ρ dϕ aϕ​. The length is L=∫∣dl∣=∫ϕ1​ϕ2​​ρ dϕ.
        

## 5.2 Differential Surface Area, dS

- **Key Definition:** An infinitesimal vector area. The direction of the vector is normal to the surface.
    
- **Essential Formulae & Equations:**
    
    - **Cylindrical:**
        
        - dSρ​=ρ dϕ dz aρ​ (surface of a cylinder)
            
        - dSϕ​=dρ dz aϕ​ (a vertical plane)
            
        - dSz​=ρ dρ dϕ az​ (a horizontal circular disk)
            
    - **Spherical:**
        
        - dSr​=r2sinθ dθ dϕ ar​ (surface of a sphere)
            
        - dSθ​=rsinθ dr dϕ aθ​ (surface of a cone)
            
        - dSϕ​=r dr dθ aϕ​ (a vertical plane)
            
- **Problem-Solving Technique:**
    
    - To find an area, identify the surface (e.g., r=10 is a sphere). Choose the correct dS formula. The area is A=∫∣dS∣ over the given limits for the two changing variables.
        

## 5.3 Differential Volume, dv

- **Key Definition:** An infinitesimal scalar volume element.
    
- **Essential Formulae & Equations:**
    
    - **Cartesian:** dv=dx dy dz
        
    - **Cylindrical:** dv=ρ dρ dϕ dz
        
    - **Spherical:** dv=r2sinθ dr dθ dϕ
        
- **Problem-Solving Technique:**
    
    - To find a volume, identify the coordinate system that best fits the boundaries. Set up the triple integral for dv with the given limits of integration for each variable: V=∭dv.
```

## TOC Post Assignment 2

```text
# Enhanced Study TOC for PH-101 (Physics)

# 1.0 Foundational Mathematical Concepts

This section covers the essential prerequisites you must master before tackling the specific topics in the assignment. These concepts are fundamental to all questions.

## 1.1 Vector Algebra

- **Foundational Prerequisites:**
    
    - Basic arithmetic and algebra.
        
- **Key Definitions:**
    
    - **Scalar:** A quantity with only magnitude (e.g., mass, temperature).
        
    - **Vector:** A quantity with both magnitude and direction (e.g., force, velocity).
        
    - **Unit Vector (aV​):** A vector with a magnitude of 1, used to indicate direction. aV​=∣V∣V​.
        
- **Essential Formulae & Equations:**
    
    - **Vector Magnitude:** For A=Ax​ax​+Ay​ay​+Az​az​, its magnitude is ∣A∣=Ax2​+Ay2​+Az2​![](data:image/svg+xml;utf8,<svg%20xmlns="http://www.w3.org/2000/svg"%20width="400em"%20height="1.88em"%20viewBox="0%200%20400000%201944"%20preserveAspectRatio="xMinYMin%20slice"><path%20d="M983%2090%0Al0%20-0%0Ac4,-6.7,10,-10,18,-10%20H400000v40%0AH1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7%0As-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744%0Ac-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30%0Ac26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722%0Ac56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5%0Ac53.7,-170.3,84.5,-266.8,92.5,-289.5z%0AM1001%2080h400000v40h-400000z"></path></svg>)​.
        
    - **Dot Product (Scalar Product):** A⋅B=∣A∣∣B∣cosθAB​=Ax​Bx​+Ay​By​+Az​Bz​. It projects one vector onto another.
        
    - **Cross Product (Vector Product):** A×B=∣A∣∣B∣sinθAB​⋅an​, where an​ is a unit vector normal to the plane containing A and B.
        

## 1.2 Basic Calculus

- **Foundational Prerequisites:**
    
    - High school level differentiation and integration.
        
- **Key Definitions:**
    
    - **Definite Integral:** Represents the accumulation of a quantity or the area under a curve between two points.
        
    - **Partial Derivative:** The derivative of a function with multiple variables with respect to one of those variables, holding the others constant.
        
- **Problem-Solving Techniques:**
    
    - **Polynomial Integration:** Basic integration rules for functions like xn.
        
    - **Trigonometric Integration:** Integration of functions like sin(ϕ) and cos2(ϕ).
        
    - **Setting up Limits of Integration:** Determining the correct start and end points for single, double, or triple integrals based on the problem's geometry.
        

---

# 2.0 Coordinate Systems & Differential Elements

**(Relevant for all Questions)**

Understanding the geometry, variables, and differential elements of each coordinate system is non-negotiable. The choice of system is dictated by the symmetry of the problem.

## 2.1 Cartesian System

- **Coordinates:** (x,y,z).
    
- **Differential Length:** dl=dx ax​+dy ay​+dz az​.
    
- **Differential Surface Area:** dSx​=dy dz ax​, dSy​=dx dz ay​, dSz​=dx dy az​.
    
- **Differential Volume:** dv=dx dy dz.
    

## 2.2 Cylindrical System

- **Coordinates:** (ρ,ϕ,z), where ρ is the radial distance from the z-axis, and ϕ is the azimuthal angle from the x-axis.
    
- **Coordinate Transformations:**
    
    - x=ρcosϕ, y=ρsinϕ, z=z.
        
    - ρ=x2+y2![](data:image/svg+xml;utf8,<svg%20xmlns="http://www.w3.org/2000/svg"%20width="400em"%20height="1.28em"%20viewBox="0%200%20400000%201296"%20preserveAspectRatio="xMinYMin%20slice"><path%20d="M263,681c0.7,0,18,39.7,52,119%0Ac34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120%0Ac340,-704.7,510.7,-1060.3,512,-1067%0Al0%20-0%0Ac4.7,-7.3,11,-11,19,-11%0AH40000v40H1012.3%0As-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232%0Ac-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1%0As-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26%0Ac-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z%0AM1001%2080h400000v40h-400000z"></path></svg>)​, ϕ=arctan(y/x), z=z.
        
- **Differential Length:** dl=dρ aρ​+ρ dϕ aϕ​+dz az​.
    
- **Differential Surface Area:** dSρ​=ρ dϕ dz aρ​ (cylinder wall), dSz​=ρ dρ dϕ az​ (top/bottom cap).
    
- **Differential Volume:** dv=ρ dρ dϕ dz.
    

## 2.3 Spherical System

- **Coordinates:** (r,θ,ϕ), where r is the radial distance from the origin, θ is the polar angle from the z-axis, and ϕ is the azimuthal angle.
    
- **Coordinate Transformations:**
    
    - x=rsinθcosϕ, y=rsinθsinϕ, z=rcosθ.
        
    - r=x2+y2+z2![](data:image/svg+xml;utf8,<svg%20xmlns="http://www.w3.org/2000/svg"%20width="400em"%20height="1.28em"%20viewBox="0%200%20400000%201296"%20preserveAspectRatio="xMinYMin%20slice"><path%20d="M263,681c0.7,0,18,39.7,52,119%0Ac34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120%0Ac340,-704.7,510.7,-1060.3,512,-1067%0Al0%20-0%0Ac4.7,-7.3,11,-11,19,-11%0AH40000v40H1012.3%0As-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232%0Ac-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1%0As-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26%0Ac-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z%0AM1001%2080h400000v40h-400000z"></path></svg>)​, θ=arccos(z/r), ϕ=arctan(y/x).
        
- **Differential Length:** dl=dr ar​+r dθ aθ​+rsinθ dϕ aϕ​.
    
- **Differential Surface Area:** dSr​=r2sinθ dθ dϕ ar​ (sphere surface), dSθ​=rsinθ dr dϕ aθ​ (cone surface).
    
- **Differential Volume:** dv=r2sinθ dr dθ dϕ.
    

---

# 3.0 Vector Integrals

This section covers the primary computational skills required for the assignment.

## 3.1 Line Integrals

**(Relevant for Q2, Q3, Q8, Q10a, Q11, Q12a)**

- **Key Definitions:**
    
    - **Line Integral:** An integral of a field along a curve, L.
        
    - **Work:** For a force field F, the work done moving a particle along a path L is W=∫L​F⋅dl.
        
    - **Circulation:** The closed-loop line integral of a vector field, ∮L​A⋅dl. It measures how much the field "circulates" around the path.
        
- **Essential Formulae:**
    
    - **General Line Integral:** ∫L​A⋅dl.
        
- **Problem-Solving Technique:**
    
    1. **Identify the Path(s) L:** Break down the total path into simpler segments if necessary.
        
    2. **Parameterize Each Segment:** For each segment, express two variables in terms of the third (e.g., along the curve y=x2, dy=2x dx). Also, determine the limits of integration.
        
    3. **Choose the Correct dl:** Start with the full differential length (e.g., dl=dx ax​+dy ay​+dz az​).
        
    4. **Simplify dl for the path:** On the path y=x2,z=0, we have dy=2x dx and dz=0, so dl=dx ax​+2x dx ay​.
        
    5. **Compute the Dot Product:** Calculate A⋅dl. The result will be a scalar expression.
        
    6. **Integrate:** Evaluate the definite integral over the specified limits. Sum the results for all segments.
        

## 3.2 Surface Integrals

**(Relevant for Q1, Q5a, Q6, Q7, Q9, Q10b, Q12b, Q12c, Q12d, Q12e)**

- **Key Definitions:**
    
    - **Surface Integral:** An integral of a field over a surface, S.
        
    - **Flux:** The surface integral of a vector field, Ψ=∫S​D⋅dS. It measures the net flow of the field through the surface.
        
- **Essential Formulae:**
    
    - **Scalar Field:** ∫S​ρs​dS (Note: dS is the magnitude of dS).
        
    - **Vector Field (Flux):** ∫S​A⋅dS.
        
- **Problem-Solving Technique:**
    
    1. **Identify the Surface S:** Determine the shape and its constant coordinate value (e.g., a cylinder of radius ρ=4, or a plane at z=1).
        
    2. **Choose the Correct dS:** Select the differential surface area corresponding to the surface (e.g., for ρ=4, use dS=ρ dϕ dz aρ​=4 dϕ dz aρ​). The direction of dS is outward for a closed surface.
        
    3. **Determine the Limits:** Find the integration limits for the two changing variables (e.g., for the cylinder wall, 0≤ϕ<2π and 0≤z≤1).
        
    4. **Compute the Dot Product:** Calculate A⋅dS. Substitute the constant value of the surface coordinate into A.
        
    5. **Integrate:** Evaluate the resulting double integral. For a closed surface, sum the integrals over all constituent surfaces (e.g., top, bottom, and side of a cylinder).
        

---

# 4.0 The Del Operator: Gradient, Divergence, and Curl

This section covers the vector differential operations that are central to the major theorems of vector calculus.

## 4.1 Divergence (∇⋅A)

**(Relevant for Q4, Q5b, Q6, Q7, Q12f)**

- **Key Definition:**
    
    - **Divergence:** A scalar quantity that measures the magnitude of a vector field's source or sink at a given point. Think of it as "flux density."
        
- **Foundational Prerequisites:**
    
    - Partial Derivatives, Coordinate Systems.
        
- **Essential Formulae:**
    
    - **Cartesian:** ∇⋅A=∂x∂Ax​​+∂y∂Ay​​+∂z∂Az​​.
        
    - **Cylindrical:** ∇⋅A=ρ1​∂ρ∂(ρAρ​)​+ρ1​∂ϕ∂Aϕ​​+∂z∂Az​​.
        
    - **Spherical:** ∇⋅A=r21​∂r∂(r2Ar​)​+rsinθ1​∂θ∂(Aθ​sinθ)​+rsinθ1​∂ϕ∂Aϕ​​.
        

## 4.2 Curl (∇×A)

**(Relevant for Q10b, Q12b, Q12c)**

- **Key Definition:**
    
    - **Curl:** A vector quantity that describes the infinitesimal circulation of a vector field. It measures the "rotation" or "whirl" of the field at a point.
        
- **Foundational Prerequisites:**
    
    - Partial Derivatives, Coordinate Systems, Cross Product.
        
- **Essential Formulae:**
    
    - **Cartesian:** ∇×A=![](data:image/svg+xml;utf8,<svg%20xmlns="http://www.w3.org/2000/svg"%20width="0.333em"%20height="3.600em"%20viewBox="0%200%20333%203600"><path%20d="M145%2015%20v585%20v2400%20v585%20c2.667,10,9.667,15,21,15%0Ac10,0,16.667,-5,20,-15%20v-585%20v-2400%20v-585%20c-2.667,-10,-9.667,-15,-21,-15%0Ac-10,0,-16.667,5,-20,15z%20M188%2015%20H145%20v585%20v2400%20v585%20h43z"></path></svg>)​ax​∂x∂​Ax​​ay​∂y∂​Ay​​az​∂z∂​Az​​![](data:image/svg+xml;utf8,<svg%20xmlns="http://www.w3.org/2000/svg"%20width="0.333em"%20height="3.600em"%20viewBox="0%200%20333%203600"><path%20d="M145%2015%20v585%20v2400%20v585%20c2.667,10,9.667,15,21,15%0Ac10,0,16.667,-5,20,-15%20v-585%20v-2400%20v-585%20c-2.667,-10,-9.667,-15,-21,-15%0Ac-10,0,-16.667,5,-20,15z%20M188%2015%20H145%20v585%20v2400%20v585%20h43z"></path></svg>)​.
        
    - **Cylindrical:** ∇×A=ρ1​![](data:image/svg+xml;utf8,<svg%20xmlns="http://www.w3.org/2000/svg"%20width="0.333em"%20height="3.600em"%20viewBox="0%200%20333%203600"><path%20d="M145%2015%20v585%20v2400%20v585%20c2.667,10,9.667,15,21,15%0Ac10,0,16.667,-5,20,-15%20v-585%20v-2400%20v-585%20c-2.667,-10,-9.667,-15,-21,-15%0Ac-10,0,-16.667,5,-20,15z%20M188%2015%20H145%20v585%20v2400%20v585%20h43z"></path></svg>)​aρ​∂ρ∂​Aρ​​ρaϕ​∂ϕ∂​ρAϕ​​az​∂z∂​Az​​![](data:image/svg+xml;utf8,<svg%20xmlns="http://www.w3.org/2000/svg"%20width="0.333em"%20height="3.600em"%20viewBox="0%200%20333%203600"><path%20d="M145%2015%20v585%20v2400%20v585%20c2.667,10,9.667,15,21,15%0Ac10,0,16.667,-5,20,-15%20v-585%20v-2400%20v-585%20c-2.667,-10,-9.667,-15,-21,-15%0Ac-10,0,-16.667,5,-20,15z%20M188%2015%20H145%20v585%20v2400%20v585%20h43z"></path></svg>)​.1
        

---

# 5.0 The Fundamental Theorems of Vector Calculus

These theorems connect the derivatives of fields (divergence, curl) to their integral properties (flux, circulation). They are powerful tools for simplifying complex problems.

## 5.1 Divergence Theorem

**(Relevant for Q5, Q6, Q7, Q12f)**

- **Foundational Prerequisites:**
    
    - Section 3.2 (Surface Integrals), Section 4.1 (Divergence).
        
- **Core Theorem:**
    
    - **Divergence Theorem (Gauss's Theorem):** Relates the total flux flowing out of a closed surface S to the volume integral of the divergence of the field within the volume V enclosed by that surface.
        
- **Essential Formula:**
    
    - ∮S​A⋅dS=∫V​(∇⋅A)dv.
        
    - Where S is a closed surface enclosing volume V.
        
- **Problem-Solving Technique (for Verification):**
    
    1. **Calculate the Left-Hand Side (LHS):**
        
        - Identify all surfaces that form the closed boundary (e.g., top, bottom, side of cylinder).
            
        - For each surface, perform a surface integral ∫A⋅dS as described in Section 3.2.
            
        - Sum the results to get the total flux ∮S​A⋅dS.
            
    2. **Calculate the Right-Hand Side (RHS):**
        
        - Calculate the divergence of the field, ∇⋅A, using the appropriate formula from Section 4.1.
            
        - Set up the volume integral ∫V​(∇⋅A)dv over the volume enclosed by the surface, using the correct differential volume dv and integration limits.
            
    3. **Compare:** Verify that LHS = RHS.
        

## 5.2 Stokes' Theorem

**(Relevant for Q8, Q10, Q12a, Q12b, Q12c)**

- **Foundational Prerequisites:**
    
    - Section 3.1 (Line Integrals), Section 4.2 (Curl).
        
- **Core Theorem:**
    
    - **Stokes' Theorem:** Relates the circulation of a vector field around a closed path L to the flux of the curl of that field through any open surface S bounded by that path.
        
- **Essential Formula:**
    
    - ∮L​A⋅dl=∫S​(∇×A)⋅dS.
        
    - Where L is a closed loop that is the boundary of the open surface S. The direction of dS is determined by the right-hand rule with respect to the direction of integration around L.
        
- **Problem-Solving Technique (for Verification):**
    
    1. **Calculate the Left-Hand Side (LHS):**
        
        - Perform the closed-loop line integral ∮L​A⋅dl as described in Section 3.1.
            
    2. **Calculate the Right-Hand Side (RHS):**
        
        - Calculate the curl of the field, ∇×A, using the appropriate formula from Section 4.2.
            
        - Choose a simple surface S that is bounded by the loop L (e.g., the flat base of the wedge in Q8).
            
        - Perform the surface integral ∫S​(∇×A)⋅dS over this surface.
            
    3. **Compare:** Verify that LHS = RHS.
        

## 5.3 Conservative Fields & Path Independence

**(Relevant for Q3)**

- **Key Definitions:**
    
    - **Conservative Field:** A vector field F is conservative if its line integral between any two points is independent of the path taken.
        
    - **Condition for a Conservative Field:** A field F is conservative if its curl is zero everywhere: ∇×F=0.
        
- **Problem-Solving Technique (for Q3):**
    
    - The question asks to calculate the work done along two different paths between the same start and end points.
        
    - If the work done is different for the two paths, the field is **not conservative**.
        
    - You could also check this by calculating ∇×F. If it is non-zero, the field is not conservative, and you should expect the work to be path-dependent.
```

## TOC Post Assignment 3

```text
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
```

## TOC Post Assignment 3 Compress

```text

**1.0 Foundational Mathematics (All Qs)**

**1.1 Vector Calculus & Coordinate Systems**

- Select coordinate system (Cartesian, Cylindrical, Spherical) to match charge distribution symmetry.
    
- **Cartesian (x,y,z):**
    
    - dl=dx ax​+dy ay​+dz az​
        
    - dv=dx dy dz
        
- **Cylindrical (ρ,ϕ,z):**
    
    - dl=dρ aρ​+ρdϕ aϕ​+dz az​
        
    - dv=ρ dρ dϕ dz
        
- **Spherical (r,θ,ϕ):**
    
    - dl=dr ar​+rdθ aθ​+rsinθdϕ aϕ​
        
    - dv=r2sinθ dr dθ dϕ
        

**1.2 Del Operator (∇) & Vector Integrals**

- **Definitions:**
    
    - **Gradient (∇V):** Vector of max spatial rate of increase of scalar V.
        
    - **Divergence (∇⋅A):** Scalar measure of outward flux density.
        
    - **Curl (∇×A):** Vector measure of circulation density.
        
    - **Laplacian (∇2V):** ∇⋅(∇V).
        
- **Integrals:** Line (∫L​A⋅dl), Surface/Flux (∫S​A⋅dS), Volume (∫v​ρv​dv).
    
- **Formulae:**
    
    - E=−∇V
        
    - **Divergence (Cartesian):** ∇⋅A=∂x∂Ax​​+∂y∂Ay​​+∂z∂Az​​
        
    - **Curl (Cartesian):** ∇×A=(∂y∂Az​​−∂z∂Ay​​)ax​+(∂z∂Ax​​−∂x∂Az​​)ay​+(∂x∂Ay​​−∂y∂Ax​​)az​
        

---

**2.0 Electrostatics in Free Space (Q1-5, 7, 10)**

**2.1 Coulomb's Law & Electric Field Intensity (E)**

- **E (Electric Field Intensity):** Force per unit charge, F/q. Units: V/m, N/C.
    
- **Charge Densities:** Line (ρL​, C/m), Surface (ρs​, C/m²), Volume (ρv​, C/m³).
    
- **Superposition:** Etotal​=ΣEi​.
    
- **Point Charge Field:** E=4πε0​r2Q​ar​.
    
- **Total Charge:** Q=∫L​ρL​dl or ∫S​ρs​dS or ∫v​ρv​dv.
    

**2.2 Electric Flux Density (D)**

- **Ψ (Electric Flux):** E-field flow through area S; Ψ=∫S​D⋅dS.
    
- **D (Electric Flux Density):** Displacement field, medium-independent. Units: C/m².
    
- In free space: D=ε0​E.
    

---

**3.0 Gauss's Law (Q1-8, 10)**

- **Integral Form:** ∮S​D⋅dS=Qenc​=∫v​ρv​dv.
    
- **Differential Form (Maxwell's 1st Eq):** ∇⋅D=ρv​.
    
- **Divergence Theorem:** ∮S​D⋅dS=∫v​(∇⋅D)dv, proving equivalence of forms.
    
- **Application Steps:**
    
    1. Identify charge distribution symmetry.
        
    2. Choose Gaussian surface where **D** is constant and normal to dS.
        
    3. Evaluate LHS: ∮D⋅dS simplifies to Ds​×Area.
        
    4. Evaluate RHS: Calculate Qenc​ within the surface.
        
    5. Solve for Ds​ from Ds​×Area=Qenc​.
        
    6. Find **E** using E=D/ε0​.
        

---

**4.0 Electric Potential & Work (Q9, 11-16)**

- **V (Potential):** Scalar work/charge (W/q) to move q from reference to point. Unit: Volt (V).
    
- **VAB​ (Potential Difference):** VB​−VA​.
    
- Electrostatic field is conservative (irrotational) ∴ ∇×E=0; work is path-independent.
    
- **Equations:**
    
    - WA→B​=−q∫AB​E⋅dl=q(VB​−VA​)
        
    - VAB​=−∫AB​E⋅dl
        
    - E=−∇V
        
    - **Point Charge Potential:** V=4πε0​rQ​
        
    - **Poisson's Eq:** ∇2V=−ερv​​
        
    - **Laplace's Eq (where ρv​=0):** ∇2V=0
        

---

**5.0 Materials & Boundary Conditions (Q9, 17, 18)**

- **Dielectric:** Insulator polarizable by an E-field.
    
- **Permittivity:** ε=εr​ε0​ (εr​≥1 is relative permittivity).
    
- **Polarization P:** Dipole moment density; D=ε0​E+P.
    
- **Energy Density wE​:** 21​D⋅E=21​εE2=2εD2​.
    
- **Boundary Conditions (Dielectric Interface):**
    
    - Tangential E is continuous: E1t​=E2t​.
        
    - Normal D is continuous if ρs​=0: D1n​=D2n​.
        
- **Application Steps:**
    
    1. Decompose E1​ into tangential (E1t​) and normal (E1n​) components.
        
    2. E2t​=E1t​.
        
    3. D2n​=D1n​ (if ρs​=0).
        
    4. E2n​=D2n​/ε2​.
        
    5. Reconstruct E2​=E2t​+E2n​.
```

## TOC Post Assignment 4

```text
# Enhanced Study TOC: Magnetostatics

---

# 1.0 Foundational Vector Calculus & Coordinate Systems (Relevant for all Qs)

This section expands on your existing foundational knowledge. Mastery of vector calculus is non-negotiable for solving these problems.

## 1.1 Coordinate Systems

- **Foundational Prerequisites:** Basic geometry and trigonometry.
    
- **Key Concepts:** Defining points and vectors in space using orthogonal basis vectors. The choice of system should simplify the problem based on the symmetry of the current distribution.
    
    - **Cartesian (x,y,z):** For rectangular symmetry (e.g., current sheets).
        
    - **Cylindrical (ρ,ϕ,z):** For problems with axial/cylindrical symmetry (e.g., long wires, cylinders).
        
    - **Spherical (r,θ,ϕ):** For problems with spherical symmetry (e.g., spinning spheres).
        

## 1.2 The Del Operator (∇) and Integral Theorems

- **Foundational Prerequisites:** Partial differentiation and basic integration.
    
- **Key Definitions:**
    
    - **Gradient (∇V):** A vector that points in the direction of the maximum spatial rate of change of a scalar field V.
        
    - **Divergence (∇⋅A):** A scalar measure of the net outward flux of a vector field A from an infinitesimal volume. A non-zero divergence indicates a source or sink.
        
    - **Curl (∇×A):** A vector measure of the circulation or "rotation" of a vector field A at a point. A non-zero curl indicates the field is not conservative.
        
    - **Laplacian (∇2):** The divergence of the gradient of a field. Can operate on scalars (∇2V) or vectors (∇2A).
        
- **Core Theorems/Laws/Principles:**
    
    - **Divergence Theorem (Gauss's Theorem):** Relates the flux of a vector field through a closed surface to the divergence of the field within the volume. It connects integral and differential forms of Gauss's Law.
        
    - **Stokes' Theorem:** Relates the circulation of a vector field around a closed loop to the flux of its curl through the open surface bounded by the loop. It connects integral and differential forms of Ampere's Law.
        
- **Essential Formulae & Equations:**
    
    - **Gradient:**
        
        - Cartesian: ∇V=∂x∂V​ax​+∂y∂V​ay​+∂z∂V​az​
            
        - Cylindrical: ∇V=∂ρ∂V​aρ​+ρ1​∂ϕ∂V​aϕ​+∂z∂V​az​
            
    - **Divergence:**
        
        - Cartesian: ∇⋅A=∂x∂Ax​​+∂y∂Ay​​+∂z∂Az​​
            
        - Cylindrical: ∇⋅A=ρ1​∂ρ∂(ρAρ​)​+ρ1​∂ϕ∂Aϕ​​+∂z∂Az​​
            
    - **Curl:**
        
        - Cartesian: ∇×A=(∂y∂Az​​−∂z∂Ay​​)ax​+(∂z∂Ax​​−∂x∂Az​​)ay​+(∂x∂Ay​​−∂y∂Ax​​)az​
            
        - Cylindrical: ∇×A=(ρ1​∂ϕ∂Az​​−∂z∂Aϕ​​)aρ​+(∂z∂Aρ​​−∂ρ∂Az​​)aϕ​+ρ1​(∂ρ∂(ρAϕ​)​−∂ϕ∂Aρ​​)az​
            
    - **Vector Laplacian Identity:** ∇×(∇×A)=∇(∇⋅A)−∇2A
        

---

# 2.0 Static Magnetic Fields (Magnetostatics) (Relevant for all Qs)

This is the core topic for your assignment and was missing from your TOC. It deals with magnetic fields produced by steady currents.

## 2.1 Steady Currents and Current Density

- **Foundational Prerequisites:** Understanding of electric current.
    
- **Key Definitions:**
    
    - **Steady Current:** A current that does not change with time. This implies that the charge density at any point is constant (∂t∂ρv​​=0).
        
    - **Current Density (J):** The vector representing the flow of current per unit cross-sectional area. Units: Amperes per square meter (A/m2).
        
    - **Surface Current Density (K):** The vector representing the flow of current per unit width on a surface. Units: Amperes per meter (A/m). It arises from current flowing in a very thin sheet.
        
    - **Total Current (I):** The total flow of charge per unit time.
        
- **Core Principles:**
    
    - **Continuity Equation for Static Fields:** For steady currents, the flow of charge out of a volume must be zero, leading to ∇⋅J=0. This means that steady currents must flow in closed loops.
        
- **Essential Formulae & Equations:**
    
    - I=∫S​J⋅dS where I is the total current crossing surface S.
        
    - I=∫L​K⋅dl⊥​ where dl⊥​ is a line element perpendicular to the current flow.
        
    - For spinning objects (Q12, Q13): K=σv, where σ is surface charge density and v is the velocity of the charge. For rotation, v=ω×r.
        

## 2.2 Magnetic Fields and Fundamental Laws

- **Key Definitions:**
    
    - **Magnetic Flux Density (B):** The fundamental magnetic field vector, defined by the force it exerts on a moving charge (Lorentz Force). Units: Tesla (T) or Webers per square meter (Wb/m2).
        
    - **Magnetic Field Intensity (H):** An auxiliary magnetic field vector that is useful when dealing with magnetic materials. Units: Amperes per meter (A/m).
        
    - **Permeability of Free Space (μ0​):** A fundamental constant, μ0​=4π×10−7H/m.
        
- **Core Theorems/Laws/Principles:**
    
    - **Gauss's Law for Magnetism (Maxwell's Eq):** The net magnetic flux through any closed surface is zero (∇⋅B=0). This implies there are no magnetic monopoles.
        
    - **Ampere's Circuital Law (Maxwell's Eq for Magnetostatics):** The circulation of the magnetic field intensity H around a closed loop is equal to the total current passing through the surface enclosed by the loop.
        
- **Essential Formulae & Equations:**
    
    - Relationship in Free Space: B=μ0​H
        
    - Ampere's Law (Integral Form): ∮L​H⋅dl=Ienc​=∫S​J⋅dS
        
    - Ampere's Law (Differential Form): ∇×H=J
        
    - Gauss's Law for Magnetism (Differential Form): ∇⋅B=0
        
- **Problem-Solving Techniques:**
    
    - **Applying Ampere's Law (Q3, Q7, Q13):**
        
        1. Identify the symmetry of the current distribution J.
            
        2. Choose an "Amperian loop" (a closed path L) where H is constant in magnitude and tangential to the path.
            
        3. Calculate the enclosed current, Ienc​.
            
        4. Solve ∮H⋅dl=H×(length of loop)=Ienc​ for H.
            
    - **Superposition Principle (Q3, Q6):** The total magnetic field due to multiple sources is the vector sum of the fields from each source. For the cylinder with a hole, treat it as a solid large cylinder with current J plus a solid small cylinder with current −J.
        

---

# 3.0 Magnetic Vector Potential (A) (Relevant for Q1, Q4, Q5, Q11, Q12)

This is the magnetic analogue to the scalar electric potential, crucial for finding fields from complex current distributions.

- **Foundational Prerequisites:** Understanding of the curl operator and the concept that the divergence of a curl is always zero (∇⋅(∇×A)=0).
    
- **Key Definitions:**
    
    - **Magnetic Vector Potential (A):** A vector field whose curl is equal to the magnetic flux density B. Units: Webers per meter (Wb/m).
        
- **Core Principles:**
    
    - Since ∇⋅B=0, and the divergence of a curl is always zero, we can always define a vector potential A such that B=∇×A.
        
- **Essential Formulae & Equations:**
    
    - Definition: B=∇×A
        
    - **Poisson's Equation for Magnetostatics (Q1):** In vacuum, the vector potential satisfies ∇2A=−μ0​J. This equation relates the potential to its source (the current density).
        
    - **Magnetic Flux (Φ):** The total magnetic flux passing through a surface S. Units: Webers (Wb).
        
    - Flux from Potential: Φ=∫S​B⋅dS=∫S​(∇×A)⋅dS=∮L​A⋅dl (by Stokes' Theorem).
        
- **Problem-Solving Techniques:**
    
    - **Deriving Poisson's Equation for A (Q1):**
        
        1. Start with Ampere's Law: ∇×H=J.
            
        2. Substitute H=B/μ0​: ∇×B=μ0​J.
            
        3. Substitute the definition of A: ∇×(∇×A)=μ0​J.
            
        4. Apply the vector identity ∇×(∇×A)=∇(∇⋅A)−∇2A.
            
        5. Use the Coulomb gauge condition (∇⋅A=0) to simplify the identity.
            
        6. Arrive at ∇2A=−μ0​J.
            
    - **Finding B from A (Q4, Q5, Q11):** Directly compute the curl of the given A field using the appropriate coordinate system formula.
        
    - **Finding J from A (Q5, Q11):** First find B=∇×A, then find H=B/μ, and finally find J=∇×H.
        
    - **Calculating Flux (Q4, Q8):**
        
        1. Find B from the given potential or field.
            
        2. Define the surface S and its differential surface element dS.
            
        3. Compute the dot product B⋅dS.
            
        4. Integrate over the specified surface limits: Φ=∫S​B⋅dS.
            

---

# 4.0 Magnetic Scalar Potential (ϕm​) (Relevant for Q2, Q9)

This is a simpler, scalar approach that can only be used in regions where there is no current.

- **Foundational Prerequisites:** Understanding of the gradient operator and the concept that the curl of a gradient is always zero (∇×(∇V)=0).
    
- **Key Definitions:**
    
    - **Magnetic Scalar Potential (ϕm​):** A scalar field whose negative gradient is equal to the magnetic field intensity H. Only valid where J=0.
        
- **Core Principles:**
    
    - In a source-free region (J=0), Ampere's law becomes ∇×H=0. Since the curl of a gradient is always zero, we can define a scalar potential ϕm​ such that H=−∇ϕm​.
        
- **Essential Formulae & Equations:**
    
    - Definition: H=−∇ϕm​ (only where J=0).
        
    - From ∇⋅B=0 and B=μH, we get ∇⋅(μH)=0.
        
    - Substituting for H: ∇⋅(−μ∇ϕm​)=0.
        
    - **Laplace's Equation for Magnetostatics:** If μ is constant, this simplifies to ∇2ϕm​=0.
        
- **Problem-Solving Technique (Q2):**
    
    - This is a boundary-value problem. Define the potential ϕm​ in each region (e.g., inside the shell, within the iron, outside the shell).
        
    - The potential in each region will be a general solution to Laplace's equation.
        
    - Apply magnetostatic boundary conditions (see Section 5) at the interfaces (r=a and r=b) to solve for the unknown coefficients in the general solutions.
        

---

# 5.0 Magnetic Materials and Boundary Conditions (Relevant for Q2, Q14, Q15, Q16)

This section covers how magnetic fields behave at the interface between two different materials.

- **Key Definitions:**
    
    - **Permeability (μ):** A measure of a material's ability to support the formation of a magnetic field. μ=μr​μ0​.
        
    - **Relative Permeability (μr​):** The ratio of a material's permeability to that of free space.
        
- **Core Laws/Principles (Magnetostatic Boundary Conditions):**
    
    - The normal component of the magnetic flux density B is continuous across an interface: B1n​=B2n​.
        
    - The tangential component of the magnetic field intensity H is continuous across an interface _unless_ a free surface current K exists on the boundary. If there is a current, the discontinuity is equal to the magnitude of the current density.
        
- **Essential Formulae & Equations:**
    
    - B=μH
        
    - Normal Component: B1n​=B2n​⟹μ1​H1n​=μ2​H2n​
        
    - Tangential Component: H1t​−H2t​=K×an12​, where an12​ is the unit normal from region 1 to region 2. If K=0, then H1t​=H2t​.
        
- **Problem-Solving Technique (Q14, Q15, Q16):**
    
    1. Identify the two regions, their permeabilities (μ1​,μ2​), and the unit normal vector pointing from one region to the other (e.g., an21​).
        
    2. Decompose the known field (e.g., H1​) into its normal and tangential components relative to the interface.
        
        - Normal component: H1n​=(H1​⋅an21​)an21​.
            
        - Tangential component: H1t​=H1​−H1n​an21​.
            
    3. Apply the boundary condition for the normal component to find the normal component of the other field: μ2​H2n​=μ1​H1n​.
        
    4. Apply the boundary condition for the tangential component to find the tangential component of the other field: H2t​=H1t​−(K×an12​). Be careful with the direction of the normal vector. Note an12​=−an21​. If K=0, simply H2t​=H1t​.
        
    5. Reconstruct the full vector in the second region: H2​=H2t​+H2n​an21​.
        
    6. The angle a field makes with the normal is found using the dot product: cosθ1​=∣B1​∣∣B1​⋅an21​∣​.
```

## TOC POST Assignment 4 Compressed

```text
### 1.0 Vector Calculus & Coordinates

- **1.1 Coordinate Systems:** Choice (Cartesian, Cylindrical, Spherical) is dictated by current distribution symmetry.
    
- **1.2 Vector Operations & Theorems:**
    
    - **Definitions:**
        
        - Gradient `∇V`: Vector of max spatial rate of change of scalar `V`.
            
        - Divergence `∇⋅A`: Scalar measure of net outward flux from infinitesimal volume; `∇⋅A ≠ 0` indicates a source/sink.
            
        - Curl `∇×A`: Vector measure of local circulation; `∇×A ≠ 0` implies a non-conservative field.
            
        - Laplacian `∇²`: Divergence of the gradient, `∇²V` or `∇²A`.
            
    - **Theorems:**
        
        - **Divergence (Gauss):** `∮_S A ⋅ dS = ∫_V (∇⋅A) dV`. Connects integral/differential forms of Gauss's Law.
            
        - **Stokes':** `∮_L A ⋅ dl = ∫_S (∇×A) ⋅ dS`. Connects integral/differential forms of Ampere's Law.
            
    - **Formulae (Cartesian | Cylindrical):**
        
        - `∇V`: `∂_xV a_x + ∂_yV a_y + ∂_zV a_z` | `∂_ρV a_ρ + (1/ρ)∂_φV a_φ + ∂_zV a_z`
            
        - `∇⋅A`: `∂_x A_x + ∂_y A_y + ∂_z A_z` | `(1/ρ)∂_ρ(ρA_ρ) + (1/ρ)∂_φA_φ + ∂_zA_z`
            
        - `∇×A`: `(∂_yA_z - ∂_zA_y)a_x + ...` | `((1/ρ)∂_φA_z - ∂_zA_φ)a_ρ + ...`
            
    - **Identity:** `∇×(∇×A) = ∇(∇⋅A) - ∇²A`
        

---

### 2.0 Magnetostatics

- **2.1 Steady Current & Density:**
    
    - **Definitions:** Steady current implies `∂ρ_v/∂t = 0`. Densities: Volume `J` (A/m²), Surface `K` (A/m).
        
    - **Formulae:** Total current `I = ∫_S J ⋅ dS = ∫_L K ⋅ dl_⊥`. For rotation, `K = σv = σ(ω×r)`.
        
    - **Principle:** Continuity eq. `∇⋅J = 0` ∴ steady currents form closed loops.
        
- **2.2 Magnetic Fields & Laws:**
    
    - **Definitions:** Magnetic Flux Density `B` (T); Magnetic Field Intensity `H` (A/m). In free space, `B=μ₀H` where `μ₀=4π×10⁻⁷` H/m.
        
    - **Laws (Maxwell's Eqs):**
        
        - Gauss's Law for Magnetism: `∇⋅B = 0` (no magnetic monopoles).
            
        - Ampere's Circuital Law: `∮_L H ⋅ dl = I_enc` ⇔ `∇×H = J`.
            
    - **Techniques:**
        
        - **Ampere's Law:** For symmetric `J`, choose Amperian loop `L` where `H` is constant and tangential, then solve `H × (length) = I_enc`.
            
        - **Superposition:** `B_total = ΣB_i`. (e.g., cylinder with hole = solid cylinder(J) + solid cylinder(-J)).
            

---

### 3.0 Magnetic Vector Potential (A)

- **Principle:** ∵ `∇⋅B=0` and vector identity `∇⋅(∇×A)≡0`, a magnetic vector potential `A` (Wb/m) can be defined such that `B=∇×A`.
    
- **Formulae:**
    
    - **Poisson's Equation:** Substituting `B=∇×A` into `∇×B=μ₀J` and applying vector identity `∇×(∇×A)` with Coulomb gauge `(∇⋅A=0)` yields `∇²A = -μ₀J`.
        
    - **Magnetic Flux (Φ):** `Φ = ∫_S B ⋅ dS = ∮_L A ⋅ dl` (via Stokes' Theorem).
        
- **Techniques:**
    
    - Find `B` from `A`: Compute `B = ∇×A`.
        
    - Find `J` from `A`: Compute `J = ∇×H = (1/μ)∇×B = (1/μ)∇×(∇×A)`.
        

---

### 4.0 Magnetic Scalar Potential (ϕ_m)

- **Principle:** In current-free regions (`J=0`), `∇×H=0`. ∵ `∇×(∇ϕ_m)≡0`, a magnetic scalar potential `ϕ_m` can be defined such that `H = -∇ϕ_m`.
    
- **Formula:** From `∇⋅B=0` (`∇⋅(μH)=0`), substituting `H` gives `∇⋅(μ∇ϕ_m)=0`. For constant `μ`, this is **Laplace's Equation:** `∇²ϕ_m = 0`.
    
- **Technique:** Solve boundary-value problems by finding general solutions to `∇²ϕ_m=0` in each region and applying BCs at interfaces to determine coefficients.
    

---

### 5.0 Magnetic Boundary Conditions

- **Definitions:** Permeability `μ = μ_rμ₀`.
    
- **Conditions:** At the interface between two media:
    
    - Normal component of `B` is continuous: `B₁n = B₂n` ⇒ `μ₁H₁n = μ₂H₂n`.
        
    - Tangential component of `H` is continuous unless a surface current `K` exists: `H₁t - H₂t = K × a_n12`, where `a_n12` is the unit normal from region 1 to 2. If `K=0`, `H₁t = H₂t`.
        
- **Technique:**
    
    1. Decompose field `H₁` into normal `H₁n = (H₁⋅a_n21)a_n21` and tangential `H₁t = H₁ - H₁n` components.
        
    2. Apply BCs to find `H₂n` and `H₂t`.
        
    3. Reconstruct `H₂ = H₂t + H₂n`.
        
    4. Field angle to normal: `cosθ = |B| / |B⋅a_n|`.
```

## TOC Post Assignment 5

```text
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
```