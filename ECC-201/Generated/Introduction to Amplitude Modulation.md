Welcome to our study of Communication Systems. Today, we will begin with a fundamental concept in analog communications: **Amplitude Modulation (AM)**. AM is a technique used in electronic communication, most commonly for transmitting information via a radio carrier wave. It works by varying the amplitude of the carrier wave in proportion to the message signal being transmitted.

### Core Concepts

#### 1. The Bandpass Signal

Before we dive into modulation, we must first understand the nature of the signals we are working with. In radio communications, we often use **bandpass signals**. A bandpass signal is one whose frequency content is centered around a frequency $f_c$, known as the **carrier frequency**, and has a certain bandwidth.

A general representation of a bandpass signal $s(t)$ is:
\$ s(t) = a(t)\cos(2\pi f_c t + \phi(t)) \$
Where:

- $a(t)$ is the instantaneous amplitude (or envelope) of the signal.
- $f_c$ is the carrier frequency.
- $\phi(t)$ is the instantaneous phase of the signal.

In amplitude modulation, the information we want to transmit is embedded in the amplitude component $a(t)$ of this signal.

#### 2. Amplitude Modulation (AM)

**Amplitude Modulation (AM)** is a process where the amplitude of a high-frequency carrier signal is varied in accordance with the instantaneous amplitude of a lower-frequency message signal.

Let's define our key signals:

- **Message Signal, $m(t)$:** This is the baseband signal that contains the information to be transmitted (e.g., an audio signal). We assume it is band-limited to a maximum frequency $W$.
- **Carrier Signal, $c(t)$:** This is a high-frequency sinusoidal signal, typically represented as $c(t) = A_c \cos(2\pi f_c t)$, where $A_c$ is the carrier amplitude and $f_c$ is the carrier frequency. The condition is that $f_c \gg W$.

The standard **AM modulated signal**, $s(t)$, is mathematically defined as:
\$ s(t) = A_c(1 + K_a m(t))\cos(2\pi f_c t) \$
Where:

- $A_c$ is the amplitude of the carrier signal.
- $K_a$ is the **amplitude sensitivity** (or modulation index) of the modulator. It is a positive constant that determines the amount of change in the carrier amplitude for a unit change in the message signal.

The term $1 + K_a m(t)$ forms the envelope of the AM signal. For the envelope to accurately represent the message signal, we must ensure that this term is always positive. This leads to the condition:
\$ K_a|m(t)| < 1 \$
If this condition is met, the envelope $A_c(1 + K_a m(t))$ never drops to zero and accurately follows the shape of $m(t)$.

**Phase Reversal Issue:**
If the condition $K_a|m(t)| > 1$ occurs (a situation known as **overmodulation**), the term $1 + K_a m(t)$ will become negative for some values of $t$. This causes the carrier signal to experience a **phase reversal** of 180° ($\pi$ radians) at the points where the envelope crosses zero. This results in distortion of the envelope, and the original message signal cannot be recovered correctly using a simple envelope detector.

### AM Modulator Circuit and Derivation

A simple AM modulator can be constructed using a non-linear device, such as a diode.

#### Circuit Diagram Description

Consider a circuit consisting of two AC voltage sources, an ideal diode, and a load resistor ($R_L$) all connected in series.

- The first voltage source provides the **message signal**, $m(t)$.
- The second voltage source provides the **carrier signal**, $c(t) = A_c\cos(2\pi f_c t)$.
- The sum of these two signals, $v_i(t) = c(t) + m(t)$, is fed into the series combination of an ideal diode and the load resistor.
- The output voltage, $V_o(t)$, is taken across the load resistor.

The key to this circuit is the non-linear behavior of the diode, which acts as a switch controlled by the carrier signal $c(t)$. Since $A_c$ is much larger than the amplitude of $m(t)$, the diode's on/off state is primarily determined by the polarity of $c(t)$.

#### Derivation of the Output Voltage, $V_o(t)$

The diode acts as a switch, producing a periodic switching function, $g(t)$, which is a square wave with the same frequency $f_c$ as the carrier. The output voltage across the resistor can be expressed as the product of the input voltage and this switching function:
\$ V_o(t) = v_i(t) g(t) = (c(t) + m(t))g(t) \$
The switching function $g(t)$ can be represented by its Fourier series. For an ideal half-wave rectifier (which is what the diode performs), the Fourier series for $g(t)$ is:
\$ g(t) = \frac{1}{2} + \frac{2}{\pi}\sum_{k=1}^{\infty}{\frac{(-1)^{k-1}}{2k-1}\cos(2\pi f_c t(2k-1))} \$
Here, the general coefficient $a_k$ for a square wave is given by $a_k = \frac{\sin(k\omega_o T_1)}{k\pi}$, which simplifies for this specific case.

Now, let's substitute the series for $g(t)$ into the expression for $V_o(t)$:
\$ V_o(t) = (A_c\cos(2\pi f_c t) + m(t)) \left[ \frac{1}{2} + \frac{2}{\pi}\cos(2\pi f_c t) - \frac{2}{3\pi}\cos(6\pi f_c t) + \dots \right] \$
Expanding this product gives us multiple terms:
\$ V_o(t) = \underbrace{\frac{A_c}{2}\cos(2\pi f_c t) + \frac{1}{2}m(t)}_{Baseband and f_c} + \underbrace{\frac{2A_c}{\pi}\cos^2(2\pi f_c t) + \frac{2}{\pi}m(t)\cos(2\pi f_c t)}_{Terms around f_c and 2f_c} + higher frequency terms \$
Using the trigonometric identity $\cos^2(\theta) = \frac{1}{2}(1 + \cos(2\theta))$, we can further expand the term $\frac{2A_c}{\pi}\cos^2(2\pi f_c t)$:
\$ \frac{2A_c}{\pi}\cos^2(2\pi f_c t) = \frac{A_c}{\pi}(1 + \cos(4\pi f_c t)) = \frac{A_c}{\pi} + \frac{A_c}{\pi}\cos(4\pi f_c t) \$
So, the output $V_o(t)$ contains:

- A DC component ($\frac{A_c}{\pi}$).
- The original message signal at baseband ($\frac{1}{2}m(t)$).
- Components at the carrier frequency $f_c$.
- Components at harmonics of the carrier frequency ($2f_c, 3f_c, \dots$).


#### The Role of the Bandpass Filter

To isolate the desired AM signal, we pass $V_o(t)$ through a **bandpass filter (BPF)**. This filter is designed to have a center frequency of $f_c$ and a bandwidth of $2W$ (where $W$ is the bandwidth of the message signal $m(t)$).

The BPF will perform the following actions:

- **Reject** the baseband component $\frac{1}{2}m(t)$.
- **Reject** the DC component.
- **Reject** all components at higher harmonics ($2f_c, 3f_c$, etc.).
- **Pass** only the components centered around the carrier frequency $f_c$.

The terms in $V_o(t)$ that fall within the passband of the filter are:

- From the $g(t)$ expansion ($k=1$): $\frac{2}{\pi}m(t)\cos(2\pi f_c t)$.
- From the original carrier signal being multiplied by the DC term of $g(t)$: $\frac{A_c}{2}\cos(2\pi f_c t)$.

Therefore, the final output signal after the bandpass filter, let's call it $s_{out}(t)$, is:
\$ s_{out}(t) = [Vo(t)]_{filtered} = \frac{A_c}{2}\cos(2\pi f_c t) + \frac{2}{\pi}m(t)\cos(2\pi f_c t) \$
We can factor out the carrier term to get it into the standard AM form:
\$ s_{out}(t) = \frac{A_c}{2} \left( 1 + \frac{4}{\pi A_c} m(t) \right) \cos(2\pi f_c t) \$
This is a standard AM signal, where the new carrier amplitude is $\frac{A_c}{2}$ and the new amplitude sensitivity is $K_a' = \frac{4}{\pi A_c}$. This demonstrates how a simple non-linear circuit combined with a filter can successfully generate an Amplitude Modulated signal.

