# Numerical Methods for Linear Systems: Lecture Notes

## **Topic: Gauss Elimination with and without Partial Pivoting and Scaling (Weight: 3)**

Gaussian elimination is a foundational direct method for solving a system of linear equations $Ax = b$. The process systematically transforms the augmented matrix $[A|b]$ into an upper triangular form (row echelon form) using a sequence of elementary row operations. Once the system is in this form, the solution is found efficiently using back substitution.

To ensure numerical stability, especially in finite-precision arithmetic, standard Gaussian elimination is often enhanced with pivoting and scaling. Partial pivoting involves swapping rows within the submatrix being considered to use the entry with the largest absolute value as the pivot element, mitigating issues with small pivots. Scaling normalizes the coefficients in each row to prevent equations with large coefficients from disproportionately influencing the pivot selection process.

**Core Algorithm Steps:**

- **Forward Elimination:** The primary phase where the matrix $A$ is converted into an upper triangular matrix $U$. This is achieved by creating zeros in the lower part of the matrix, column by column.
    
    - For each column $k$ from $1$ to $n-1$, the pivot element $a_{kk}$ is used to eliminate the coefficients $a_{ik}$ for all rows $i > k$.
        
    - The row operation is $R_i \leftarrow R_i - (\frac{a_{ik}}{a_{kk}}) R_k$.
        
- **Partial Pivoting:** Before elimination in column $k$, find the row $p \geq k$ that has the maximum absolute value in column $k$ (i.e., $|a_{pk}| = \max_{i \geq k} |a_{ik}|$). Swap row $k$ and row $p$.
    
- **Scaled Partial Pivoting:** To select the best pivot, first determine a scale factor for each row, $s_i = \max_{1 \leq j \leq n} |a_{ij}|$. Then, before elimination in column $k$, choose the pivot row $p$ that maximizes the ratio $\frac{|a_{ik}|}{s_i}$ for $i \geq k$.
    
- **Back Substitution:** After forward elimination, the system is $Ux = c$. The solution is computed backward from the last variable.
    
    - $x_n = c_n / u_{nn}$
        
    - $x_i = \frac{1}{u_{ii}}\left(c_i - \sum_{j=i+1}^n u_{ij}x_j\right)$ for $i = n-1, n-2, \ldots, 1$.
        

**Solved Example (with Partial Pivoting):**  
Solve the system: $\begin{bmatrix} 2 & 1 & -1 \ -3 & -1 & 2 \ -2 & 1 & 2 \end{bmatrix} \begin{bmatrix} x_1 \ x_2 \ x_3 \end{bmatrix} = \begin{bmatrix} 8 \ -11 \ -3 \end{bmatrix}$

1. **Augmented Matrix:** $[A|b] = \begin{bmatrix} 2 & 1 & -1 & | & 8 \ -3 & -1 & 2 & | & -11 \ -2 & 1 & 2 & | & -3 \end{bmatrix}$
    
2. **Pivot for Column 1:** The largest absolute value in the first column is $|-3|$ in row 2. Swap R1 and R2.  
    $\begin{bmatrix} -3 & -1 & 2 & | & -11 \ 2 & 1 & -1 & | & 8 \ -2 & 1 & 2 & | & -3 \end{bmatrix}$
    
3. **Elimination for Column 1:**
    
    - $R_2 \leftarrow R_2 + (2/3)R_1$: $\begin{bmatrix} -3 & -1 & 2 & | & -11 \ 0 & 1/3 & 1/3 & | & 2/3 \ -2 & 1 & 2 & | & -3 \end{bmatrix}$
        
    - $R_3 \leftarrow R_3 - (2/3)R_1$: $\begin{bmatrix} -3 & -1 & 2 & | & -11 \ 0 & 1/3 & 1/3 & | & 2/3 \ 0 & 5/3 & 2/3 & | & 13/3 \end{bmatrix}$
        
4. **Pivot for Column 2:** The largest absolute value below the diagonal is $|5/3|$ in row 3. Swap R2 and R3.  
    $\begin{bmatrix} -3 & -1 & 2 & | & -11 \ 0 & 5/3 & 2/3 & | & 13/3 \ 0 & 1/3 & 1/3 & | & 2/3 \end{bmatrix}$
    
5. **Elimination for Column 2:**
    
    - $R_3 \leftarrow R_3 - (\frac{1/3}{5/3})R_2 = R_3 - (1/5)R_2$: $\begin{bmatrix} -3 & -1 & 2 & | & -11 \ 0 & 5/3 & 2/3 & | & 13/3 \ 0 & 0 & 1/5 & | & 1/5 \end{bmatrix}$
        
6. **Back Substitution:**
    
    - $x_3 = (1/5) / (1/5) = 1$
        
    - $(5/3)x_2 + (2/3)(1) = 13/3 \implies (5/3)x_2 = 11/3 \implies x_2 = 11/5 = 2.2$
        
    - $-3x_1 - (2.2) + 2(1) = -11 \implies -3x_1 = -10.8 \implies x_1 = 3.6$
        

Solution: $x = [3.6, 2.2, 1]^T$

## **Topic: LU Decomposition by Crout and Doolittle Methods (Weight: 5)**

LU decomposition is a matrix factorization technique that expresses a square matrix $A$ as the product of a lower triangular matrix $L$ and an upper triangular matrix $U$, such that $A=LU$. This decomposition is highly efficient for solving linear systems $Ax=b$, as the problem is reduced to solving two simpler triangular systems: $Ly=b$ (forward substitution) and $Ux=y$ (back substitution). It is particularly advantageous when solving systems with the same coefficient matrix $A$ but multiple different right-hand side vectors $b$.

The primary variations of LU decomposition are the Doolittle and Crout methods, which differ in the structure of the $L$ and $U$ matrices. The Doolittle method requires the diagonal elements of $L$ to be 1, whereas the Crout method sets the diagonal elements of $U$ to 1. Both methods are derived by directly equating the elements of $A$ with the product $LU$ and solving for the unknown elements of $L$ and $U$ in a systematic order. These methods assume that the matrix $A$ can be factorized without row interchanges, which is true if all leading principal minors are non-zero.

**Core Formulas and Constraints:**

- **General form:** $a_{ij} = \sum_{k=1}^{n} l_{ik}u_{kj}$. Since $L$ is lower triangular ($l_{ik}=0$ for $k>i$) and $U$ is upper triangular ($u_{kj}=0$ for $k>j$), this simplifies to $a_{ij} = \sum_{k=1}^{\min(i,j)} l_{ik}u_{kj}$.
    
- **Doolittle Method:**
    
    - Constraint: $l_{ii} = 1$ for all $i$.
        
    - Computation: For each $k=1, \dots, n$:
        
        - $u_{kj} = a_{kj} - \sum_{p=1}^{k-1} l_{kp}u_{pj}$ for $j=k, \dots, n$.
            
        - $l_{ik} = \frac{1}{u_{kk}} (a_{ik} - \sum_{p=1}^{k-1} l_{ip}u_{pk})$ for $i=k+1, \dots, n$.
            
- **Crout Method:**
    
    - Constraint: $u_{ii} = 1$ for all $i$.
        
    - Computation: For each $k=1, \dots, n$:
        
        - $l_{ik} = a_{ik} - \sum_{p=1}^{k-1} l_{ip}u_{pk}$ for $i=k, \dots, n$.
            
        - $u_{kj} = \frac{1}{l_{kk}} (a_{kj} - \sum_{p=1}^{k-1} l_{kp}u_{pj})$ for $j=k+1, \dots, n$.
            

**Derivation Steps (Doolittle Method):**  
The derivation involves expanding the matrix equation $A=LU$ and solving for the elements of $L$ and $U$ sequentially.

1. Write out the product $LU$ for a general $n \times n$ matrix.  
    $\begin{bmatrix} a_{11} & a_{12} & \dots \ a_{21} & a_{22} & \dots \ \vdots & \vdots & \ddots \end{bmatrix} = \begin{bmatrix} 1 & 0 & \dots \ l_{21} & 1 & \dots \ \vdots & \vdots & \ddots \end{bmatrix} \begin{bmatrix} u_{11} & u_{12} & \dots \ 0 & u_{22} & \dots \ \vdots & \vdots & \ddots \end{bmatrix}$
    
2. **First row/column:**
    
    - $a_{1j} = l_{11}u_{1j} = 1 \cdot u_{1j} \implies u_{1j} = a_{1j}$ for $j=1, \dots, n$. (First row of U)
        
    - $a_{i1} = l_{i1}u_{11} \implies l_{i1} = a_{i1} / u_{11}$ for $i=2, \dots, n$. (First column of L)
        
3. **General step k:** Assume the first $k-1$ rows of $U$ and columns of $L$ are known.
    
    - For the $k$-th row of $U$: $a_{kj} = \sum_{p=1}^{k} l_{kp}u_{pj} = \sum_{p=1}^{k-1} l_{kp}u_{pj} + l_{kk}u_{kj}$. Since $l_{kk}=1$, we solve for $u_{kj}$.
        
    - For the $k$-th column of $L$: $a_{ik} = \sum_{p=1}^{k} l_{ip}u_{pk} = \sum_{p=1}^{k-1} l_{ip}u_{pk} + l_{ik}u_{kk}$. We solve for $l_{ik}$.  
        This systematic process generates all elements of $L$ and $U$.
        

**Solved Example (Crout Method):**  
Decompose $A = \begin{bmatrix} 2 & -1 & -2 \ -4 & 6 & 3 \ -4 & -2 & 8 \end{bmatrix}$ into $LU$ using Crout's method.

1. **Initialize:** $U$ has a unit diagonal. $L = \begin{bmatrix} l_{11} & 0 & 0 \ l_{21} & l_{22} & 0 \ l_{31} & l_{32} & l_{33} \end{bmatrix}$, $U = \begin{bmatrix} 1 & u_{12} & u_{13} \ 0 & 1 & u_{23} \ 0 & 0 & 1 \end{bmatrix}$.
    
2. **Column 1 of L:**
    
    - $l_{11} = a_{11} = 2$
        
    - $l_{21} = a_{21} = -4$
        
    - $l_{31} = a_{31} = -4$
        
3. **Row 1 of U:**
    
    - $u_{12} = a_{12} / l_{11} = -1 / 2 = -0.5$
        
    - $u_{13} = a_{13} / l_{11} = -2 / 2 = -1$
        
4. **Column 2 of L:**
    
    - $l_{22} = a_{22} - l_{21}u_{12} = 6 - (-4)(-0.5) = 6 - 2 = 4$
        
    - $l_{32} = a_{32} - l_{31}u_{12} = -2 - (-4)(-0.5) = -2 - 2 = -4$
        
5. **Row 2 of U:**
    
    - $u_{23} = \frac{1}{l_{22}}(a_{23} - l_{21}u_{13}) = \frac{1}{4}(3 - (-4)(-1)) = \frac{1}{4}(3 - 4) = -0.25$
        
6. **Column 3 of L:**
    
    - $l_{33} = a_{33} - (l_{31}u_{13} + l_{32}u_{23}) = 8 - ((-4)(-1) + (-4)(-0.25)) = 8 - (4 + 1) = 3$
        

**Result:** $L = \begin{bmatrix} 2 & 0 & 0 \ -4 & 4 & 0 \ -4 & -4 & 3 \end{bmatrix}$, $U = \begin{bmatrix} 1 & -0.5 & -1 \ 0 & 1 & -0.25 \ 0 & 0 & 1 \end{bmatrix}$

|Method|Key Feature|Computation Pattern|Best For|
|---|---|---|---|
|Doolittle|$l_{ii} = 1$|Computes a row of U, then a column of L|General purpose, educational|
|Crout|$u_{ii} = 1$|Computes a column of L, then a row of U|Fewer intermediate storage steps, some architectures|
|Cholesky|$A=LL^T$|Requires symmetric positive-definite matrix|Highly efficient and stable for applicable matrices|

**Common Pitfalls:**

- The decomposition fails if a pivot element $u_{kk}$ (Doolittle) or $l_{kk}$ (Crout) is zero.
    
- This necessitates pivoting, leading to a PLU decomposition where $PA=LU$ and $P$ is a permutation matrix.
    
- Accumulation of round-off errors can be significant for ill-conditioned matrices.
    

## **Topic: Jacobi's Method (Weight: 4)**

The Jacobi method is a classic iterative algorithm for finding the solution of a linear system $Ax=b$. It operates by splitting the matrix $A$ into its diagonal ($D$), strictly lower triangular ($L$), and strictly upper triangular ($U$) components, such that $A=D+L+U$. The core idea is to rearrange the system to isolate the diagonal part and use values from the previous iteration to update all solution components simultaneously.

This parallel update structure makes the Jacobi method well-suited for implementation on parallel computing architectures. However, its convergence is not guaranteed for all systems and is typically slower than more advanced methods like Gauss-Seidel for systems where both converge. Convergence is assured if the matrix $A$ is strictly diagonally dominant.

**Core Iteration Formulas:**

- **Equation rearrangement:** For each row $i$, the equation is written as: $a_{ii}x_i = b_i - \sum_{j \neq i} a_{ij}x_j$.
    
- **Component form:** The iterative update rule is derived from this rearrangement:  
    $x_i^{(k+1)} = \frac{1}{a_{ii}} \left( b_i - \sum_{j=1}^{i-1} a_{ij}x_j^{(k)} - \sum_{j=i+1}^{n} a_{ij}x_j^{(k)} \right)$  
    where the superscript $(k)$ denotes the iteration number.
    
- **Matrix form:** The same update rule can be expressed more compactly in matrix notation:  
    $x^{(k+1)} = D^{-1}(b - (L+U)x^{(k)})$
    
- **Iteration Matrix:** The convergence of the method is determined by the spectral radius of the Jacobi iteration matrix, $T_J = -D^{-1}(L+U)$.
    

**Detailed Solved Example:**  
Solve the system $\begin{bmatrix} 10 & -1 & 2 \ -1 & 11 & -1 \ 2 & -1 & 10 \end{bmatrix} \begin{bmatrix} x_1 \ x_2 \ x_3 \end{bmatrix} = \begin{bmatrix} 6 \ 25 \ -11 \end{bmatrix}$ with initial guess $x^{(0)} = ^T$.

1. **Formulate Jacobi equations:**  
    $x_1^{(k+1)} = \frac{1}{10}(6 + x_2^{(k)} - 2x_3^{(k)})$  
    $x_2^{(k+1)} = \frac{1}{11}(25 + x_1^{(k)} + x_3^{(k)})$  
    $x_3^{(k+1)} = \frac{1}{10}(-11 - 2x_1^{(k)} + x_2^{(k)})$
    
2. **Iteration 1:** Using $x_1^{(0)}=0, x_2^{(0)}=0, x_3^{(0)}=0$.  
    $x_1^{(1)} = \frac{1}{10}(6 + 0 - 0) = 0.6$  
    $x_2^{(1)} = \frac{1}{11}(25 + 0 + 0) = 2.2727$  
    $x_3^{(1)} = \frac{1}{10}(-11 - 0 + 0) = -1.1$
    
3. **Iteration 2:** Using values from $x^{(1)}$.  
    $x_1^{(2)} = \frac{1}{10}(6 + 2.2727 - 2(-1.1)) = \frac{1}{10}(10.4727) = 1.0473$  
    $x_2^{(2)} = \frac{1}{11}(25 + 0.6 - 1.1) = \frac{1}{11}(24.5) = 2.2273$  
    $x_3^{(2)} = \frac{1}{10}(-11 - 2(0.6) + 2.2727) = \frac{1}{10}(-9.9273) = -0.9927$
    
4. **Iteration 3:**  
    $x_1^{(3)} = \frac{1}{10}(6 + 2.2273 - 2(-0.9927)) = \frac{1}{10}(10.2127) = 1.0213$  
    $x_2^{(3)} = \frac{1}{11}(25 + 1.0473 - 0.9927) = \frac{1}{11}(25.0546) = 2.2777$  
    $x_3^{(3)} = \frac{1}{10}(-11 - 2(1.0473) + 2.2273) = \frac{1}{10}(-10.8673) = -1.0867$
    

The process continues until the solution converges. The exact solution is $x=[1, 2, -1]^T$.

**Applicability and Pitfalls:**

- **Convergence:** The method is guaranteed to converge if the matrix $A$ is strictly diagonally dominant.
    
- **Divergence:** If the spectral radius of $T_J$ is greater than 1, the method will diverge for almost all initial guesses.
    
- **Slow Convergence:** Even when it converges, the rate can be slow, requiring many iterations.
    
- **Implementation:** Requires storing two vectors, $x^{(k)}$ and $x^{(k+1)}$, during computation.
    

## **Topic: Gauss-Seidel Method (Weight: 4)**

The Gauss-Seidel method is an enhancement of the Jacobi method for iteratively solving linear systems. Like Jacobi, it decomposes the matrix $A$ into $D+L+U$. The key difference is that Gauss-Seidel uses the most recently computed values of the solution vector within the same iteration. As each component $x_i^{(k+1)}$ is calculated, it is immediately used in the calculation of the subsequent components $x_{i+1}^{(k+1)}, x_{i+2}^{(k+1)}, \ldots$.

This sequential updating approach generally leads to a faster rate of convergence than the Jacobi method. Because it incorporates new information as soon as it is available, the error is often reduced more quickly. This makes Gauss-Seidel a more common choice for serial computation, though it breaks the natural parallelism of the Jacobi method.

**Core Iteration Formulas:**

- **Component form:** The update rule highlights the use of both old $(k)$ and new $(k+1)$ values:  
    $x_i^{(k+1)} = \frac{1}{a_{ii}} \left( b_i - \sum_{j=1}^{i-1} a_{ij}x_j^{(k+1)} - \sum_{j=i+1}^{n} a_{ij}x_j^{(k)} \right)$
    
- **Matrix form:** This sequential dependency is captured in the matrix formulation:  
    $(D+L)x^{(k+1)} = b - Ux^{(k)}$  
    which can be rewritten as:  
    $x^{(k+1)} = (D+L)^{-1}(b - Ux^{(k)})$
    
- **Iteration Matrix:** The convergence properties are governed by the Gauss-Seidel iteration matrix, $T_{GS} = -(D+L)^{-1}U$.
    

**Comprehensive Solved Example:**  
Solve the same system as before: $\begin{bmatrix} 10 & -1 & 2 \ -1 & 11 & -1 \ 2 & -1 & 10 \end{bmatrix} \begin{bmatrix} x_1 \ x_2 \ x_3 \end{bmatrix} = \begin{bmatrix} 6 \ 25 \ -11 \end{bmatrix}$ with $x^{(0)} = ^T$.

1. **Formulate Gauss-Seidel equations:**  
    $x_1^{(k+1)} = \frac{1}{10}(6 + x_2^{(k)} - 2x_3^{(k)})$  
    $x_2^{(k+1)} = \frac{1}{11}(25 + x_1^{(k+1)} + x_3^{(k)})$  
    $x_3^{(k+1)} = \frac{1}{10}(-11 - 2x_1^{(k+1)} + x_2^{(k+1)})$
    
2. **Iteration 1:**  
    $x_1^{(1)} = \frac{1}{10}(6 + 0 - 0) = 0.6$  
    $x_2^{(1)} = \frac{1}{11}(25 + \mathbf{0.6} + 0) = 2.3273$ (uses new $x_1^{(1)}$)  
    $x_3^{(1)} = \frac{1}{10}(-11 - 2(\mathbf{0.6}) + \mathbf{2.3273}) = -0.9873$ (uses new $x_1^{(1)}, x_2^{(1)}$)
    
3. **Iteration 2:** Using values from $x^{(1)}$.  
    $x_1^{(2)} = \frac{1}{10}(6 + 2.3273 - 2(-0.9873)) = 1.0300$  
    $x_2^{(2)} = \frac{1}{11}(25 + \mathbf{1.0300} - 0.9873) = 2.2766$  
    $x_3^{(2)} = \frac{1}{10}(-11 - 2(\mathbf{1.0300}) + \mathbf{2.2766}) = -1.0783$
    
4. **Comparison after 2 iterations:**
    
    - Jacobi: $x^{(2)} = [1.0473, 2.2273, -0.9927]^T$
        
    - Gauss-Seidel: $x^{(2)} = [1.0300, 2.2766, -1.0783]^T$
        
    - Exact: $x = [1, 2, -1]^T$  
        Gauss-Seidel is visibly converging faster towards the exact solution.
        

|Property|Jacobi Method|Gauss-Seidel Method|
|---|---|---|
|Update Mechanism|Simultaneous (Parallel)|Sequential|
|Data Dependency|Uses only values from previous iteration $k$.|Uses most recent values available (from $k$ and $k+1$).|
|Convergence Rate|Generally slower.|Generally faster if it converges.|
|Memory|Requires two storage vectors ($x^{(k)}, x^{(k+1)}$).|Can be implemented with a single storage vector.|
|Parallelism|Highly parallelizable.|Inherently sequential, harder to parallelize.|

**Common Pitfalls:**

- Convergence for Jacobi does not imply convergence for Gauss-Seidel, and vice-versa (though for many important matrix classes like symmetric positive-definite, if one converges, both do).
    
- The order of equations can affect the convergence rate.
    

## **Topic: Successive Over-Relaxation (SOR) Method (Weight: 3)**

Successive Over-Relaxation (SOR) is an iterative method that accelerates the convergence of the Gauss-Seidel method. It achieves this by introducing a relaxation parameter, $\omega$, which is used to compute a weighted average of the previous iterate and the newly computed Gauss-Seidel iterate. By choosing an optimal $\omega$, SOR can converge significantly faster than Gauss-Seidel.

The method can be seen as taking the Gauss-Seidel step and then extrapolating by a factor of $\omega$. If $\omega=1$, SOR reduces to the Gauss-Seidel method. If $0 < \omega < 1$, the method is termed "under-relaxation" and is used to stabilize convergence for systems where Gauss-Seidel might overshoot. If $\omega > 1$, it is "over-relaxation" and is used to accelerate convergence.

**Core Formula:**  
The SOR update is a combination of the previous value and the Gauss-Seidel update:

- $x_i^{(k+1)} = (1-\omega)x_i^{(k)} + \frac{\omega}{a_{ii}}\left(b_i - \sum_{j=1}^{i-1} a_{ij}x_j^{(k+1)} - \sum_{j=i+1}^n a_{ij}x_j^{(k)}\right)$
    
- **Interpretation:** The term inside the parenthesis is the standard Gauss-Seidel update for $x_i$. SOR takes a step from the old value $x_i^{(k)}$ in the direction of this update.
    
- **Iteration Matrix:** $T_{SOR} = (D+\omega L)^{-1}((1-\omega)D - \omega U)$.
    
- **Necessary Condition:** For the method to converge for any system, it is necessary that $0 < \omega < 2$.
    

**Simple Example:**  
Consider the system $\begin{bmatrix} 4 & 3 \ 1 & 2 \end{bmatrix} \begin{bmatrix} x_1 \ x_2 \end{bmatrix} = \begin{bmatrix} 24 \ 11 \end{bmatrix}$ with $x^{(0)} = ^T$ and $\omega=1.1$.

1. **SOR equations:**  
    $x_1^{(k+1)} = (1-1.1)x_1^{(k)} + \frac{1.1}{4}(24 - 3x_2^{(k)})$  
    $x_2^{(k+1)} = (1-1.1)x_2^{(k)} + \frac{1.1}{2}(11 - x_1^{(k+1)})$
    
2. **Iteration 1:**  
    $x_1^{(1)} = -0.1(1) + \frac{1.1}{4}(24 - 3(1)) = -0.1 + 0.275(21) = 5.675$  
    $x_2^{(1)} = -0.1(1) + \frac{1.1}{2}(11 - 5.675) = -0.1 + 0.55(5.325) = 2.82875$
    

The exact solution is $x=^T$. Choosing an optimal $\omega$ (which is a non-trivial task) is key to the method's effectiveness.

## **Topic: Convergence of Iterative Methods (Weight: 4)**

The convergence of an iterative method, $x^{(k+1)} = Tx^{(k)} + c$, is a central concern in numerical linear algebra. The behavior of the iteration depends entirely on the properties of the iteration matrix $T$. A method is said to converge if the sequence of iterates $x^{(k)}$ approaches the true solution $x$ as $k \to \infty$, regardless of the initial guess $x^{(0)}$.

The fundamental condition for convergence is linked to the eigenvalues of the iteration matrix. Specifically, the method converges if and only if the spectral radius of $T$, denoted $\rho(T)$, is strictly less than 1. The spectral radius is the maximum absolute value of the eigenvalues of $T$. While this condition is both necessary and sufficient, calculating eigenvalues can be computationally expensive. Therefore, more practical, easily verifiable sufficient conditions are often used.

**Key Theoretical Concepts:**

- **Fundamental Theorem:** The iteration $x^{(k+1)} = Tx^{(k)} + c$ converges for any initial $x^{(0)}$ if and only if $\rho(T) < 1$.
    
- **Error Propagation:** The error at iteration $k$, $e^{(k)} = x^{(k)} - x$, propagates as $e^{(k)} = T^k e^{(0)}$. The norm of the error is bounded by $||e^{(k)}|| \leq ||T^k|| \cdot ||e^{(0)}||$. Convergence is faster for smaller spectral radii.
    
- **Strictly Diagonally Dominant (SDD) Matrices:** A matrix $A$ is SDD if for every row $i$, the absolute value of the diagonal element is greater than the sum of the absolute values of all other elements in that row.
    
    - $|a_{ii}| > \sum_{j \neq i} |a_{ij}|$ for all $i=1, \dots, n$.
        
- **Convergence Guarantees for SDD Matrices:**
    
    - If $A$ is strictly diagonally dominant, then both the Jacobi and Gauss-Seidel methods are guaranteed to converge.
        
    - This is a sufficient, but not necessary, condition. Methods can converge for non-SDD matrices.
        

**Jacobi and Gauss-Seidel Convergence:**

- **Jacobi:** For an SDD matrix, the iteration matrix $T_J = -D^{-1}(L+U)$ has $||T_J||_\infty < 1$, which implies $\rho(T_J) < 1$.
    
- **Gauss-Seidel:** If $A$ is SDD, it can also be shown that $\rho(T_{GS}) < 1$.
    
- **Stein-Rosenberg Theorem:** For a matrix $A$ with non-positive off-diagonal elements ($a_{ij} \leq 0$ for $i \neq j$), one of the following four conditions holds:
    
    1. $\rho(T_J) = \rho(T_{GS}) = 0$
        
    2. $0 < \rho(T_{GS}) < \rho(T_J) < 1$ (Gauss-Seidel converges faster)
        
    3. $1 = \rho(T_J) = \rho(T_{GS})$
        
    4. $1 < \rho(T_J) < \rho(T_{GS})$ (Both diverge, Gauss-Seidel faster)
        
- **Symmetric Positive-Definite Matrices:** If $A$ is symmetric and positive-definite, then the Gauss-Seidel method is guaranteed to converge. The SOR method also converges for any $\omega \in (0, 2)$.
    

**Convergence Analysis Example:**  
Check if Jacobi and Gauss-Seidel will converge for the matrix $A = \begin{bmatrix} 4 & -1 & 1 \ 1 & 4 & -2 \ 1 & -2 & 4 \end{bmatrix}$.

1. **Check for Strict Diagonal Dominance:**
    
    - Row 1: $|4| > |-1| + |1| \implies 4 > 2$ (True)
        
    - Row 2: $|4| > |1| + |-2| \implies 4 > 3$ (True)
        
    - Row 3: $|4| > |1| + |-2| \implies 4 > 3$ (True)
        
2. **Conclusion:** The matrix is strictly diagonally dominant. Therefore, both the Jacobi and Gauss-Seidel methods are guaranteed to converge for any starting vector.
    

**Common Pitfalls:**

- Confusing a sufficient condition (like SDD) with a necessary one. A method might converge even if the matrix is not SDD.
    
- The rate of convergence can be very slow if $\rho(T)$ is close to 1.
    
- For SOR, a poor choice of $\omega$ can lead to divergence even if Gauss-Seidel converges. Finding the optimal $\omega$ is generally a difficult problem.
    

---

## **Key Takeaways**

- **Direct vs. Iterative:** Direct methods (like Gauss Elimination, LU Decomposition) aim to find the exact solution in a finite number of steps, subject to round-off error. Iterative methods (Jacobi, Gauss-Seidel, SOR) start with a guess and generate a sequence of increasingly accurate approximations.
    
- **Pivoting is Crucial:** For direct methods, partial or full pivoting is essential for numerical stability to avoid division by small or zero numbers and to control error propagation.
    
- **Convergence is King:** For iterative methods, the primary concern is whether the sequence will converge to the correct solution. The spectral radius of the iteration matrix ($\rho(T) < 1$) is the ultimate criterion.
    
- **Diagonal Dominance is a Gift:** A strictly diagonally dominant matrix is a powerful, easily checkable condition that guarantees the convergence of both Jacobi and Gauss-Seidel methods.
    
- **No Free Lunch:** Gauss-Seidel typically converges faster than Jacobi but is harder to parallelize. SOR can be even faster, but its performance depends heavily on finding a good relaxation parameter $\omega$.