# Network Theorems - ECE Network Theory Lecture Notes

## **Topic: Superposition Principle (Weight: 3)**

The superposition principle states that in a linear circuit with multiple independent sources, the total response (current or voltage) at any element equals the algebraic sum of responses caused by each source acting independently while all other independent sources are deactivated. This fundamental theorem applies only to linear circuits containing resistors, capacitors, inductors, and dependent sources.

When applying superposition, voltage sources are replaced by short circuits (zero resistance) and current sources by open circuits (infinite resistance). Dependent sources remain active throughout the analysis since they depend on circuit variables.

**Key Implementation Steps:**

- Identify all independent sources in the circuit
    
- Calculate response due to each source separately with others deactivated
    
- Sum all individual responses algebraically (considering direction/polarity)
    
- Verify linearity conditions are satisfied
    

**Core Formula:** $V_{total} = V_1 + V_2 + ... + V_n$ where $V_i$ is response due to source $i$ alone

**Solved Example:**  
Consider a circuit with 12V voltage source and 3A current source. To find current through 4Ω resistor:

- Step 1: Deactivate current source (open circuit), calculate current due to 12V source
    
- Step 2: Deactivate voltage source (short circuit), calculate current due to 3A source
    
- Step 3: Sum the currents: $I_{total} = I_{12V} + I_{3A}$
    

**Limitations:**

- Applies only to linear circuits
    
- Cannot be used for power calculations directly (power is proportional to $I^2$ or $V^2$)
    
- Dependent sources must remain active
    

---

## **Topic: Maximum Power Transfer Theorem (Weight: 2)**

Maximum power transfer occurs when the load resistance equals the Thevenin resistance of the source network. Under this condition, exactly half the source power is delivered to the load, achieving maximum efficiency of 50%.

**Core Formula:** $R_L = R_{th}$ for maximum power transfer, where $P_{max} = \dfrac{V_{th}^2}{4R_{th}}$

**Key Points:**

- Maximum power transfer ≠ maximum efficiency
    
- Efficiency at maximum power transfer is always 50%
    
- Used in communication systems and amplifier design
    

**Simple Example:** If Thevenin equivalent shows $V_{th} = 20V$ and $R_{th} = 8Ω$, then $R_L = 8Ω$ gives $P_{max} = \dfrac{400}{32} = 12.5W$

---

## **Topic: Thevenin and Norton Theorem (Weight: 5)**

Thevenin's theorem states that any linear two-terminal network can be replaced by an equivalent circuit consisting of a voltage source $V_{th}$ in series with a resistance $R_{th}$. Norton's theorem provides the dual representation using a current source $I_N$ in parallel with the same resistance $R_N = R_{th}$. These theorems are fundamental for circuit analysis and design, enabling complex network simplification.

The Thevenin voltage represents the open-circuit voltage across the terminals, while Thevenin resistance is the equivalent resistance seen from the terminals when all independent sources are deactivated. Norton current equals the short-circuit current between the terminals.

**Conversion Relationships:**  
The two representations are electrically equivalent and interconvertible through source transformation principles. The relationship between parameters ensures identical terminal behavior under all loading conditions.

**Parameter Calculations:**

- $V_{th}$ = Open-circuit voltage across terminals A-B
    
- $R_{th}$ = Equivalent resistance from terminals A-B with sources deactivated
    
- $I_N$ = Short-circuit current from A to B
    
- $R_N = R_{th}$ (same resistance in both theorems)
    
- Conversion: $V_{th} = I_N \times R_{th}$ and $I_N = \dfrac{V_{th}}{R_{th}}$
    

**Detailed Derivation Steps:**

For Thevenin equivalent calculation:

- Remove the load and identify terminals A-B
    
- Calculate open-circuit voltage $V_{th}$ using circuit analysis techniques
    
- Deactivate all independent sources (short voltage sources, open current sources)
    
- Calculate equivalent resistance $R_{th}$ from terminals A-B
    
- Draw equivalent circuit: $V_{th}$ in series with $R_{th}$
    

For Norton equivalent calculation:

- Short-circuit terminals A-B and calculate current $I_N$
    
- Calculate $R_N$ same as $R_{th}$ above
    
- Draw equivalent circuit: $I_N$ in parallel with $R_N$
    

**Comprehensive Solved Example:**

Given circuit with 24V source, 6Ω and 4Ω resistors in series, with 12Ω resistor in parallel to 4Ω, find Thevenin equivalent:

Step 1: Remove load and find $V_{th}$

- Current in main branch: $I = \dfrac{24}{6 + (4||12)} = \dfrac{24}{6 + 3} = \dfrac{24}{9} = \dfrac{8}{3}A$
    
- Voltage across parallel combination: $V = \dfrac{8}{3} \times 3 = 8V$
    
- Therefore: $V_{th} = 8V$
    

Step 2: Find $R_{th}$

- Deactivate 24V source (short circuit)
    
- $R_{th} = 6 + (4||12) = 6 + \dfrac{48}{16} = 6 + 3 = 9Ω$
    

Step 3: Norton equivalent

- $I_N = \dfrac{V_{th}}{R_{th}} = \dfrac{8}{9}A$, $R_N = 9Ω$
    

**Source Transformation Table:**

|Thevenin Form|Norton Form|Conversion|
|---|---|---|
|$V_{th}$ series with $R_{th}$|$I_N$ parallel with $R_N$|$R_N = R_{th}$|
|Voltage source|Current source|$I_N = \dfrac{V_{th}}{R_{th}}$|
|Series resistance|Parallel resistance|$V_{th} = I_N \times R_{th}$|

**Special Cases and Variations:**

- When $R_{th} = 0$: Ideal voltage source (Norton has infinite current source)
    
- When $R_{th} = \infty$: Ideal current source (Thevenin has infinite voltage source)
    
- For circuits with dependent sources: Use test source method or inspection
    
- AC circuits: Replace resistances with impedances $Z_{th}$, voltages with phasors
    

**Common Pitfalls:**

- Forgetting to deactivate dependent sources when calculating $R_{th}$
    
- Incorrect polarity assignment for $V_{th}$
    
- Using load current instead of short-circuit current for $I_N$
    
- Applying theorem to nonlinear circuits
    

---

## **Topic: Tellegen's Theorem (Weight: 5)**

Tellegen's theorem states that for any lumped network satisfying Kirchhoff's laws, the sum of instantaneous powers delivered to all branches equals zero at every instant of time. This fundamental theorem applies to both linear and nonlinear circuits, making it one of the most general theorems in circuit theory. Mathematically: $\sum_{k=1}^{n} v_k(t) \cdot i_k(t) = 0$ where $v_k(t)$ and $i_k(t)$ are the voltage and current of the $k$-th branch.

The theorem represents conservation of energy in electrical circuits and provides a powerful tool for circuit analysis verification. It applies regardless of the nature of circuit elements (linear, nonlinear, time-varying, or memory elements) as long as the circuit satisfies Kirchhoff's current and voltage laws.

**Physical Significance and Energy Conservation:**  
Tellegen's theorem embodies the principle of energy conservation in electrical systems. The algebraic sum of powers represents the balance between power generated (positive values) and power consumed (negative values). Sources deliver power while passive elements absorb power, maintaining overall energy balance.

**Mathematical Foundation:**

- Branch voltage: $v_k(t)$ across branch $k$
    
- Branch current: $i_k(t)$ through branch $k$
    
- Instantaneous power: $p_k(t) = v_k(t) \cdot i_k(t)$
    
- Power conservation: $\sum_{k=1}^{n} p_k(t) = 0$
    
- Sign convention: Associated reference directions for voltage and current
    
- Generalized form: $\mathbf{v}^T \mathbf{i} = 0$ where $\mathbf{v}$ and $\mathbf{i}$ are voltage and current vectors
    

**Rigorous Derivation Steps:**

Starting from Kirchhoff's laws in matrix form:

- KCL in matrix form: $\mathbf{A} \mathbf{i} = 0$ where $\mathbf{A}$ is incidence matrix
    
- KVL in matrix form: $\mathbf{A}^T \mathbf{v} = 0$ where $\mathbf{v}$ is branch voltage vector
    
- Pre-multiply KCL by $\mathbf{v}^T$: $\mathbf{v}^T \mathbf{A} \mathbf{i} = 0$
    
- Since $\mathbf{A}^T \mathbf{v} = 0$, we have $\mathbf{v}^T \mathbf{A} = 0$
    
- Therefore: $\mathbf{v}^T \mathbf{i} = \sum_{k=1}^{n} v_k i_k = 0$
    

**Detailed Solved Example:**

Consider a circuit with three branches: 10V source with 2A current, 5Ω resistor with 1A current, and 3Ω resistor with 1A current.

Step 1: Identify branch powers

- Branch 1 (source): $p_1 = 10V \times 2A = 20W$ (delivered)
    
- Branch 2 (5Ω resistor): $p_2 = (1A)^2 \times 5Ω = 5W$ (absorbed)
    
- Branch 3 (3Ω resistor): $p_3 = (1A)^2 \times 3Ω = 3W$ (absorbed)
    

Step 2: Apply Tellegen's theorem

- Power delivered by source: $+20W$
    
- Power absorbed by resistors: $-5W - 3W = -8W$
    
- Total power: $20 - 5 - 3 = 12W ≠ 0$
    

Step 3: Check for errors

- Verify KCL and KVL compliance
    
- Correct current directions and magnitudes
    
- Recalculate with proper sign conventions
    

**Extended Applications:**

- Network sensitivity analysis using adjoint networks
    
- Verification of computer-aided circuit analysis results
    
- Proof of reciprocity in linear networks
    
- Development of other network theorems
    
- Power balance checking in complex circuits
    

**Generalized Tellegen's Theorem:**  
For two different networks with identical topology but different element values, if voltages ${v_k}$ exist in network 1 and currents ${i_k'}$ exist in network 2, then $\sum v_k i_k' = 0$. This extends the theorem's utility to network comparison and sensitivity analysis.

**Comparison Table:**

|Property|Tellegen's Theorem|Other Network Theorems|
|---|---|---|
|Applicability|All lumped circuits|Mostly linear circuits|
|Element types|Linear, nonlinear, time-varying|Primarily linear|
|Mathematical basis|KCL + KVL only|Specific element relations|
|Power relationship|Direct power balance|Indirect through currents/voltages|

**Advanced Variations:**

- AC circuits: $\sum_{k=1}^{n} \Re[V_k I_k^*] = 0$ for average power
    
- Complex power: $\sum_{k=1}^{n} V_k I_k^* = 0$ for phasor domain
    
- Non-sinusoidal: Applies to instantaneous values at each time point
    
- Distributed circuits: Requires modification for transmission line effects
    

**Common Application Errors:**

- Incorrect sign assignment for power calculation
    
- Neglecting reference direction consistency
    
- Applying to circuits violating KCL or KVL
    
- Confusion between instantaneous and average power in AC analysis
    

---

## **Key Takeaways**

- **Superposition:** Only for linear circuits; responses add algebraically, but power calculations require special handling
    
- **Maximum Power Transfer:** Load resistance equals source resistance for maximum power; efficiency is 50%
    
- **Thevenin/Norton:** Any linear two-terminal network reduces to simple equivalent; interconvertible through $V_{th} = I_N R_{th}$
    
- **Tellegen's:** Universal power balance theorem; $\sum v_k i_k = 0$ applies to all lumped circuits satisfying KCL/KVL
    
- **Sign Conventions:** Critical for correct application; consistent reference directions prevent calculation errors