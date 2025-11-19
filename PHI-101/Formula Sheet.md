![[Pasted image 20251119085032.png]]


### **Constants & Conversions**

- **Planck’s constant:** $h \approx 6.626 \times 10^{-34} \text{ J}\cdot\text{s} = 4.136 \times 10^{-15} \text{ eV}\cdot\text{s}$
    
- **Reduced Planck’s constant:** $\hbar = \frac{h}{2\pi} \approx 1.054 \times 10^{-34} \text{ J}\cdot\text{s}$
    
- **Speed of light:** $c \approx 3 \times 10^8 \text{ m/s}$
    
- **Boltzmann constant:** $k_B \approx 1.38 \times 10^{-23} \text{ J/K}$
    
- **Electron charge magnitude:** $e \approx 1.602 \times 10^{-19} \text{ C}$
    
- **Electron rest mass:** $m_e \approx 9.11 \times 10^{-31} \text{ kg} = 0.511 \text{ MeV}/c^2$
    
- **Neutron mass:** $m_n \approx 1.67 \times 10^{-27} \text{ kg}$
    
- **Stefan-Boltzmann constant:** $\sigma \approx 5.67 \times 10^{-8} \text{ W}\cdot\text{m}^{-2}\cdot\text{K}^{-4}$
    
- **Angstrom:** $1 \mathring{A} = 10^{-10} \text{ m}$
    
- **Electron-Volt:** $1 \text{ eV} = 1.602 \times 10^{-19} \text{ J}$
    

---

### **1. Blackbody Radiation & Thermal Physics (Q1-Q7, Q30)**

**Average Energy of an Oscillator ($\bar{E}$)**

- Classical (Rayleigh-Jeans):
    
    $$\bar{E} = k_B T$$
    
- Planck’s Oscillator:
    
    $$\bar{E} = \frac{h\nu}{e^{h\nu / k_B T} - 1}$$
    

**Density of Modes / Number of Vibrations**

- Number of modes in volume $V$ within frequency range $d\nu$:
    
    $$N(\nu)d\nu = \frac{8\pi V \nu^2}{c^3} d\nu$$
    
- Number of modes within wavelength range $d\lambda$ (using $\nu = c/\lambda$):
    
    $$N(\lambda)d\lambda = \frac{8\pi V}{\lambda^4} d\lambda$$
    

**Planck’s Radiation Law (Spectral Energy Density)**

- In terms of frequency:
    
    $$u(\nu) d\nu = \frac{8\pi h \nu^3}{c^3} \frac{1}{e^{h\nu / k_B T} - 1} d\nu$$
    
- In terms of wavelength:
    
    $$u(\lambda) d\lambda = \frac{8\pi h c}{\lambda^5} \frac{1}{e^{hc / \lambda k_B T} - 1} d\lambda$$
    

**Wien’s Displacement Law**

- Wavelength at maximum intensity ($\lambda_{max}$):
    
    $$\lambda_{max} T \approx 2.898 \times 10^{-3} \text{ m}\cdot\text{K} \quad \text{(Derived from } \frac{du(\lambda)}{d\lambda} = 0 \text{)}$$
    
- Frequency at maximum energy density ($\nu_{max}$):
    
    $$h\nu_{max} \approx 2.82 k_B T \quad \text{(Note: } \nu_{max} \neq c/\lambda_{max} \text{ due to Jacobian)}$$
    

**Stefan-Boltzmann Law (Total Power)**

- Total Power radiated ($P$):
    
    $$P = \epsilon \sigma A T^4 \quad \text{($\epsilon=1$ for blackbody)}$$
    
- Solar Radiation Intensity ($I$):
    
    $$I_{earth} = \frac{P_{sun}}{4\pi R_{orbit}^2}$$
    
    Where $P_{sun} = \sigma (4\pi R_{sun}^2) T_{sun}^4$.
    

---

### **2. Compton Scattering (Q8-Q11)**

Compton Shift Formula

$$\Delta \lambda = \lambda' - \lambda = \frac{h}{m_0 c} (1 - \cos \theta)$$

- $\lambda'$: Scattered wavelength
    
- $\lambda$: Incident wavelength
    
- $m_0$: Rest mass of electron
    
- $\theta$: Scattering angle of the **photon**
    
- **Compton Wavelength ($\lambda_c$):** $\frac{h}{m_0 c} \approx 0.0243 \mathring{A}$
    

**Energy & Kinetic Energy**

- Energy of Photon: $E = h\nu = \frac{hc}{\lambda}$
    
- Kinetic Energy of Recoil Electron ($K_e$):
    
    $$K_e = E_{photon} - E'_{photon} = hc \left( \frac{1}{\lambda} - \frac{1}{\lambda'} \right)$$
    
- Recoil Electron Relation (Q9 derivation):
    
    $$K_e = h\nu \frac{2\beta \sin^2(\theta/2)}{1 + 2\beta \sin^2(\theta/2)} \quad \text{where } \beta = \frac{h\nu}{m_0 c^2}$$
    

---

### **3. Photoelectric Effect (Q12-Q13)**

Einstein's Photoelectric Equation

$$K_{max} = h\nu - \Phi = \frac{hc}{\lambda} - \Phi$$

- $K_{max}$: Maximum kinetic energy of emitted electron
    
- $\Phi$: Work function of the material
    

Stopping Potential ($V_s$)

$$e V_s = K_{max} \implies V_s = \frac{hc}{e\lambda} - \frac{\Phi}{e}$$

Photoelectric Current

$$I = \frac{n \cdot e}{t}$$

- Where $n/t$ is the number of photoelectrons emitted per second.
    
- $n_{emitted} = (\text{Efficiency}) \times n_{photons}$.
    
- Number of incident photons per second = $\frac{\text{Power}_{incident}}{h\nu}$.
    

---

### **4. De Broglie Wavelength & Wave-Particle Duality (Q14-Q18, Q21, Q23)**

De Broglie Wavelength

$$\lambda = \frac{h}{p}$$

**Momentum ($p$) vs. Kinetic Energy ($K$)**

1. Non-Relativistic ($K \ll m_0 c^2$):
    
    $$p = \sqrt{2mK} \implies \lambda = \frac{h}{\sqrt{2mK}}$$
    
    - For electrons accelerated by potential $V$: $K = eV$
        
        $$\lambda = \frac{h}{\sqrt{2m_e eV}} \approx \frac{12.27}{\sqrt{V}} \mathring{A}$$
        
2. Relativistic ($K \sim m_0 c^2$ or higher):
    
    Total Energy $E_{tot} = K + m_0 c^2 = \sqrt{p^2 c^2 + m_0^2 c^4}$.
    
    $$pc = \sqrt{E_{tot}^2 - (m_0 c^2)^2} \implies \lambda = \frac{hc}{\sqrt{K(K + 2m_0 c^2)}}$$
    

**Diffraction (Davisson-Germer / Bragg)**

- Bragg's Law:
    
    $$2d \sin \phi = n\lambda \quad \text{(Here $\phi$ is glancing angle)}$$
    
- Electron Diffraction Geometry (Q21):
    
    For small angles and screen distance $L$:
    
    $$\tan(2\theta) = \frac{R}{L} \approx 2\theta \quad \text{(where $2\theta$ is deviation angle)}$$
    
    Use Bragg's law with the deviation angle relation to find $d$.
    

---

### **5. Phase and Group Velocity (Q17, Q19, Q22)**

**Definitions**

- Wave function: $y(x,t) = A \sin(kx - \omega t)$
    
- Phase Velocity ($v_{ph}$): Velocity of the ripples.
    
    $$v_{ph} = \frac{\omega}{k}$$
    
- Group Velocity ($v_{gr}$): Velocity of the packet/particle.
    
    $$v_{gr} = \frac{d\omega}{dk} = v_{particle}$$
    

Relation between $v_{ph}$ and $v_{gr}$

$$v_{gr} = v_{ph} - \lambda \frac{dv_{ph}}{d\lambda}$$

(Use this for Q19 involving water waves).

**Superposition (Q22)**

- $\sin A + \sin B = 2 \sin\left(\frac{A+B}{2}\right) \cos\left(\frac{A-B}{2}\right)$
    
- Resulting wave has:
    
    - Average Frequency: $\bar{\omega} = \frac{\omega_1 + \omega_2}{2}$
        
    - Modulation Frequency (Beats): $\Delta \omega = \omega_1 - \omega_2$
        

---

### **6. Heisenberg Uncertainty Principle (Q20, Q24-Q29)**

Position-Momentum Uncertainty

$$\Delta x \Delta p \geq \frac{\hbar}{2}$$

(Note: Some texts use $\Delta x \Delta p \approx h$ or $\approx \hbar$ for estimation problems. Based on Q29, use the standard QM inequality or equality for estimates).

Energy-Time Uncertainty

$$\Delta E \Delta t \geq \frac{\hbar}{2}$$

- Also relates to spectral line width: $\Delta E \approx \frac{\hbar}{\tau}$ (where $\tau$ is lifetime).
    

Estimation Applications (Q28, Q29)

To estimate Ground State Energy:

1. Assume $\Delta x \approx r$ (or $x$) and $\Delta p \approx \frac{\hbar}{r}$.
    
2. Substitute $p = \frac{\hbar}{r}$ into the Total Energy equation.
    
3. Minimize Energy ($dE/dr = 0$) to find optimal $r$.
    
    - **H-atom:** $E = \frac{p^2}{2m} - \frac{e^2}{4\pi\epsilon_0 r}$
        
    - **Harmonic Oscillator:** $E = \frac{p^2}{2m} + \frac{1}{2}m\omega^2 x^2$


### **I. Fundamental Quantum Operators**

These are the building blocks for calculating Expectation Values $\langle A \rangle = \int \psi^* \hat{A} \psi \, dx$.

|**Observable**|**Operator (A^)**|**Operation on ψ(x)**|
|---|---|---|
|**Position**|$\hat{x}$|Multiply by $x$|
|**Momentum**|$\hat{p}$|$-i\hbar \frac{\partial}{\partial x}$|
|**Kinetic Energy**|$\hat{K} = \frac{\hat{p}^2}{2m}$|$-\frac{\hbar^2}{2m} \frac{\partial^2}{\partial x^2}$|
|**Total Energy**|$\hat{H}$ (Hamiltonian)|$-\frac{\hbar^2}{2m} \frac{\partial^2}{\partial x^2} + V(x)$|
|**Momentum Sq.**|$\hat{p}^2$|$-\hbar^2 \frac{\partial^2}{\partial x^2}$|

**Uncertainty Formula (Q3):**

- **Variance:** $(\Delta A)^2 = \langle A^2 \rangle - \langle A \rangle^2$
    
- **Heisenberg Principle:** $\Delta x \Delta p \ge \frac{\hbar}{2}$
    

---

### **II. Infinite Potential Well (Particle in a Box)**

**Potential:** $V(x) = 0$ inside, $V = \infty$ outside.

#### **1. Box from $x=0$ to $x=a$**

- Wavefunction:
    
    $\psi_n(x) = \sqrt{\frac{2}{a}} \sin\left(\frac{n\pi x}{a}\right) \quad (n=1, 2, 3...)$
    
    - _Note:_ $\psi=0$ outside the box.
        
- Energy:
    
    $E_n = \frac{n^2 \pi^2 \hbar^2}{2ma^2}$
    
- Key Integrals (for Q1-Q3):
    
    Probability $P = \int_{x_1}^{x_2} |\psi|^2 dx = \frac{2}{a} \int_{x_1}^{x_2} \sin^2(kx) dx$.
    
    Hint: Use $\sin^2\theta = \frac{1}{2}(1 - \cos 2\theta)$.
    

#### **2. Symmetric Box from $x=-a/2$ to $x=a/2$ (Q6)**

- **Wavefunction:**
    
    - $n$ Odd (1, 3, 5): $\psi_n(x) = \sqrt{\frac{2}{a}} \cos\left(\frac{n\pi x}{a}\right)$
        
    - $n$ Even (2, 4, 6): $\psi_n(x) = \sqrt{\frac{2}{a}} \sin\left(\frac{n\pi x}{a}\right)$
        
- **Energy:** Same as above ($E_n = \frac{n^2 \pi^2 \hbar^2}{2ma^2}$).
    

---

### **III. Symmetric Finite Potential Well (Width $a$, Depth $V_0$)**

**System Setup**

- **Potential:** $V(x) = \begin{cases} 0 & -a/2 \le x \le a/2 \quad (\text{Region 2}) \\ V_0 & |x| > a/2 \quad (\text{Regions 1 \& 3}) \end{cases}$
    
- **Bound States:** Particle energy is trapped: $0 < E < V_0$.
    

1. Wave Constants & Dimensionless Parameters

To solve this graphically, we convert physical constants ($E, V_0$) into dimensionless geometric variables ($\alpha, R$).

- **Inside Wave Number ($k$):** $k = \frac{\sqrt{2mE}}{\hbar}$ (Related to kinetic energy)
    
- **Outside Decay Constant ($\kappa$):** $\kappa = \frac{\sqrt{2m(V_0 - E)}}{\hbar}$ (Related to binding energy)
    
- Dimensionless Variable ($\alpha$): Represents the phase inside the well.
    
    $$\alpha = \frac{ka}{2} = \frac{a\sqrt{2mE}}{2\hbar}$$
    
- Strength Parameter ($R$): Represents the "size" or "depth" of the well.
    
    $$R = \frac{a\sqrt{2mV_0}}{2\hbar}$$
    
    - _Relation:_ $\alpha^2 + (\frac{\kappa a}{2})^2 = R^2$ (Equation of a circle).
        

2. Wavefunction Regions (By Parity)

Because $V(x)$ is symmetric, solutions split into Even and Odd parity.

|**Region**|**Even Parity (Cosine-like)**|**Odd Parity (Sine-like)**|
|---|---|---|
|**Region 1** $(x < -a/2)$|$\psi_1(x) = B e^{\kappa x}$|$\psi_1(x) = -B e^{\kappa x}$|
|**Region 2** $(|x|\le a/2)$|
|**Region 3** $(x > a/2)$|$\psi_3(x) = B e^{-\kappa x}$|$\psi_3(x) = B e^{-\kappa x}$|
|_Note_|Tails have same sign.|Tails have opposite signs.|

3. Transcendental Equations (The Solutions)

By applying boundary conditions (continuity of $\psi$ and $\psi'$) and substituting $\alpha$ and $R$:

- Even States:
    
    $$\sqrt{R^2 - \alpha^2} = \alpha \tan(\alpha)$$
    
    - _Graphical meaning:_ Intersections of a circle radius $R$ with $\alpha \tan \alpha$.
        
- Odd States:
    
    $$\sqrt{R^2 - \alpha^2} = -\alpha \cot(\alpha)$$
    
    - _Graphical meaning:_ Intersections of a circle radius $R$ with $-\alpha \cot \alpha$.

---

### **IV. Step Potential ($V_0$ at $x=0$)**

#### **Case A: $E > V_0$ (Scattering)**

- **Regions:**
    
    - Region 1 ($x<0$): $\psi_1 = A e^{ik_1 x} + B e^{-ik_1 x}$ (Incident + Reflected)
        
    - Region 2 ($x>0$): $\psi_2 = C e^{ik_2 x}$ (Transmitted)
        
- Wave Vectors:
    
    $k_1 = \frac{\sqrt{2mE}}{\hbar}, \quad k_2 = \frac{\sqrt{2m(E - V_0)}}{\hbar}$
    
- **Coefficients (Q8):**
    
    - **Reflection ($R$):** $\left( \frac{k_1 - k_2}{k_1 + k_2} \right)^2$
        
    - **Transmission ($T$):** $\frac{4k_1 k_2}{(k_1 + k_2)^2}$
        
    - _Note:_ $R + T = 1$. $T$ is same whether incident from left or right.
        

#### **Case B: $E < V_0$ (Tunneling into Step)**

- **Regions:**
    
    - Region 1 ($x<0$): $\psi_1 = A e^{ik_1 x} + B e^{-ik_1 x}$
        
    - Region 2 ($x>0$): $\psi_2 = C e^{-\kappa x}$ (Decaying)
        
- Wave Vectors:
    
    $k_1 = \frac{\sqrt{2mE}}{\hbar}, \quad \kappa = \frac{\sqrt{2m(V_0 - E)}}{\hbar}$
    
- Penetration Depth (Q9):
    
    Probability Density $\rho(x) = |\psi_2|^2 \propto e^{-2\kappa x}$.
    
    Distance to drop by factor $F$: $e^{-2\kappa x} = F \implies x = \frac{\ln(1/F)}{-2\kappa}$.
    

---

### **V. Finite Potential Barrier**

**Potential:** $V_0$ for $0 < x < a$, zero elsewhere.

#### **Case A: $E < V_0$ (Tunneling)**

- **Wavefunction Forms:**
    
    - $x<0$: $e^{ikx} + r e^{-ikx}$
        
    - $0<x<a$: $A e^{\kappa x} + B e^{-\kappa x}$ (Exponential behavior)
        
    - $x>a$: $t e^{ikx}$
        
- Transmission Coefficient ($T$):
    
    $$T = \left[ 1 + \frac{V_0^2 \sinh^2(\kappa a)}{4E(V_0 - E)} \right]^{-1}$$
    
    Where $\kappa = \frac{\sqrt{2m(V_0 - E)}}{\hbar}$.
    
- Weak Tunneling Approximation ($\kappa a \gg 1$, Q11 hint):
    
    $$T \approx 16 \frac{E}{V_0} \left(1 - \frac{E}{V_0}\right) e^{-2\kappa a}$$
    
    Use this to solve for Energy $E$ when given $T$ (like 1% or 0.01).
    

#### **Case B: $E > V_0$ (Resonance)**

- **Wavefunction (Inside):** Oscillatory with $k' = \sqrt{2m(E-V_0)}/\hbar$.
    
- Transmission Coefficient ($T$):
    
    $$T = \left[ 1 + \frac{V_0^2 \sin^2(k' a)}{4E(E - V_0)} \right]^{-1}$$
    
- **Resonance:** $T=1$ perfectly when $k'a = n\pi$.
    

#### **Case C: $E = V_0$ (Special Case Q10)**

- The Schrodinger equation inside becomes $\frac{d^2\psi}{dx^2} = 0$.
    
- **Wavefunction:** Linear! $\psi_{in}(x) = Ax + B$.
    

---

### **VI. Linear Harmonic Oscillator (LHO)**

**Potential:** $V(x) = \frac{1}{2}m\omega^2 x^2$.

- Energy Eigenvalues (Q15):
    
    $$E_n = \left(n + \frac{1}{2}\right)\hbar \omega \quad (n = 0, 1, 2, \dots)$$
    
    For Half-Harmonic Oscillator (Q15): Only odd $n$ states ($1, 3, 5...$) exist because $\psi(0)$ must be 0 at the infinite wall.
    
- Wavefunction Formula:
    
    $$\psi_n(y) = N_n H_n(y) e^{-y^2/2}$$
    
    Where $y = x \sqrt{\frac{m\omega}{\hbar}}$ (Dimensionless position).
    $$H_n(\xi) = (-1)^n e^{\xi^2} \frac{d^n}{d\xi^n} \left( e^{-\xi^2} \right)$$
    
- **Hermite Polynomials ($H_n$):**
    
    - $n=0$ (Even): $H_0 = 1$
        
    - $n=1$ (Odd): $H_1 = 2y$
        
    - $n=2$ (Even): $H_2 = 4y^2 - 2$
        
- Expectation Value $\langle x \rangle$ (Q12):
    
    Due to Parity (Symmetry of the potential), $\langle x \rangle = 0$ for all stationary states.
    
    - Ground state ($n=0$) is Gaussian (Even).
        
    - First Excited ($n=1$) has two lobes (Odd).
        
    - $|\psi|^2$ is always symmetric about $x=0$.
        
- Probability (Q14):
    
    To find prob in $0 \le x \le \infty$:
    
    Since $|\psi|^2$ is symmetric, Probability is exactly 0.5 (50%).
    

### **VII. Superposition Shortcuts (Q17 Focus)**

1. Normalization: "Sum of Coefficients Squared = 1"

For any superposition state $\Psi = c_1 \psi_1 + c_2 \psi_2$, the sum of the probabilities must equal 1 (100%).

- Formula:
    
    $$|c_1|^2 + |c_2|^2 = 1$$
    
- Applying to Q17:
    
    The state is given as $\Psi = A\psi_1 + A\psi_2$1. Here, both coefficients are $A$.
    
    $$A^2 + A^2 = 1 \implies 2A^2 = 1 \implies A = \frac{1}{\sqrt{2}}$$
    
    2
    

2. Expected Energy ($\langle E \rangle$): "Weighted Average"

The expectation value is the average of the individual energy levels ($E_n$), weighted by their probability of occurring ($P_n$).

- Formula:
    
    $$P_n = |c_n|^2$$
    
    $$\langle E \rangle = P_1 E_1 + P_2 E_2$$
    
- Applying to Q17:
    
    Since $A = 1/\sqrt{2}$, the probability for each state is $P = (1/\sqrt{2})^2 = 1/2$.
    
    $$\langle E \rangle = \frac{1}{2}E_1 + \frac{1}{2}E_2$$
    
    - Using infinite well energies ($E_n \propto n^2$): $E_1$ and $E_2 = 4E_1$.
        
    - $\langle E \rangle = \frac{1}{2}(E_1 + 4E_1) = 2.5 E_1 = \frac{5h^2}{16ma^2}$