<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

# Communication Systems Cheatsheet: Key Notations, Formulas, and Definitions

This concise reference summarizes the essential concepts, notations, and formulas related to baseband and bandpass signals, complex envelope theory, in-phase and quadrature decomposition, modulation/demodulation, and signal recovery. It is designed as a comprehensive guide to solving most standard questions in these topics.

## **1. Notations**

| Symbol            | Meaning                                                              |
| :---------------- | :------------------------------------------------------------------- |
|$m(t)$         | Real baseband (message) signal                                       |
|$g_I(t)$       | In-phase component of signal (real, baseband)                        |
|$g_Q(t)$       | Quadrature component of signal (real, baseband)                      |
|$\tilde{g}(t)$ | Complex envelope (baseband equivalent signal),$g_I(t) + jg_Q(t)$ |
|$g(t)$         | Bandpass (modulated) signal (real, passband)                         |
|$f_c$          | Carrier frequency (Hz)                                               |
|$r(t)$         | Received signal at the antenna (real, typically$g(t)$plus noise) |
|$LPF[\cdot]$   | Ideal low-pass filter operation                                      |
|$\Re\{\cdot\}$ | Real part of a complex number                                        |
|$j$            | Imaginary unit ($\sqrt{-1}$)                                      |
|$A(t)$         | Instantaneous amplitude (envelope) of the complex baseband signal    |
|$\phi(t)$      | Instantaneous phase of the complex baseband signal                   |

## **2. Fundamental Definitions \& Formulas**

### **Baseband Signal**

- The original information signal (e.g., your voice), typically denoted$m(t)$, is real-valued and low-frequency.


### **Complex Envelope**

- **Definition:** The baseband equivalent of a real bandpass signal.
- **Formula:**$\tilde{g}(t) = g_I(t) + j g_Q(t)$
- **Role:** Contains all amplitude and phase information of the original signal.


### **Bandpass Signal Canonical Form**

-$g(t) = g_I(t)\cos(2\pi f_c t) - g_Q(t)\sin(2\pi f_c t)$
- Or, equivalently,$g(t) = \Re\{\tilde{g}(t) e^{j2\pi f_c t}\}$


### **In-Phase and Quadrature Components**

- **In-phase**:$g_I(t)$— aligned with cosine carrier
- **Quadrature**:$g_Q(t)$— aligned with sine carrier (90° out of phase with cosine)


### **Up-Conversion (Modulation)**

- Shift baseband to bandpass for transmission:

$$
g(t) = \Re\{\tilde{g}(t) e^{j2\pi f_c t}\}
$$

$$
\Rightarrow g(t) = g_I(t)\cos(2\pi f_c t) - g_Q(t)\sin(2\pi f_c t)
$$


### **Down-Conversion (Coherent Demodulation)**

- **To recover$g_I(t)$:**

$$
\widehat{g}_I(t) = 2 \cdot LPF[ r(t) \cos(2\pi f_c t) ]
$$
- **To recover$g_Q(t)$:**

$$
\widehat{g}_Q(t) = -2 \cdot LPF[ r(t) \sin(2\pi f_c t) ]
$$
- *Where$LPF[\cdot]$removes components above the baseband bandwidth.*

*If$r(t) \approx g(t)$(ideal case), then$\widehat{g}_I(t) = g_I(t)$,$\widehat{g}_Q(t) = g_Q(t)$.*

### **Signal Reconstruction from I and Q**

- **Amplitude (envelope/demodulated signal):**

$$
A(t) = \sqrt{g_I^2(t) + g_Q^2(t)}
$$
- **Phase:**

$$
\phi(t) = \arctan\left( \frac{g_Q(t)}{g_I(t)} \right)
$$
- **For amplitude-only modulation (AM):**$g_Q(t) = 0$, so$g_I(t) = m(t)$.


## **3. Mathematical Tools and Identities**

| Identity | Use Case |
| :-- | :-- |
|$\cos^2(x) = \frac{1+\cos(2x)}{2}$| Used in demodulation of$g_I(t)$|
|$\sin^2(x) = \frac{1-\cos(2x)}{2}$| Used in demodulation of$g_Q(t)$|
|$\sin(x)\cos(x) = \frac{\sin(2x)}{2}$| Used in cross-product terms during demodulation |

## **4. Common Signal Types \& Their I/Q Representation**

| Signal Type |$g_I(t)$|$g_Q(t)$|
| :-- | :-- | :-- |
| AM |$m(t)$| 0 |
| QAM | one data stream (e.g., even bits) | second data stream (e.g., odd bits) |
| PSK (BPSK/QPSK) |$\cos(\phi(t))$|$\sin(\phi(t))$|

## **5. Physical Interpretation**

- **Baseband signal:** Your original real-valued information (e.g., voice)
- **Complex baseband/IQ:** A mathematical model useful for analyzing *any* linear modulation; enables efficient DSP, simulation, and understanding of amplitude/phase changes.
- **Bandpass signal:** The real, transmittable waveform.


## **6. Summary Workflow: End-to-End Transmission**

1. **Record:**$m(t)$(real)
2. **Map to I/Q:**$g_I(t), g_Q(t)$
3. **Modulate:**$g(t) = g_I(t)\cos(2\pi f_c t) - g_Q(t)\sin(2\pi f_c t)$
4. **Transmit:** Send$g(t)$via antenna
5. **Receive:**$r(t)$at the receiver
6. **Demodulate I:** Multiply by$\cos(2\pi f_c t)$, low-pass filter, scale by 2 →$g_I(t)$
7. **Demodulate Q:** Multiply by$-\sin(2\pi f_c t)$, low-pass filter, scale by 2 →$g_Q(t)$
8. **Reconstruct/Decode:** Use$g_I(t), g_Q(t)$to recover original data or signal

**Keep this cheatsheet handy for any baseband/bandpass, IQ, and modulation/demodulation problem in digital or analog communication systems.**

