Let us consider a massive relativistic particle moving in flat D-dimensional #Minkowski space-time. The relativistic action principle, in non-relativistic notation is,

$$S=-m\int dt\;\sqrt{1-|\dot {\vec{x}}|^2}$$.

The canonical momenta are $$\vec p=\frac{m\dot{\vec{x}}}{\sqrt{1-|\dot {\vec{x}}|^2}}$$ and the energy is $$E=\sqrt{|\vec p|^2+m^2}$$.

The change in action is

$$\delta S=-\int dt\;\delta \vec x.\dot{\vec p}$$ and thus the equations of motion are $$\dot{\vec p}=0$$.

This formulation is asymmetric between space and time. So, to find a manifestly relativistic action principle, we introduce orthonormal coordinates $$x^\mu \ni \mu=0,...,D-1$$ on #Minkowski spacetime $$\mathbb{R}^{1,D-1}$$.

The world-line of a particle is then specified by coordinate functions $$x^\mu(\sigma)$$ depending on some real parameter $$\sigma$$.

![[map worldline.light.svg]]

This can be viewed as a map

$$x^\mu:\gamma\rightarrow\mathbb{R}^{1,D-1}$$

$$: \sigma \mapsto x^\mu(\sigma)$$

If the particle is massive, the tangent to the world-line must be timelike:

![[tangent to worldline.light.svg]]

$$-\eta_{\mu\nu}\frac{dx^\mu}{d\sigma}\frac{dx^\nu}{d\sigma}>0 \;\;\;\;\;\;\;\;\forall\;\sigma$$ where $$\eta_{\mu\nu}:=diag(-1,1,...,1)$$.

Then, the relativistic action principle is,

$$S=-m\int d\sigma\;\sqrt{-\eta_{\mu\nu}\frac{dx^\mu}{d\sigma}\frac{dx^\nu}{d\sigma}}$$ which is proportional to the proper time $$\Delta\tau$$. Therefore, we recover the important result that the world-lines of massive particles extremise proper time. The solutions are thus straight lines in $$\mathbb{R}^{1,D-1}$$.

This action principle has two important properties:

1. Poincaré Symmetry. It is manifestly invariant under Poincaré transformations,

$$x'^\mu=\Lambda^\mu_\nu x^\nu+a^\mu$$ where $$\Lambda^\mu_\rho\Lambda^\nu_\sigma\eta_{\mu\nu}=\eta_{\rho\sigma}$$.

It is a global symmetry that transforms classical solutions.

2. Reparametrisation Invariance. It is independent of the choice of parameter. If we introduce a new parameter $$\sigma \mapsto\sigma'(\sigma)$$, we have

$$\frac{dx^\mu}{d\sigma}=\frac{dx^\mu}{d\sigma'}\frac{d\sigma'}{d\sigma}$$ under which the action is invariant. Thus, we can choose the parameter $$\sigma:=x^0=t$$, and thereby reproduce the previous action (in non-relativistic notation).

It is a gauge redundancy that changes the parametrisation of classical solutions.

