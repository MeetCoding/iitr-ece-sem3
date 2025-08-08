<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

# Lecture Notes: Network Theory

## Subject: Electronics and Communication Engineering

## 1. Dependent Sources

Dependent sources are active circuit elements whose values depend on voltage or current elsewhere in the circuit. They are used to model transistors, operational amplifiers, and controlled signal sources.

### Types of Dependent Sources:

#### - Voltage Controlled Voltage Source (VCVS)

- **Symbol:** Diamond with a plus and minus sign.
- **Output voltage** is proportional to a controlling voltage elsewhere:$V_{out} = \mu V_x$, where$\mu$is the gain and$V_x$is the controlling voltage.
- **Application:** Used to model amplifiers.


#### - Undermeasuring of Voltage When Using Non-Ideal Voltmeter

- **Non-ideal voltmeter** has finite (not infinite) input resistance.
- When connected across a component, it forms a parallel network, drawing some current and **undermeasuring** the actual voltage.
- **Ideal voltmeter:** Infinite resistance, zero current drawn, accurate measurement.


#### - Voltage Controlled Current Source (VCCS)

- **Output current** depends on some controlling voltage:$I_{out} = gV_x$, where$g$is the transconductance and$V_x$is the controlling voltage.
- **Example:** Field Effect Transistors.


#### - Current Controlled Voltage Source (CCVS)

- **Output voltage** depends on a controlling current:$V_{out} = rI_x$, where$r$is a proportionality constant and$I_x$the controlling current.


#### - Current Controlled Current Source (CCCS)

- **Output current** proportional to a control current:$I_{out} = \beta I_x$, where$\beta$is the gain.


## 2. Power Dissipation in a Resistor

The **instantaneous power** dissipated by a resistor is:

$$
P(t) = V(t)I(t)
$$

By Ohm’s law,$V = IR$, so:

$$
P(t) = V(t)I(t) = \frac{V^2(t)}{R} = I^2(t)R
$$

- **$V(t)$:** Voltage across resistor at time t.
- **$I(t)$:** Current through resistor at time t.
- **R:** Resistance (Ohms).
- Power is **always positive** in a resistor, indicating energy _dissipation_ (never generation).


## 3. Series and Parallel Combinations

### - **Resistors**

| Connection | Equivalent Resistance Formula |
| :-- | :-- |
| Series |$R_{eq} = R_1 + R_2 + ...$|
| Parallel |$\frac{1}{R_{eq}} = \frac{1}{R_1}+\frac{1}{R_2}+...$|

### - **Capacitors**

| Connection | Equivalent Capacitance Formula |
| :-- | :-- |
| Series |$\frac{1}{C_{eq}} = \frac{1}{C_1}+\frac{1}{C_2}+...$|
| Parallel |$C_{eq} = C_1+C_2+...$|

### - **Inductors**

| Connection | Equivalent Inductance Formula |
| :-- | :-- |
| Series |$L_{eq}=L_1+L_2+...$|
| Parallel |$\frac{1}{L_{eq}}=\frac{1}{L_1}+\frac{1}{L_2}+...$|

### - **Voltage Sources**

**In Series:** Add algebraically$V_{eq}=V_1+V_2+...$.
**In Parallel:** Invalid/unreliable unless all voltages are strictly equal; causes conflict/overheating.

### - **Current Sources**

**In Parallel:** Add algebraically$I_{eq}=I_1+I_2+...$
**In Series:** Invalid/unreliable unless all currents are equal; can cause instability.

## 4. Conventions of Power (Dissipating or Generating)

- **Passive sign convention:** Power is *positive* if current enters the positive terminal—component is dissipating power (resistor, inductor, capacitor).
- **Active devices** (sources): Power is *negative* (they supply/generate power)—current leaves positive terminal.
- **Power absorbed (dissipated):**$P > 0$
- **Power delivered (generated):**$P < 0$


## 5. Superposition Principle

The **superposition principle** applies only to linear circuits (where resistor, inductor, capacitor behaviors are linear). For a circuit with multiple independent sources:

- Analyze the circuit with ONLY ONE independent source at a time (turn off all others: replace voltage sources with short circuits, current sources with open circuits).
- Solve for desired voltage/current.
- **Resulting response** is the **sum** of individual responses from each source acting alone.

*Key point:* Dependent sources are NEVER turned off during superposition analysis.

### **Summary Table: Combinations**

| Element | Series | Parallel |
| :-- | :-- | :-- |
| Resistor |$R_{eq} = R_1+...$|$1/R_{eq}=1/R_1+...$|
| Capacitor |$1/C_{eq}=1/C_1+...$|$C_{eq}=C_1+...$|
| Inductor |$L_{eq}=L_1+...$|$1/L_{eq}=1/L_1+...$|
| Voltage Src | Valid, add voltages | Invalid (unless same voltage) |
| Current Src | Invalid (unless same) | Valid, add currents |

**Key Takeaways:**

- Understand what dependent sources represent and their circuit symbols.
- Apply correct formulas for resistor, capacitor, and inductor combinations.
- Always use passive sign conventions to avoid sign confusion in power.
- Superposition only works for linear circuits and independent sources.

