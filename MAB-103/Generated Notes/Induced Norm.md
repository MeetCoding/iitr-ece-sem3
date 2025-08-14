# Matrix Norms: Induced Norms - Lecture Notes

## **What is a Matrix Norm in Layman Terms**

A matrix norm is essentially a way to measure the "size" or "magnitude" of a matrix, similar to how we measure the length of a vector or the absolute value of a number. In practical terms, a matrix norm tells us how much a matrix can "stretch" or "amplify" vectors when we multiply them together. Think of it as measuring the maximum possible amplification factor that the matrix can apply to any vector - this helps us understand how the matrix transforms space and is crucial for analyzing numerical stability in computational methods.

## **Topic: Induced Norm (Weight: 4)**

An induced matrix norm (also called operator norm or subordinate norm) measures the maximum amplification factor that a matrix $A$ applies to unit vectors. The induced norm is defined as the supremum of the ratio $\frac{||Ax||}{||x||}$ over all non-zero vectors $x$, representing the largest possible stretching factor the matrix can produce.

Induced norms are fundamental in numerical analysis because they provide bounds on how matrix operations affect vector magnitudes, directly linking matrix properties to computational stability and error propagation. These norms are naturally compatible with vector norms, satisfying the submultiplicative property essential for analyzing iterative methods and matrix conditioning.

**Core Definition and Formula:**

- **General induced norm:** $||A|| = \max_{x \neq 0} \frac{||Ax||}{||x||} = \max_{||x||=1} ||Ax||$
    
- **Alternative formulation:** $||A|| = \sup_{||x|| \leq 1} ||Ax||$
    
- **Submultiplicative property:** $||AB|| \leq ||A|| \cdot ||B||$
    
- **Consistency condition:** $||Ax|| \leq ||A|| \cdot ||x||$ for all vectors $x$
    
- **Unity preservation:** $||I|| = 1$ where $I$ is the identity matrix
    

## **Topic: 1-Norm (Weight: 4)**

The 1-norm of a matrix (also called maximum column sum norm) is the largest sum of absolute values among all columns. This norm corresponds to the induced norm when using the 1-norm for vectors, representing the maximum amplification factor for vectors measured in the $\ell^1$ sense.

The 1-norm provides computational advantages due to its simple calculation requiring only addition and comparison operations. It frequently appears in optimization problems and linear programming contexts where $\ell^1$ constraints are natural, such as sparsity-promoting regularization.

**Definition and Computation:**

- **Formula:** $||A||_1 = \max_{1 \leq j \leq n} \sum_{i=1}^m |a_{ij}|$
    
- **Interpretation:** Maximum column sum of absolute values
    
- **Induced relationship:** $||A||_1 = \max_{||x||_1 = 1} ||Ax||_1$
    
- **Computational complexity:** $O(mn)$ operations for $m \times n$ matrix
    

**Complete Derivation:**  
For the induced 1-norm, we need to find $\max_{||x||_1 = 1} ||Ax||_1$. Let $x = [x_1, x_2, \ldots, x_n]^T$ with $||x||_1 = \sum_{i=1}^n |x_i| = 1$.

The $i$-th component of $Ax$ is $(Ax)_i = \sum_{j=1}^n a_{ij}x_j$, so:  
$||Ax||_1 = \sum_{i=1}^m |Ax|_i = \sum_{i=1}^m \left|\sum_{j=1}^n a_{ij}x_j\right| \leq \sum_{i=1}^m \sum_{j=1}^n |a_{ij}||x_j| = \sum_{j=1}^n |x_j| \sum_{i=1}^m |a_{ij}|$

Since $||x||_1 = 1$, we have $||Ax||_1 \leq \max_{1 \leq j \leq n} \sum_{i=1}^m |a_{ij}|$.

**Detailed Solved Example:** Find $||A||_1$ for $A = \begin{bmatrix} 2 & -1 & 3 \ 4 & 0 & -2 \ -1 & 5 & 1 \end{bmatrix}$

**Step 1:** Calculate sum of absolute values for each column:  
Column 1: $|2| + |4| + |-1| = 2 + 4 + 1 = 7$  
Column 2: $|-1| + |0| + |5| = 1 + 0 + 5 = 6$  
Column 3: $|3| + |-2| + |1| = 3 + 2 + 1 = 6$

**Step 2:** Select maximum column sum:  
$||A||_1 = \max{7, 6, 6} = 7$

**Verification Example:** Choose $x = ^T$ (unit vector in 1-norm):  
$Ax = \begin{bmatrix} 2 \ 4 \ -1 \end{bmatrix}$, $||Ax||_1 = |2| + |4| + |-1| = 7 = ||A||_1$

**Properties and Applications:**

- **Computational efficiency:** Simple summation and comparison operations
    
- **Sparsity preservation:** Often used with sparse matrices in optimization
    
- **Error analysis:** Provides bounds for perturbation analysis in linear systems
    
- **Condition number:** Combined with inverse norm gives $\kappa_1(A) = ||A||_1 \cdot ||A^{-1}||_1$
    

## **Topic: 2-Norm (Weight: 4)**

The 2-norm of a matrix (spectral norm) equals the largest singular value of the matrix, representing the maximum amplification factor for vectors in the Euclidean sense. This norm is induced by the vector 2-norm and provides the tightest possible bound for the ratio $\frac{||Ax||_2}{||x||_2}$.

The 2-norm has deep connections to the singular value decomposition and eigenvalue analysis, making it central to understanding matrix conditioning, least squares problems, and principal component analysis. Unlike other matrix norms, the 2-norm directly relates to the geometric properties of linear transformations.

**Definition and Key Properties:**

- **Formula:** $||A||_2 = \sigma_1(A) = \sqrt{\lambda_{\max}(A^TA)}$
    
- **Singular value connection:** Largest singular value of $A$
    
- **Symmetric matrices:** $||A||_2 = \rho(A)$ when $A$ is symmetric
    
- **Unitary invariance:** $||UAV||_2 = ||A||_2$ for unitary matrices $U, V$
    
- **Induced relationship:** $||A||_2 = \max_{||x||_2 = 1} ||Ax||_2$
    

**Complete Derivation Using SVD:**  
Every matrix $A$ has a singular value decomposition $A = U\Sigma V^T$ where $U, V$ are orthogonal and $\Sigma = \text{diag}(\sigma_1, \sigma_2, \ldots, \sigma_r)$ with $\sigma_1 \geq \sigma_2 \geq \cdots \geq \sigma_r \geq 0$.

For any unit vector $x$ with $||x||_2 = 1$:  
$||Ax||_2^2 = ||U\Sigma V^Tx||_2^2 = ||\Sigma V^Tx||_2^2$ (since $U$ is orthogonal)

Let $y = V^Tx$, then $||y||_2 = ||x||_2 = 1$ and:  
$||\Sigma y||_2^2 = \sum_{i=1}^r \sigma_i^2 y_i^2 \leq \sigma_1^2 \sum_{i=1}^r y_i^2 \leq \sigma_1^2$

Equality holds when $y = e_1 = [1, 0, \ldots, 0]^T$, giving $x = Ve_1$.

**Computational Example:** Find $||A||_2$ for $A = \begin{bmatrix} 3 & 1 \ 1 & 3 \end{bmatrix}$

**Step 1:** Compute $A^TA$:  
$A^TA = \begin{bmatrix} 3 & 1 \ 1 & 3 \end{bmatrix} \begin{bmatrix} 3 & 1 \ 1 & 3 \end{bmatrix} = \begin{bmatrix} 10 & 6 \ 6 & 10 \end{bmatrix}$

**Step 2:** Find eigenvalues of $A^TA$:  
Characteristic polynomial: $\det(A^TA - \lambda I) = (10-\lambda)^2 - 36 = \lambda^2 - 20\lambda + 64$  
Eigenvalues: $\lambda_1 = 16$, $\lambda_2 = 4$

**Step 3:** Calculate 2-norm:  
$||A||_2 = \sqrt{\lambda_{\max}(A^TA)} = \sqrt{16} = 4$

**Alternative for Symmetric Matrices:** Since $A$ is symmetric, $||A||_2 = \rho(A) = 4$ (largest eigenvalue magnitude).

**Geometric Interpretation and Applications:**

- **Geometric meaning:** Maximum stretching factor in any direction
    
- **Least squares:** Central to understanding solution sensitivity
    
- **Condition number:** $\kappa_2(A) = \frac{\sigma_1(A)}{\sigma_n(A)}$ for stability analysis
    
- **Principal components:** First singular vector gives direction of maximum variance
    

## **Topic: Infinity Norm (Weight: 4)**

The infinity norm of a matrix (maximum row sum norm) is the largest sum of absolute values among all rows. This norm is induced by the vector infinity norm and represents the maximum amplification factor when measuring vectors using the maximum absolute component.

The infinity norm provides computational efficiency and intuitive interpretation in applications where the maximum component dominance is important. It frequently appears in numerical analysis for bounding errors and analyzing convergence rates of iterative methods.

**Definition and Calculation:**

- **Formula:** $||A||_\infty = \max_{1 \leq i \leq m} \sum_{j=1}^n |a_{ij}|$
    
- **Interpretation:** Maximum row sum of absolute values
    
- **Induced relationship:** $||A||_\infty = \max_{||x||_\infty = 1} ||Ax||_\infty$
    
- **Computational cost:** $O(mn)$ operations for $m \times n$ matrix
    

**Rigorous Derivation:**  
For the induced infinity norm, we seek $\max_{||x||_\infty = 1} ||Ax||_\infty$. Let $x = [x_1, x_2, \ldots, x_n]^T$ with $||x||_\infty = \max_{j} |x_j| = 1$.

The $i$-th component of $Ax$ satisfies:  
$|(Ax)_i| = \left|\sum_{j=1}^n a_{ij}x_j\right| \leq \sum_{j=1}^n |a_{ij}||x_j| \leq \left(\max_j |x_j|\right) \sum_{j=1}^n |a_{ij}| = \sum_{j=1}^n |a_{ij}|$

Therefore: $||Ax||_\infty = \max_i |(Ax)_i| \leq \max_{1 \leq i \leq m} \sum_{j=1}^n |a_{ij}|$

**Comprehensive Solved Example:** Find $||A||_\infty$ for $A = \begin{bmatrix} 1 & -2 & 3 & 0 \ 4 & 1 & -1 & 2 \ 0 & 3 & 2 & -1 \ -1 & 0 & 0 & 4 \end{bmatrix}$

**Step 1:** Calculate sum of absolute values for each row:  
Row 1: $|1| + |-2| + |3| + |0| = 1 + 2 + 3 + 0 = 6$  
Row 2: $|4| + |1| + |-1| + |2| = 4 + 1 + 1 + 2 = 8$  
Row 3: $|0| + |3| + |2| + |-1| = 0 + 3 + 2 + 1 = 6$  
Row 4: $|-1| + |0| + |0| + |4| = 1 + 0 + 0 + 4 = 5$

**Step 2:** Select maximum row sum:  
$||A||_\infty = \max{6, 8, 6, 5} = 8$

**Verification:** Choose $x = [1, 1, -1, 1]^T$ (note $||x||_\infty = 1$):  
$Ax = \begin{bmatrix} 1-2-3+0 \ 4+1+1+2 \ 0+3-2-1 \ -1+0+0+4 \end{bmatrix} = \begin{bmatrix} -4 \ 8 \ 0 \ 3 \end{bmatrix}$

$||Ax||_\infty = \max{|-4|, |8|, |0|, |3|} = 8 = ||A||_\infty$

**Comparison Table of Matrix Norms:**

|Norm|Formula|Computation|Geometric Meaning|Applications|
|---|---|---|---|---|
|1-norm|$\max_j \sum_i \|a_{ij}\|$|Column sums|Max column stretch|Sparsity, optimization|
|2-norm|$\sigma_1(A)$|SVD/eigenvalues|Max directional stretch|Least squares, conditioning|
|$\infty$-norm|$\max_i \sum_j \|a_{ij}\|$|Row sums|Max component amplification|Error analysis, stability|

**Practical Applications and Properties:**

- **Perturbation bounds:** Used in backward error analysis for linear systems
    
- **Iterative methods:** Appears in convergence analysis for Jacobi and Gauss-Seidel
    
- **Computational advantage:** No eigenvalue computation required unlike 2-norm
    
- **Dual relationship:** $||A^T||_1 = ||A||_\infty$ (transpose duality)
    

---

## **Key Takeaways**

- **Induced norm definition:** $||A|| = \max_{x \neq 0} \frac{||Ax||}{||x||} = \max_{||x||=1} ||Ax||$ measures maximum vector amplification
    
- **Computation shortcuts:** 1-norm uses column sums, $\infty$-norm uses row sums, 2-norm requires singular values
    
- **Submultiplicative property:** $||AB|| \leq ||A|| \cdot ||B||$ enables error propagation analysis in matrix computations
    
- **Norm equivalence:** All matrix norms are equivalent with bounded ratios, but computational costs vary significantly
    
- **Practical selection:** Choose 1-norm or $\infty$-norm for quick estimates, 2-norm for geometric insight and optimal bounds