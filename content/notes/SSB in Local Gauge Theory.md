#### Higgs Mechanism

Consider a complex scalar field $\phi(x)$, with a Lagrangian density involving the scalar field and a gauge field $A_\mu(x)$,

$$\mathcal{L}=(D_{\mu}\phi)^*(D^{\mu}\phi)-\mu^2\phi^*\phi-\lambda(\phi^*\phi)^2-\frac{1}{4}F_{\mu\nu}F^{\mu\nu}$$

Here, $D_\mu$ is the [[Covariant Derivative]] $iD_\mu = i\partial_\mu-eA_\mu$ and $F_{\mu\nu}$ is the field strength tensor of a gauge field $F_{\mu\nu}=\partial_{\mu}A_{\nu}-\partial_{\nu}A_{\mu}$. The gauge transformations are given by

$$\phi(x)\mapsto e^{i\alpha(x)}\phi(x)$$

$$A_{\mu}(x)\mapsto A_{\mu}(x)-\frac{1}{e}\partial_{\mu}\alpha(x)$$.

We assume that $\lambda>0$ and $\mu^2<0$ so that there exists a false vacuum at $\phi=0$ and a true vacuum at $|\phi|=v$, where again $v=\sqrt{-\mu^2/\lambda}$. Then, the local gauge Lagrangian becomes

$$\mathcal{L}'=\frac{1}{2}(\partial_{\mu}\eta)(\partial^{\mu}\eta)+\frac{1}{2}(\partial_{\mu}\zeta)(\partial^{\mu}\zeta)+\frac{1}{2}e^2v^2A_{\mu}A^\mu+evA_{\mu}\partial^\mu \zeta+\mu^2\eta^2+\text{further terms}$$

- The field $\zeta(x)$ is the massless Goldstone boson of the theory.
- The field $\eta(x)$ is the Higgs boson of the theory with mass $m_\eta=\sqrt{ 2\lambda }v$.
- The field $A_\mu(x)$ is the massive gauge boson of the theory with mass $m_A=ev$.
- The gauge boson and the Goldstone boson interact through the non-diagonal term $evA_\mu\partial^\mu\zeta$, which is an example of a derivative coupling.

This brief consideration shows a conundrum. Before SSB, we had a total of four real-valued degrees of freedom: two for the complex field $\phi(x)$ and two for the two physical polarisations of a massless gauge field $A_\mu(x)$. After SSB, we find five real-valued degrees of freedom: one for $\eta(x)$, one for $\zeta(x)$, and three for the three physical polarisations of a massive gauge field $A_\mu(x)$.

That means, one of the field must be unphysical! We cannot create new degrees of freedom by simply translating the field variables. For small oscillations,

$$\phi(x)\sim\frac{1}{\sqrt{ 2 }}(v+\eta(x))e^{i\frac{\zeta(x)}{v}}$$

i.e., the field $\zeta(x)$ looks awfully similar to a local gauge transformation. Let us identify $\alpha(x)=\zeta(x)/v$. This suggests that the field $\zeta(x)$ is unphysical and can be removed from the theory, achieved by choosing a gauge, e.g., the unitary gauge, in which $\alpha(x)+\zeta(x)=0$. Then,

$$\frac{1}{2}\partial_{\mu}\zeta\partial^{\mu}\zeta+\frac{1}{2}e^2v^2A_{\mu} A^\mu+evA_{\mu}\partial^\mu \zeta\mapsto\frac{1}{2}e^2v^2A_{\mu}A^\mu$$.

We are now left with 

$$\mathcal{L}'=\frac{1}{2}(\partial_{\mu}\eta)(\partial^{\mu}\eta)+\frac{1}{2}e^2v^2A_{\mu}A^\mu+\mu^2\eta^2-\frac{1}{4}F_{\mu\nu}F^{\mu\nu}+\text{interaction terms}$$.

$\zeta$ is a spurious field (false or not what is seems to be). This unwanted Goldstone boson is in fact absorbed by the gauge boson, giving it a third degree of freedom in the form of a longitudinal polarisation state.