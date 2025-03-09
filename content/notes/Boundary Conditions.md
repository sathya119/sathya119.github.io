The boundary condition admits independent periodic functions of $\sigma^+$, $\sigma^-$ for left-moving and right-moving modes respectively. It also admits linear solutions where the coefficients of $\sigma^+$, $\sigma^-$ are equal. The most general solution admits an expansion

$$X^\mu_{L}(\sigma^+)=\frac{1}{2}(x^\mu-c^\mu)+\frac{1}{2}l^2p^\mu \sigma^++\frac{i}{2}l \sum_{n\neq 0}\frac{1}{n}\tilde{\alpha}^\mu_{n}e^{-2in\sigma^+}$$

$$X^\mu_{R}(\sigma^-)=\frac{1}{2}(x^\mu+c^\mu)+\frac{1}{2}l^2p^\mu \sigma^-+\frac{i}{2}l \sum_{n\neq 0}\frac{1}{n}\alpha^\mu_{n}e^{-2in\sigma^-}$$.

- It is convenient to set $c^\mu=0$.
- The constant $x^\mu$ can be interpreted as the position of the centre of mass of a string in spacetime $\mathbb{R}^{1,D-1}$.
- The coefficient of the linear terms, $p^\mu$, has the interpretation of spacetime momentum.
- The coefficients $\tilde{\alpha}^\mu_{n}$ and $\alpha^\mu_{n}$ correspond to the excitations of the left-moving and right-moving modes of the string. We require that the coordinate functions $X^\mu$ are real, i.e., $$(\alpha^\mu_{n})^*=\alpha^\mu_{-n}\text{ and } (\tilde{\alpha}^\mu_{n})^*=\tilde{\alpha}^\mu_{-n}$$.
- Finally, $l$ is a parameter with dimensions of length. By convention, we set $l:={1}/{\sqrt{\pi T}}$, and often introduce another related parameter $\alpha':=l^2/2=1/2\pi T$.

#### Open Strings

Open strings admit a similar mode expansion. Since the string now has a spatial boundary, we must re-examine the action principle and ensure that the boundary terms cancel out. Variation of the gauge-fixed action principle produces a boundary condition

$$\delta S=-T \int d\tau\left[\partial_{\sigma}X_{\mu}\delta X^\mu\right]_{\sigma=0}^{\sigma=\pi}$$

which must vanish to have a consistent action principle.

There are two ways to cancel boundary variations:

1. **Dirichlet** boundary conditions: $\delta X^\mu |_{\sigma=0,\pi}=0$ 
2. **Neumann** boundary conditions: $\partial_{\sigma} X_\mu |_{\sigma=0,\pi}=0$.

In principle, we could choose either of the two boundary conditions independently for each index $\mu=0,1,...,D-1$ and boundary $\sigma=0,\pi$. Dirichlet boundary conditions break Poincaré symmetry though.

Here, we consider Neumann boundary conditions for all coordinates at both boundaries. This corresponds to a freely propagating open string. This forces the left-moving and right-moving modes to combine into trigonometric functions. The general solution takes the form

$$X^\mu(\tau,\sigma)=x^\mu+l^2p^\mu \tau+il\sum_{n \neq 0}\frac{1}{n}\alpha^\mu_{n}e^{-in \tau}\cos(n\sigma)$$,

where the coefficients have a similar interpretation as before.

<u>Reminder:</u> $$T_{\pm}=\partial_{\pm}X^\mu \partial_{\pm}X_{\mu}=0$$.

