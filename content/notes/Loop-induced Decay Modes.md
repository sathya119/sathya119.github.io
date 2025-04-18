#### One-loop Functions

One-loop diagrams between a scalar and two vector bosons with three internal lines can be reduced to the two loop functions

$$F_\text{q-loop}(\tau)=-2\tau[1+(1-\tau)f(\tau)]$$ and $$F_\text{W-loop}(\tau)=2+3\tau+3\tau(2-\tau)f(\tau)$$,

where $\tau=4m^{2} /M^{2}_{h}$ with $m$ being the mass of the particle running in the loop and 

$$f(\tau)=\begin{cases}
\arcsin ^{2}(1 /\sqrt{ \tau })\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\text{for }\tau\geq1\\-\frac{1}{4}[\log \frac{1+\sqrt{ 1-\tau }}{1-\sqrt{ 1-\tau }}-i\pi]^{2}\;\;\;\;\;\text{for }\tau<1
\end{cases}$$.

The imaginary part in the auxiliary function $f(\tau)$ is caused if the intermediate particles can go on-shell. Let us consider the limiting cases for the two loop functions:

- When the mass of the intermediate particle is negligible compared to the Higgs mass, i.e., $\tau\rightarrow 0$, $$F_\text{q-loop}(\tau)\rightarrow -2\tau$$ and $$F_\text{W-loop}(\tau)\rightarrow 2$$.
- When the mass of the intermediate particle is much larger than the Higgs mass, i.e., $\tau\rightarrow \infty$, $$F_\text{q-loop}(\tau)\rightarrow - \frac{4}{3}$$ and $$F_\text{W-loop}(\tau)\rightarrow 7$$.

(diagrams)

**$h\rightarrow gg$**

The absence of a $hgg$ vertex in the SM Lagrangian implies that the decay $h\rightarrow gg$ is not possible at tree-level. Nevertheless, this decay mode exists. The decay is mediated by a quark loop. Due to the large top Yukawa coupling, $y_{t}\simeq1$, we would assume that the top quark loop dominates the decay width.

At one-loop level, $$\Gamma(h\rightarrow gg) = \frac{\alpha^{2}_{s}}{256\pi^{3}} \frac{M^{3}_{h}}{v^{2}}\left[ 2\left|\sum_{q=t,b,\dots}F_\text{q-loop}(\tau_{q})\right|^{2} \right]$$.

The explicit factor of 2 arises from the colour structure of the decay amplitude.

**$h\rightarrow \gamma \gamma$**

Similar to the $h\rightarrow gg$ decay, this decay is not possible at tree-level; there is no $h\gamma \gamma$ vertex in the SM Lagrangian. Besides quark loops, loop diagrams with W bosons and charged fermions also contribute to the decay width. Due to different spin statistics of fermions and bosons, we expect them to partially cancel each other.

At one-loop level, $$\Gamma(h\rightarrow \gamma \gamma)= \frac{\alpha^{2}_{e}}{256\pi^{3}} \frac{M^{3}_{h}}{v^{2}}\left| \sum_{f=t,b,c,\tau,\dots}N_{f}Q^{2}_{f}F_{\text{f-loop}}(\tau _{f})+F_{\text{W-loop}}(\tau_{f}) \right|^{2}$$.

Here, $N_f$ is a colour factor (3 for quarks and 1 for leptons), and $Q_f$ is the electric charge of the fermion in units of e.

**$h\rightarrow Z\gamma$**

This decay is also not possible at tree-level. The decay is mediated by the same set of particles as $h\rightarrow \gamma \gamma$. However, the couplings between $Z$ and the intermediate particles are different from those between $\gamma$ and the intermediate particles.

- First, the $Z$ couples to fermions with both vector and axial currents, while the $\gamma$ couples only to the vector part of the fermion current with coupling strength $Q_f e$. This leads to a slight parity violation (for example).
- Second, the $Z$ couples to the $W$ bosons with a different strength than the $\gamma$.
