# Amplitude Modulation (AM)

Amplitude Modulation is a modulation technique where the amplitude of a high-frequency carrier signal is varied in accordance with the instantaneous amplitude of a lower-frequency message signal. The frequency and phase of the carrier signal remain constant.

## Standard AM (DSB-FC)

Standard AM, also known as Double-Sideband Full Carrier (DSB-FC), is the most common form of AM.

### Time-Domain Representation

Let the message signal be $m(t)$ and the carrier signal be $c(t) = A_c \cos(2\pi f_c t)$. The time-domain expression for a standard AM signal is:

$$ s(t) = A_c [1 + k_a m(t)] \cos(2\pi f_c t) $$

Where:
- $A_c$: Carrier amplitude
- $f_c$: Carrier frequency
- $k_a$: Amplitude sensitivity of the modulator (a constant)
- $m(t)$: Message signal (baseband)

The term $A_c [1 + k_a m(t)]$ is the **envelope** of the AM signal. For successful demodulation using a simple envelope detector, this envelope must always be non-negative. This leads to the condition:

$$ 1 + k_a m(t) \ge 0 \quad \forall t $$

If $A_m = \max(|m(t)|)$, the condition becomes $1 - k_a A_m \ge 0$.

#### Modulation Index ($\mu$)
The **modulation index** is a measure of how much the carrier amplitude varies. It is defined as:

$$ \mu = k_a A_m $$

Based on the value of $\mu$, we have three cases:
1.  **Under-modulation ($\mu < 1$):** The envelope never reaches zero. This is the desired condition for standard AM broadcasting.
2.  **Critical modulation ($\mu = 1$):** The envelope touches zero at the negative peaks of the message signal.
3.  **Over-modulation ($\mu > 1$):** The envelope crosses zero, causing phase reversal and distortion. This makes it impossible to recover the original message using an envelope detector.

<svg width="600" height="250" xmlns="http://www.w3.org/2000/svg"><style>.axis{stroke:#555;stroke-width:1}.grid{stroke:#ddd;stroke-width:.5}.signal{stroke:#007bff;stroke-width:1.5;fill:none}.envelope{stroke:#ff6347;stroke-width:1;stroke-dasharray:4 2;fill:none}.label{font-family:Arial,sans-serif;font-size:12px;fill:#333}</style><line class="axis" x1="50" y1="100" x2="550" y2="100"/><line class="axis" x1="50" y1="20" x2="50" y2="180"/><text x="555" y="105" class="label">t</text><text x="40" y="15" class="label">s(t)</text><path id="am-wave" class="signal" d="M 50 100 C 60 20, 90 20, 100 100 S 140 180, 150 100 C 160 20, 190 20, 200 100 S 240 180, 250 100 C 260 20, 290 20, 300 100 S 340 180, 350 100 C 360 20, 390 20, 400 100 S 440 180, 450 100 C 460 20, 490 20, 500 100 S 540 180, 550 100"/><path id="envelope-upper" class="envelope" d="M 50 100 Q 100 20, 150 100 Q 200 180, 250 100 Q 300 20, 350 100 Q 400 180, 450 100 Q 500 20, 550 100"/><path id="envelope-lower" class="envelope" d="M 50 100 Q 100 180, 150 100 Q 200 20, 250 100 Q 300 180, 350 100 Q 400 20, 450 100 Q 500 180, 550 100"/><text x="300" y="210" class="label" text-anchor="middle">Time-Domain AM Signal (Under-modulated)</text></svg>

### Frequency-Domain Representation

To find the spectrum, we take the Fourier Transform of $s(t)$:
$$ S(f) = \mathcal{F}\{A_c \cos(2\pi f_c t) + A_c k_a m(t) \cos(2\pi f_c t)\} $$

Using the Fourier transform properties for cosine and multiplication:
$$ \mathcal{F}\{A_c \cos(2\pi f_c t)\} = \frac{A_c}{2}[\delta(f-f_c) + \delta(f+f_c)] $$
$$ \mathcal{F}\{m(t) \cos(2\pi f_c t)\} = \frac{1}{2}[M(f-f_c) + M(f+f_c)] $$

Combining these, we get the spectrum of the AM signal:
$$ S(f) = \underbrace{\frac{A_c}{2}[\delta(f-f_c) + \delta(f+f_c)]}_{\text{Carrier}} + \underbrace{\frac{A_c k_a}{2}[M(f-f_c) + M(f+f_c)]}_{\text{Sidebands}} $$

The spectrum consists of:
1.  **Carrier:** Two impulses at $\pm f_c$.
2.  **Upper Sideband (USB):** The message spectrum $M(f)$ shifted to $\pm f_c$, occupying the frequency range $[f_c, f_c+W]$ and $[-f_c-W, -f_c]$.
3.  **Lower Sideband (LSB):** The message spectrum $M(f)$ flipped and shifted to $\pm f_c$, occupying $[f_c-W, f_c]$ and $[-f_c, -f_c+W]$.

The **bandwidth** of an AM signal is twice the bandwidth of the message signal: $BW_{AM} = 2W$.

<svg width="600" height="250" xmlns="http://www.w3.org/2000/svg"><style>.axis{stroke:#555;stroke-width:1}.spectrum{stroke:#007bff;stroke-width:1.5;fill:#007bff33}.carrier{stroke:#dc3545;stroke-width:2}.label{font-family:Arial,sans-serif;font-size:12px;fill:#333}</style><line class="axis" x1="50" y1="150" x2="550" y2="150"/><line class="axis" x1="300" y1="50" x2="300" y2="160"/><text x="555" y="155" class="label">f</text><text x="290" y="45" class="label">|S(f)|</text><text x="300" y="165" class="label" text-anchor="middle">0</text><line class="carrier" x1="400" y1="150" x2="400" y2="70"/><path d="M 400 70 L 395 80 L 405 80 Z" fill="#dc3545"/><text x="400" y="165" class="label" text-anchor="middle">f_c</text><line class="carrier" x1="200" y1="150" x2="200" y2="70"/><path d="M 200 70 L 195 80 L 205 80 Z" fill="#dc3545"/><text x="200" y="165" class="label" text-anchor="middle">-f_c</text><path class="spectrum" d="M 400 150 L 420 120 L 440 150 Z"/><text x="420" y="175" class="label" text-anchor="middle">USB</text><path class="spectrum" d="M 360 150 L 380 120 L 400 150 Z"/><text x="380" y="175" class="label" text-anchor="middle">LSB</text><path class="spectrum" d="M 160 150 L 180 120 L 200 150 Z"/><path class="spectrum" d="M 200 150 L 220 120 L 240 150 Z"/><text x="300" y="220" class="label" text-anchor="middle">Frequency Spectrum of an AM Signal</text></svg>

### Power Relations

The total power of the AM signal $P_t$ is the sum of the carrier power ($P_c$) and the sideband power ($P_{sb}$).

$$ P_t = \frac{1}{R} \lim_{T\to\infty} \frac{1}{T} \int_{-T/2}^{T/2} s^2(t) dt $$

Assuming $R=1\Omega$ for simplicity:

*   **Carrier Power ($P_c$):** Power of the term $A_c \cos(2\pi f_c t)$.
    $$ P_c = \frac{A_c^2}{2} $$
*   **Sideband Power ($P_{sb}$):** Power of the term $A_c k_a m(t) \cos(2\pi f_c t)$.
    $$ P_{sb} = \frac{(A_c k_a)^2}{2} P_m $$
    where $P_m$ is the power of the message signal $m(t)$.

The total power is:
$$ P_t = P_c + P_{sb} = \frac{A_c^2}{2} + \frac{A_c^2 k_a^2 P_m}{2} = P_c(1 + k_a^2 P_m) $$

For single-tone modulation, $m(t) = A_m \cos(2\pi f_m t)$, the message power is $P_m = A_m^2/2$. The modulation index is $\mu = k_a A_m$.

$$ P_t = P_c \left(1 + \frac{k_a^2 A_m^2}{2}\right) = P_c \left(1 + \frac{\mu^2}{2}\right) $$

The sideband power is split equally between the USB and LSB:
$$ P_{USB} = P_{LSB} = \frac{P_{sb}}{2} = \frac{P_c \mu^2}{4} $$

**Transmission Efficiency ($\eta$):** The ratio of useful power (sideband power) to total power.
$$ \eta = \frac{P_{sb}}{P_t} = \frac{P_c(\mu^2/2)}{P_c(1 + \mu^2/2)} = \frac{\mu^2}{2 + \mu^2} $$
For $\mu=1$ (100% modulation), the maximum efficiency is $\eta = \frac{1}{2+1} = \frac{1}{3}$ or 33.3%. This shows that at least 2/3 of the power is wasted in the carrier.

## Double-Sideband Suppressed Carrier (DSB-SC)

To improve power efficiency, the carrier component can be suppressed. This is called DSB-SC modulation.

*   **Time-Domain:** $s(t) = A_c m(t) \cos(2\pi f_c t)$
*   **Frequency-Domain:** $S(f) = \frac{A_c}{2}[M(f-f_c) + M(f+f_c)]$

DSB-SC is more power-efficient as no power is wasted in the carrier, but its demodulation is more complex, requiring a coherent detector.

---

## AM Modulators

### 1. Switching Modulator

A switching modulator generates an AM wave by multiplying the message signal with a periodic pulse train, followed by a bandpass filter.

The diode acts as a switch. When $c(t) > 0$, the diode is ON (short circuit). When $c(t) < 0$, it's OFF (open circuit). The output across the load is then passed through a bandpass filter centered at $f_c$ to extract the AM signal.

<svg width="450" height="250" xmlns="http://www.w3.org/2000/svg"><style>.wire{stroke:black;stroke-width:2;fill:none}.component-stroke{stroke:black;stroke-width:2;fill:none}.component-fill{stroke:black;stroke-width:2;fill:white}.label{font-family:'Arial',sans-serif;font-size:16px;text-anchor:middle}</style><path class="wire" d="M 20 100 L 60 100"/><text x="40" y="90" class="label">v_1(t)</text><text x="40" y="120" class="label">[A_c+m(t)]</text><path class="wire" d="M 60 100 L 100 100"/><path class="component-fill" d="M 100 85 L 100 115 L 130 100 Z"/><line class="component-stroke" x1="130" y1="85" x2="130" y2="115"/><path class="wire" d="M 130 100 L 150 100"/><circle cx="180" cy="100" r="25" class="component-fill"/><path class="component-stroke" d="M 165 100 Q 180 85, 195 100"/><path class="component-stroke" d="M 165 100 Q 180 115, 195 100" transform="rotate(180 180 100)"/><text x="180" y="140" class="label">c(t)</text><path class="wire" d="M 150 100 L 155 100"/><path class="wire" d="M 205 100 L 220 100"/><path class="wire" d="M 220 100 L 250 100"/><rect x="250" y="80" width="80" height="40" class="component-fill"/><text x="290" y="105" class="label">BPF</text><path class="wire" d="M 330 100 L 360 100"/><text x="380" y="90" class="label">s(t)</text><path class="wire" d="M 20 100 L 20 180"/><path class="wire" d="M 20 180 L 360 180"/><path class="wire" d="M 360 100 L 360 180"/><line x1="190" y1="180" x2="190" y2="200" stroke="black" stroke-width="2"/><line x1="175" y1="200" x2="205" y2="200" stroke="black" stroke-width="2"/><line x1="180" y1="205" x2="200" y2="205" stroke="black" stroke-width="2"/><line x1="185" y1="210" x2="195" y2="210" stroke="black" stroke-width="2"/></svg>

### 2. Ring Modulator (for DSB-SC)
A ring modulator uses four diodes in a ring configuration to multiply the message signal $m(t)$ with a square wave carrier $c(t)$. It is a balanced modulator, meaning it suppresses the carrier.

<svg width="500" height="300" xmlns="http://www.w3.org/2000/svg"><style>.wire{stroke:black;stroke-width:2;fill:none}.component-stroke{stroke:black;stroke-width:2;fill:none}.component-fill{stroke:white;stroke-width:2;stroke:black}.label{font-family:Arial,sans-serif;font-size:16px;text-anchor:middle}.diode{fill:white;stroke:black;stroke-width:2}</style><circle cx="80" cy="150" r="10" class="component-stroke"/><text x="40" y="155" class="label">m(t)</text><path class="wire" d="M 20 150 L 70 150"/><path class="wire" d="M 90 150 L 120 150"/><path class="wire" d="M 120 150 L 120 80"/><path class="wire" d="M 120 150 L 120 220"/><path class="diode" d="M 120 80 L 150 60 L 180 80 Z"/><path class="diode" d="M 280 80 L 310 60 L 340 80 Z"/><path class="diode" d="M 180 220 L 150 240 L 120 220 Z"/><path class="diode" d="M 340 220 L 310 240 L 280 220 Z"/><path class="wire" d="M 180 80 L 280 80"/><path class="wire" d="M 180 220 L 280 220"/><path class="wire" d="M 120 220 L 120 80"/><path class="wire" d="M 340 220 L 340 80"/><circle cx="230" cy="40" r="10" class="component-stroke"/><text x="230" y="25" class="label">c(t)</text><path class="wire" d="M 230 50 L 230 80"/><circle cx="230" cy="260" r="10" class="component-stroke"/><path class="wire" d="M 230 220 L 230 250"/><path class="wire" d="M 340 80 L 340 150"/><path class="wire" d="M 340 220 L 340 150"/><path class="wire" d="M 340 150 L 380 150"/><circle cx="390" cy="150" r="10" class="component-stroke"/><path class="wire" d="M 400 150 L 480 150"/><text x="440" y="140" class="label">s(t)</text></svg>

The carrier signal $c(t)$ acts as a switch. When $c(t)$ is positive, diodes D1 and D2 conduct. When $c(t)$ is negative, D3 and D4 conduct. This effectively multiplies $m(t)$ by a square wave at frequency $f_c$, and the output is a DSB-SC signal.

---

## AM Demodulators

### 1. Envelope Detector

This is a simple, non-coherent demodulator used for standard AM (DSB-FC) signals where $\mu \le 1$. It consists of a diode and a low-pass RC filter.

```mermaid
graph TD
    A[s(t)] --> B(Diode)
    B --> C(Low-Pass Filter)
    C --> D[m(t)]
```

<svg width="450" height="250" xmlns="http://www.w3.org/2000/svg">
    <style>
        .wire { stroke: black; stroke-width: 2; fill: none; }
        .component-stroke { stroke: black; stroke-width: 2; fill: none; }
        .component-fill { stroke: black; stroke-width: 2; fill: white; }
        .label { font-family: 'Arial', sans-serif; font-size: 16px; text-anchor: middle; }
        .ground { stroke: black; stroke-width: 2; fill: none; }
    </style>

    <!-- Input -->
    <path class="wire" d="M 20 100 L 80 100" />
    <text x="50" y="90" class="label">s(t)</text>

    <!-- Diode -->
    <path class="component-fill" d="M 80 85 L 80 115 L 110 100 Z" />
    <line class="component-stroke" x1="110" y1="85" x2="110" y2="115" />
    <path class="wire" d="M 110 100 L 200 100" />

    <!-- RC Filter -->
    <g id="capacitor">
        <path class="wire" d="M 200 100 L 200 135" />
        <line class="component-stroke" x1="185" y1="135" x2="215" y2="135" />
        <line class="component-stroke" x1="185" y1="145" x2="215" y2="145" />
        <path class="wire" d="M 200 145 L 200 180" />
        <text x="230" y="140" class="label">C</text>
    </g>
    <g id="resistor">
        <path class="wire" d="M 200 100 L 280 100" />
        <path class="component-stroke" d="M 280 100 L 285 95 L 295 105 L 305 95 L 315 105 L 320 100 L 340 100" />
        <text x="300" y="85" class="label">R</text>
    </g>

    <!-- Output -->
    <path class="wire" d="M 340 100 L 380 100" />
    <text x="400" y="90" class="label">v_o(t)</text>

    <!-- Ground -->
    <path class="wire" d="M 20 100 L 20 180" />
    <path class="wire" d="M 20 180 L 380 180" />
    <path class="wire" d="M 380 100 L 380 180" />
    <line class="ground" x1="200" y1="180" x2="200" y2="200" />
    <line class="ground" x1="185" y1="200" x2="215" y2="200" />
    <line class="ground" x1="190" y1="205" x2="210" y2="205" />
</svg>

The diode rectifies the AM signal. The RC circuit acts as a low-pass filter, with a time constant $\tau = RC$ chosen such that:
$$ \frac{1}{f_c} \ll RC \ll \frac{1}{W} $$
This allows the capacitor to charge up to the peak of the carrier cycles and then discharge slowly, following the envelope of the AM signal.

### 2. Coherent (Synchronous) Detector

Coherent detection is required for DSB-SC signals and can also be used for standard AM. It requires a local oscillator at the receiver that is perfectly synchronized in phase and frequency with the carrier signal used at the transmitter.

```mermaid
graph TD
    A[s(t)] --> B{Multiplier};
    C[Local Oscillator<br>cos(2πf_c t)] --> B;
    B --> D[Low-Pass Filter];
    D --> E[v_o(t) ∝ m(t)];
```

**Derivation:**
The input to the LPF is $v(t) = s(t) \cos(2\pi f_c t)$.
For DSB-SC, $s(t) = A_c m(t) \cos(2\pi f_c t)$.
$$ v(t) = A_c m(t) \cos^2(2\pi f_c t) = A_c m(t) \left[\frac{1}{2} + \frac{1}{2}\cos(4\pi f_c t)\right] $$
$$ v(t) = \frac{A_c}{2} m(t) + \frac{A_c}{2} m(t) \cos(4\pi f_c t) $$
The low-pass filter removes the high-frequency component at $2f_c$, leaving the output:
$$ v_o(t) = \frac{A_c}{2} m(t) $$

**Phase Error:** If the local oscillator has a phase error $\phi$, i.e., it is $\cos(2\pi f_c t + \phi)$, the output becomes:
$$ v_o(t) = \frac{A_c}{2} m(t) \cos(\phi) $$
If $\phi = \pi/2$ (quadrature null effect), the output is zero, and the signal is lost.

### 3. Costas Receiver (for DSB-SC)

The Costas receiver is a sophisticated form of coherent detector that simultaneously demodulates the signal and generates a phase-correct local carrier from the received DSB-SC signal itself. It uses a phase-locked loop (PLL).

```mermaid
graph TD
    subgraph Costas Loop
        A[s(t)] --> B1{Multiplier};
        A --> B2{Multiplier};
        
        VCO[VCO] --> B1;
        VCO --> P90(90° Phase Shift) --> B2;

        B1 --> LPF1(Low-Pass Filter);
        B2 --> LPF2(Low-Pass Filter);

        LPF1 --> PM{Phase<br>Discriminator};
        LPF2 --> PM;

        PM --> LF(Loop Filter);
        LF --> VCO;

        LPF1 --> Out[Output ∝ m(t)];
    end

```

The loop works to minimize the phase error between the incoming carrier and the VCO. When the loop is locked, the I-channel (in-phase) output provides the demodulated message signal.

---

## Quadrature Carrier Multiplexing (QCM)

QCM, also known as Quadrature Amplitude Modulation (QAM) in its digital form, is a technique that allows two different message signals to be transmitted simultaneously on the same carrier frequency. This is achieved by using two carrier signals of the same frequency but in phase quadrature (90° out of phase).

### Transmitter

```mermaid
graph TD
    m1[m₁(t)] --> M1{Multiplier};
    C[Carrier<br>cos(2πf_c t)] --> M1;
    C --> P90(90° Phase Shift);
    P90 --> M2{Multiplier};
    m2[m₂(t)] --> M2;
    
    M1 --> Adder;
    M2 --> Adder;
    
    Adder --> s(t);
```

The transmitted signal is:
$$ s(t) = A_c m_1(t) \cos(2\pi f_c t) - A_c m_2(t) \sin(2\pi f_c t) $$

### Receiver

The receiver uses two separate coherent detectors with quadrature local carriers to separate the two message signals.

```mermaid
graph TD
    s_t[s(t)] --> M1{Multiplier};
    s_t --> M2{Multiplier};

    LO[Local Oscillator<br>cos(2πf_c t)] --> M1;
    LO --> P90(90° Phase Shift);
    P90 --> M2;

    M1 --> LPF1(Low-Pass Filter) --> m1_out[m'₁(t)];
    M2 --> LPF2(Low-Pass Filter) --> m2_out[m'₂(t)];
```

This technique effectively doubles the bandwidth efficiency compared to standard DSB modulation.