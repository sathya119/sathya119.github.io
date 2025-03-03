#### Nambu-Goldstone Model

Consider a scalar field $\phi(x)$,

$$\phi(x)=\frac{1}{\sqrt{ 2 }}(\phi_{1}(x)+i\phi_{2}(x))$$

with a Lagrangian density

$$\mathcal{L}=(\partial_{\mu}\phi)^*(\partial^{\mu}\phi)-V(\phi)=(\partial_{\mu}\phi)^*(\partial^{\mu}\phi)-\mu^2\phi^*\phi-\lambda(\phi^*\phi)^2$$

$$=\frac{1}{2}\partial_{\mu}\phi_{1}\partial^{\mu}\phi_{1}+\frac{1}{2}\partial_{\mu}\phi_{2}\partial^{\mu}\phi_{2}-\frac{1}{2}\mu^2(\phi_{1}^2+\phi^2_{2})-\frac{1}{4}(\phi_{1}^2+\phi^2_{2})^2$$.

$\mathcal{L}$ is invariant under the global U(1) transformation: $$\phi(x)\rightarrow e^{i\alpha}\phi(x)$$. Here, global refers to the fact that $\alpha$ is not a function of the position x. We now consider two cases.

- **Case 1:** $\lambda>0$ and $\mu^2>0$ - The potential has a single minimum at $\phi_1=\phi_2=0$. Hence, the ground state is non-degenerate and therefore shares the symmetry of the potential.

![[case 1 ssb.light.svg]]

- **Case 2:** $\lambda>0$ and $\mu^2<0$ - The extrema can be determined as follows:

	$$V(|\phi|)=\frac{\mu^2}{2}|\phi|^2+\frac{\lambda}{4}|\phi|^4$$
	
	$$V'(|\phi|)=\frac{\partial V}{\partial|\phi|}=(\mu^2+\lambda|\phi|^2)|\phi|\overset{!}{=}0$$
	
	$$V''(|\phi|)=\frac{\partial^2 V}{\partial|\phi|^2}=\mu^2+3\lambda|\phi|^2$$

![[case 2 ssb.light.svg]]

The location of the extrema can be read off V’; they are located at $|\phi|=0$ and $|\phi|^2=-\mu^2/\lambda\equiv v$.

- The former corresponds to a single point with second derivative $V’’(0)=\mu^2<0$; hence it is a maximum.
- The latter corresponds to a set of points with second derivative $V’’(\mu^2/\lambda)=-2\mu^2>0$. They form a valley of minima at the configurations $\phi^2_1+\phi^2_2=-\mu^2/\lambda$, which is a circle in the $\phi_1\phi_2$-plane.


The ground state is degenerate and hence does not share the symmetry of the potential. The value $v$ is called vacuum expectation value (vev) of the field $\phi(x)$.

A common choice of ground state is $\phi_1=v$ and $\phi_2=0$, leading to the matrix element

$$\bra{0}\phi(x)\ket{0}=\frac{v}{\sqrt{ 2 }}$$.

For this (arbitrary) choice, excitations about the ground state are described by 

$$\phi(x)=\frac{1}{\sqrt{ 2 }}(v+\eta(x)+i\zeta(x))$$

where both $\eta(x)$ and $\zeta(x)$ are real fields, representing small deviations from the ground state. Then, the potential becomes

$$\mathcal{V}=\frac{\mu^2}{2}[(v+\eta)^2+\zeta^2]+\frac{\lambda}{4}[(v+\eta)^2+\zeta^2]^2$$

$$=-\frac{\lambda v^2}{2}[v^2+2v \eta+\eta^2+\zeta^2]+\frac{\lambda}{4}[v^4+4v^3\eta+6v^2\eta^2+2v^2\zeta^2+\text{terms cubic and quartic in }\eta,\;\zeta]$$

$$=\text{const}-\frac{2\lambda v^2}{2}\eta^2+\text{terms cubic/quartic in }\eta,\; \zeta$$.

Since the terms cubic and quartic in $\eta$ and $\zeta$ correspond to the (self-)interactions of the fields, we will choose to ignore them.

Then,

$$\mathcal{L}=\text{const}+\frac{1}{2}(\partial_{\mu}\eta)(\partial^{\mu}\eta)-\frac{2\lambda v^2}{2}\eta^2+\frac{1}{2}(\partial_{\mu}\zeta)(\partial^{\mu}\zeta)$$

- The field $\eta(x)$ has acquired a mass of $m_\eta=\sqrt{2\lambda}v$. It corresponds to radial oscillations about the ground state. When trying to oscillate radially in the $\phi_1\phi_2$-plane, the field $\phi(x)$ has to overcome the potential barrier at $|\phi|=v$. Such a field that acquires its mass through SSB is referred to as _a_ Higgs boson.
- The field $\zeta(x)$ remains massless. It corresponds to angular oscillations about the ground state. When trying to oscillate angularly in the $\phi_1\phi_2$-plane, the field $\phi(x)$ does not have to overcome any potential barrier; it follows the trajectory of the valley of minima at $|\phi|=v$. Such a field is called a Nambu-Goldstone boson.
