If $\Lambda>>v$, we can describe the effects of potential BSM physics at energy scales of v or below without resorting to using a concrete Lagrangian model. So, we use an approach called Effective Field Theory (EFT); specifically, a subset of the Standard Model Effective Field Theory (SMEFT).

The SMEFT uses an organisation of the terms in its Lagrangian density based on the mass dimensions of its terms. We use the notation

$$\mathcal{L}=\mathcal{L}_{\text{SM}}+\sum_{d>4} \frac{1}{\Lambda^{d-4}}\mathcal{L}_{d}$$.

Here, $\mathcal{L}_d$ for $d>4$ denotes terms that are absent in the SM. They comprise field operators with total mass dimension $d>4$. At low energies $E\ll\Lambda$, the SM terms gives rise to the most dominant contributions and the remaining terms produce contributions that are suppressed by power of $(E/\Lambda)^{d-4}$.

All fields used in the construction of these operators must be from the set of SM fields; three generators of fermion fields ($Q_{L},d_{R},u_{R},L_{L}, e_{R}$), the Higgs field h, and the massive gauge boson fields $W^\pm$ and $Z$. The field operators are multiplied by the Wilson coefficients $C_i$, which are generalised coupling coefficients.

Now consider

$$\mathcal{L}_{\text{eff}}=(D_{\mu}\Phi)^{\dagger}(D^{\mu}\Phi)-\mu^{2}(\Phi ^{\dagger}\Phi)^{2}+ \frac{C_{H}}{2\Lambda^{2}}[\partial^\mu(\Phi ^{\dagger}\Phi)]^{2}- \frac{C_{6}}{\Lambda^{2}}\lambda(\Phi ^{\dagger}\Phi)^{3}$$.

We can find a minimum (using SSB) at

$$\bra{0}|\Phi^{2}|\ket{0}=\frac{v^{2}}{2}=\frac{\Lambda^{2}}{3C_{6}}\left( -1+\sqrt{ 1- \frac{3\mu^{2}C_{6}}{\Lambda^{2}\lambda} } \right)$$.

Then, $$\mu^{2}=-\lambda v^{2}\left( 1+ \frac{3}{4} \frac{C_{6}v^{2}}{\Lambda^{2}} \right)$$.

Now, if we expand $\mathcal{L}_\text{eff}$ around the conventional minimum $\Phi \simeq(0, (v+h)/\sqrt{ 2 })$, the kinetic energy term takes the form,

$$\mathcal{L}_{\text{eff}}\supset\mathcal{L}_{\text{kin}} \frac{1}{2}\left( 1+ C_{H} \frac{v^{2}}{\Lambda^{2}} \right)\partial_{\mu}h\partial^\mu+C_{H} \frac{v}{\Lambda}h\partial_{\mu}h\partial^\mu h+\dots+C_{H} \frac{1}{2\Lambda^{2}}h^{2}\partial_{\mu}h\partial^\mu h$$.

Using a non-linear redefinition of the Higgs field

$$h\mapsto\left( 1-C_{H} \frac{v^{2}}{2\Lambda^{2}} \right)h_{r}-C_{H} \frac{v}{2\Lambda^{2}}h_{r}^{2}-C_{H} \frac{1}{6\Lambda^{2}}h^{3}_{r}$$,

we can bring the kinetic term into the form

$$\mathcal{L}_{\text{kin}}=\frac{1}{2} \partial_{\mu}h_{r}\partial^\mu h_{r}+\dots$$.

The Higgs potential (with the redefinition) is then modified as

$$\mathcal{L}_{\text{self}}=-V(\Phi)=-\mu^{2}\Phi ^{\dagger}\Phi-\lambda(\Phi ^{\dagger}\Phi)^{2}- \frac{C_{6}}{\Lambda^{2}}(\Phi ^{\dagger}\Phi)^{3}=-\frac{\mu^{2}}{2}(v+h)^{2}-\frac{\lambda}{4}(v+h)^4- \frac{C_{6}\lambda}{\Lambda^{2}}(v+h)^6$$

$$\mathcal{L}_{\text{self}}=\frac{M^{2}_{h}}{2}h^{2}_{r}+\lambda_{3}vh^{3}_{r}+\frac{\lambda_{4}}{4}h^4_{r}+\dots$$,

where $$M^{2}_{h}=2\lambda v^{2}\left( 1-C_{H} \frac{v^{2}}{\Lambda^{2}}+C_{6} \frac{3}{2} \frac{v^{2}}{\Lambda^{2}} +\mathcal{O}\left( \frac{1}{\Lambda^4} \right) \right)$$,

$$\lambda_{3}=\frac{M^{2}_{h}}{2v}\left( 1+C_{H} \frac{5}{3} \frac{v^{2}}{\Lambda^{2}}- C_{6} \frac{3}{2} \frac{v^{2}}{\Lambda^{2}} \right)$$,

$$\lambda_{4}=\frac{M^{2}_{h}}{2v^{2}}\left( 1-C_{H} \frac{25}{3} \frac{v^{2}}{\Lambda^{2}}+C_{6} 6 \frac{v^{2}}{\Lambda^{2}} \right)$$.

<u>Note</u>: In the SM, the cubic and quartic couplings coincide with each other.

