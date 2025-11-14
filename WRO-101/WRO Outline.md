## Course Description

This course provides a comprehensive understanding of electrical energy management, with a specific focus on hydropower systems. It bridges the gap between hydraulic engineering and electrical power systems, covering the journey of energy from water in the reservoir to electrical power on the grid. Students will analyze hydropower plant types, calculate power and energy, model electrical machines, and understand the dynamics of grid operation, load sharing, and power quality. The course emphasizes practical application through detailed schematics, fundamental equations, and problem-solving based on real-world scenarios.

## Module 1: Introduction to Hydropower Systems

**Objective:** Differentiate between the primary types of hydropower plants and understand their operational characteristics and grid-side applications.

**Topics:**

- **Types of Hydropower Plants:**
    
    - **Storage (Reservoir) Plants:** Dam structure, reservoir capacity, seasonal operation, and role in energy storage and flood control. (Ref: Tutorial 1)
        
    - **Run-of-River (RoR) Plants:** Diversion weir, low head operation, dependence on river flow, and typical use as base-load plants. (Ref: Tutorial 2)
        
    - **Pumped Storage Hydropower (PSH):** Upper/lower reservoirs, reversible pump-turbines, and role in grid-scale energy storage, peak-shaving, and frequency regulation. (Ref: Tutorial 2, Tutorial 4)
        
- **Plant Sizing and Selection:** Factors influencing the choice of plant type (head, flow, geology, grid demand).
    
- **Practical Examples & Schematics:**
    
    - Detailed layout diagrams for storage, RoR, and pumped storage plants.
        
    - Comparison of typical power output profiles for each plant type.
        

## Module 2: Hydropower Engineering: Power & Energy Calculations

**Objective:** Master the fundamental equations to calculate the potential and actual power and energy output of a hydropower plant.

**Topics:**

- **Hydraulic Head:**
    
    - Gross Head ($H_g$), Net Head ($H_n$), and Head Loss ($h_f$).
        
    - Equations for calculating head loss in penstocks.
        
- **Water Power Equation:**
    
    - Derivation of Water Power: $P_w = \rho \cdot g \cdot Q \cdot H_g$
        
- **Electrical Power Equation:**
    
    - Derivation of Electrical Power: $P_e = \eta_{overall} \cdot \rho \cdot g \cdot Q \cdot H_n$
        
    - Components of Overall Efficiency ($\eta_{overall}$): Turbine, generator, and transformer efficiencies.
        
- **Energy Generation:**
    
    - Calculating daily, monthly, and annual energy ($E = P \cdot t$) in kWh and GWh.
        
    - Using flow duration curves and 10-daily discharge data. (Ref: Tutorial 1)
        
- **Reservoir Capacity & Energy Storage:**
    
    - Calculating total energy stored in a reservoir. (Ref: Tutorial 1, Prob 2 & 4)
        
- **Practical Calculations (based on Tutorial 1):**
    
    - Calculating installed capacity from design discharge and net head.
        
    - Determining the number of generating units.
        
    - Calculating monthly and annual energy generation from 10-daily flow data.
        

## Module 3: Power Plant Operational Metrics & Load Sharing

**Objective:** Analyze power plant performance and load dispatch using key industry metrics and load duration curves.

**Topics:**

- **Key Performance Indicators (KPIs):**
    
    - **Connected Load:** Total rating of all equipment connected to the system.
        
    - **Maximum Demand:** The highest load demanded by the system in a given period.
        
    - **Demand Factor:** $\frac{\text{Maximum Demand}}{\text{Connected Load}}$ (Ref: Tutorial 2, Prob 2)
        
    - **Load Factor (LF):** $\frac{\text{Average Load}}{\text{Maximum Demand}}$ (Ref: Tutorial 1, 2)
        
    - **Plant Capacity Factor (PCF):** $\dfrac{\text{Actual Energy Generated}}{\text{Max. Possible Energy (Plant Capacity * Hours)}}$ (Ref: Tutorial 2)
        
    - **Plant Use Factor:** $\frac{\text{Actual Energy Generated}}{\text{Plant Capacity * Hours of Operation}}$ (Ref: Tutorial 2)
        
    - **Reserve Capacity:** $\text{Plant Capacity} - \text{Maximum Demand}$ (Ref: Tutorial 2)
        
- **Load Duration Curve (LDC):**
    
    - Construction and interpretation of annual and daily LDCs. * Using LDCs for dispatch planning (base-load, intermediate, peak-load).
        
- **Load Sharing (System Level):**
    
    - Assigning loads to different station types (e.g., RoR as base-load, Storage/PSH as peak-load).
        
    - Analyzing combined hydro-steam systems. (Ref: Tutorial 2, Prob 6 & 7)
        
- **Practical Calculations (based on Tutorial 2):**
    
    - Calculating total annual energy from load factor.
        
    - Solving for various factors (LF, PCF, etc.) given generation data.
        
    - Analyzing load sharing and LDCs to find station capacities and individual load factors.
        

## Module 4: Fundamentals of AC Rotating Machines

**Objective:** Understand the constructional and operational principles of AC generators and motors used in hydropower.

**Topics:**

- **Synchronous vs. Asynchronous (Induction) Machines:**
    
    - Key differences in construction (rotor type) and operation (speed relative to synchronous speed).
        
- **Three-Phase AC Generators (Alternators):**
    
    - Construction: Stator (armature windings), Rotor (field windings - salient and cylindrical pole).
        
    - Principle of Operation: Rotating magnetic field, induced EMF.
        
- **Synchronous Speed and Pole Calculation:**
    
    - The fundamental relationship: $N_s = \frac{120 \cdot f}{P}$
        
    - Application: Why hydro-generators (low speed) have many poles.
        
    - **Calculation:** Finding poles given speed and frequency. (Ref: Tutorial 3, Prob 1)
        
- **Motor-Generator (MG) Sets:**
    
    - Principle of frequency conversion ($f_{out} = f_{in} \cdot \frac{P_{gen}}{P_{motor}}$).
        
    - **Calculation:** Determining pole numbers for both motor and generator for a 50Hz to 60Hz conversion. (Ref: Tutorial 3, Prob 2)
        

## Module 5: Synchronous Machine: Parameters & Excitation

**Objective:** Model the synchronous machine and understand how its operation is controlled via excitation.

**Topics:**

- **Synchronous Machine Model:**
    
    - Per-phase equivalent circuit of a synchronous generator. * Parameters: Armature Resistance ($R_a$), Synchronous Reactance ($X_s$).
        
- **Determining Machine Parameters:**
    
    - **DC Test:** Measuring $R_a$ (Ref: Tutorial 3, Prob 3).
        
    - **Open-Circuit (OC) Test:** Finding Open-Circuit Voltage ($V_{oc}$ or $E_f$).
        
    - **Short-Circuit (SC) Test:** Finding Short-Circuit Current ($I_{sc}$).
        
    - **Calculation:** $Z_s = \frac{V_{oc}}{I_{sc}}$ and $X_s = \sqrt{Z_s^2 - R_a^2}$. (Ref: Tutorial 3, Prob 3)
        
- **Y (Wye) vs. Delta Connections:**
    
    - Schematics for Y and Delta connected windings.
        
    - Relationship between line and phase voltages/currents.
        
    - Parameter calculation in Y-connected machines. (Ref: Tutorial 3)
        
- **Excitation Systems:**
    
    - Purpose: To create the rotor's magnetic field and control generator output voltage and reactive power.
        
    - Types:
        
        - **Rotating Exciters:** DC Exciters (brushed), AC Exciters (brushless).
            
        - **Static Exciters:** Thyristor-based systems fed from generator terminals (via excitation transformer).
            
    - Components: Excitation Transformer rating. (Ref: Tutorial 4, Prob 1 & 2)
        

## Module 6: Parallel Operation & System Frequency Control

**Objective:** Analyze how multiple generators share a common load and maintain stable system frequency.

**Topics:**

- **Conditions for Paralleling Generators:**
    
    - Equal voltage, equal frequency, same phase sequence, phase synchronism.
        
- **Governor Control & Speed Droop:**
    
    - The role of the turbine governor in controlling mechanical power input.
        
    - **Droop Characteristic:** The linear $P-f$ (Power-Frequency) relationship.
        
    - Droop Equation: $f_{nl} - f_{fl} = \text{Droop} \times f_{nl}$ or $f_{sys} = f_{nl} - S_p \cdot P$
        
    - Schematic of a governor speed-droop mechanism. * **Load Sharing (Unit Level):**
        
    - How droop determines real power (kW) sharing between parallel units.
        
    - Effect of changing governor set-points (raising/lowering $f_{nl}$). (Ref: Tutorial 3, Prob 4B)
        
- **Voltage Control & Reactive Power Sharing:**
    
    - How excitation/field current controls reactive power (kVAR) sharing.
        
    - Effect of changing field current. (Ref: Tutorial 3, Prob 4B)
        
- **Practical Calculations (based on Tutorial 3, Prob 4 & 5):**
    
    - Calculating system frequency and power sharing for multiple generators with different droop settings and no-load frequencies.
        
    - Determining new no-load frequency settings to achieve a desired load share at a target frequency.
        

## Module 7: Synchronous Motors & Pumped Storage Operation

**Objective:** Understand the operation of synchronous machines as motors, focusing on pumped storage applications.

**Topics:**

- **Synchronous Motor Principle:**
    
    - Operation at synchronous speed.
        
    - Role in power factor correction (over-excited and under-excited). (Ref: Tutorial 5)
        
- **Pumped Storage Operation (Pump Mode):**
    
    - Operating the generator as a motor to drive the pump. (Ref: Tutorial 4)
        
    - **Fixed-Speed PSH:** Challenges in starting and operation. (Ref: Tutorial 4, Prob 2)
        
    - **Variable-Speed PSH:** Use of power electronics (converters) to control speed, allowing for power regulation in pump mode. (Ref: Tutorial 4, Prob 1)
        
- **Braking of Large Machines:**
    
    - Need for braking (stopping large rotating mass of turbine/generator).
        
    - **Dynamic Braking:** Dissipating energy in a resistor bank.
        
    - **Regenerative Braking:** Pumping energy back into the grid (inherent in pump mode stop).
        
    - **Mechanical Braking:** Friction brakes at low speeds.
        
- **Practical Calculations (based on Tutorial 4):**
    
    - Rating of unit and excitation transformers.
        
    - Calculating required speed variation and converter capacity for variable-speed units.
        
    - Justifying operational limits of fixed-speed units.
        

## Module 8: Asynchronous (Induction) Machines & Starting Methods

**Objective:** Analyze the workhorse of the industry, the induction motor, and the methods used to start it.

**Topics:**

- **Asynchronous (Induction) Motor:**
    
    - Construction and principle of operation (slip).
        
    - Common application as auxiliary loads in power plants (pumps, fans, cranes).
        
    - Power factor characteristics (always lags). (Ref: Tutorial 5, Prob 2)
        
- **Motor Starting Challenges:**
    
    - High inrush current (locked-rotor current).
        
    - Voltage drop on the supply system.
        
- **Starting Methods (Schematics & Operation):**
    
    - **Direct-On-Line (DOL):** Full voltage, high starting current.
        
    - **Star-Delta (Y-Δ):** Reduced voltage/current ($1/3$) during start.
        
    - **Autotransformer:** Reduced voltage start using taps.
        
    - **Soft Starters:** Power electronic (thyristor) based, smooth voltage/current ramp.
        
- **Comparison:** Torque vs. Speed curves and current profiles for each starting method.
    

## Module 9: Power Factor & Reactive Power Management

**Objective:** Understand the impact of power factor on the electrical system and learn methods for its correction. (Covers all of Tutorial 5)

**Topics:**

- **The Power Triangle:**
    
    - Active Power (P - kW), Reactive Power (Q - kVAR), Apparent Power (S - kVA).
        
    - Power Factor (PF) = $P / S = \cos(\phi)$.
        
    - Impact of low power factor (high kVAR) on system: higher currents, larger $I^2R$ losses, voltage drops, and under-utilization of equipment.
        
- **Power Factor Correction:**
    
    - Goal: To reduce the reactive power drawn from the supply.
        
    - **Capacitor Banks:** Adding capacitors (in Y or Delta) to supply kVAR.
        
        - **Calculation:** Determining kVAR rating of capacitors to improve PF from $\cos(\phi_1)$ to $\cos(\phi_2)$. (Ref: Tutorial 5, Prob 2)
            
    - **Synchronous Motors:** Operating an over-excited synchronous motor (synchronous condenser) to supply kVAR. (Ref: Tutorial 5, Prob 4)
        
- **Tariffs & Economic Justification:**
    
    - Analyzing kVA-based tariffs.
        
    - **Calculation:** Calculating annual savings from PF improvement vs. the cost of capacitors. (Ref: Tutorial 5, Prob 3)
        
- **Practical Calculations (based on Tutorial 5):**
    
    - Calculating total kW, kVAR, kVA, and overall PF for a system with multiple loads.
        
    - Determining required kVAR (from capacitors or synchronous motor) to achieve a target (e.g., unity) power factor.