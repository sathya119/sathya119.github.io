The class of Two Higgs Doublet Models (2HDMs) emerge when we assume the presence of two copies of the SM-like Higgs doublet, both with hypercharge $Y=1/2$. We adopt the following notation:

$$\Phi_{1}=\begin{pmatrix}
\phi_{1}^+\\\phi^0_{1}
\end{pmatrix}\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\Phi_{2}=\begin{pmatrix}
\phi_{2}^+\\\phi^0_{2}
\end{pmatrix}$$.

- **How to place the vevs?** To avoid breaking the $U(1)_\text{e.m.}$ gauge symmetry, we put the vevs into the neutral component of both doublets.
- **How do we choose the phase of the vevs?** A relative phase between the two vevs will induce CP violation in the Higgs sector. So, for the sake of simplicity, we will consider the phases of the two vevs to be aligned.

Thus, $$\Phi_{1}=\begin{pmatrix}
\phi_{1}^+\\ (h_{1}+v_{1}+ia_{1})/\sqrt{ 2 }
\end{pmatrix}\;\;\;\;\;\;\;\;\;\;\Phi_{2}=\begin{pmatrix}
\phi_{1}^+\\ (h_{2}+v_{2}+ia_{2})/\sqrt{ 2 }
\end{pmatrix}$$.

#### Higgs Potential

$$V(\Phi_{1},\Phi_{2})=M^{2}_{11}\Phi_{1}^{\dagger}\Phi_{1}+M_{22}^{2}\Phi_{2}^{\dagger}\Phi_{2}-M_{12}^{2}(\Phi_{1}^{\dagger}\Phi_{2}+\Phi_{2}^{\dagger}\Phi_{1})+ \frac{\lambda_{1}}{2}(\Phi_{1}^{\dagger}\Phi_{1})^{2}+\frac{\lambda_{2}}{2}(\Phi_{2}^{\dagger}\Phi_{2})^{2}$$

$$+\lambda_{3}\Phi_{1}^{\dagger}\Phi_{1}\Phi_{2}^{\dagger}\Phi_{2}+\lambda_{4}\Phi_{1}^{\dagger}\Phi_{2}\Phi_{2}^{\dagger}\Phi_{1}+\frac{\lambda_{5}}{2}[(\Phi_{1}^{\dagger}\Phi_{2})^{2}+(\Phi_{2}^{\dagger}\Phi_{1})^{2}]$$.

Degrees of Freedom:

- Two complex charged scalars $\phi_{1}^\pm$ and $\phi_{2}^\pm$.
- Two CP-even real scalars $h_1$ and $h_2$.
- Two CP-odd real scalars $a_1$ and $a_2$.
- We can gauge away one of the complex charged scalars and one of the CP-odd real scalars as Goldstone bosons. It could be a linear combination as well.
- Thus, we remain with one complex charged Higgs boson $H^\pm$, two CP-even real scalars $h^0$ and $H^0$, and one CP-odd real scalar $A^0$. By convention, $h^0$ denotes the lighter of the two neutral scalars.

In the SM, the derivatives of the Goldstone bosons mix into their respective gauge boson with a derivative. Since $v$ is a constant, this derivative must apply to the Goldstone mode:

$$\mathcal{L}^{\text{SM}}\supset-i \frac{g}{\sqrt{ 2 }}v(\partial_{\mu}\phi^-)W^{+\mu}+i \frac{g}{\sqrt{ 2 }}v(\partial^\mu \phi^+)W^{-\mu}+ \frac{e}{\sqrt{ 2 }\sin \theta_{W} \cos \theta_{w}}v(\partial_{\mu}a)Z^\mu$$,

where $a$ corresponds to $\phi_4$ discussed in [[Standard Model Higgs Sector]]. In the 2HDMs, we instead have

$$\mathcal{L}^{\text{2DHM}}\supset-i \frac{g}{\sqrt{ 2 }}\partial_{\mu}(v_{1}\phi_{1}^- + v_{2}\phi_{2}^-)W^{+\mu}+\text{h.c.}+ \frac{e}{\sqrt{ 2 }\sin \theta_{W}\cos \theta_{w}}\partial_{\mu}(v_{1}a+v_{2}a)Z^\mu$$

$$\equiv-i \frac{g}{\sqrt{ 2 }}V\partial_{\mu}G^-W^{+\mu}+\text{h.c.}+\frac{e}{\sqrt{ 2 }\sin \theta_{W}\cos \theta_{w}}V\partial_{\mu }G^0Z^\mu$$.

Here, $V^{2}=v_{1}^{2}+v_{2}^{2}$, which is the vev responsible for the masses of $W$ and $Z$, i.e.,

$$M^{2}_{W}=\frac{g^{2}}{4}V^{2}\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;M^{2}_{Z}= \frac{g^{2}+g'^{2}}{4}V^{2}$$,

with $V\simeq 246 \text{ GeV}$. The fields $G^\pm$ and $G^0$ are the Goldstone modes of the theory, defined as

$$G^\pm=\frac{v_{1}}{V}\phi^\pm_{1}+\frac{v_{2}}{V}\phi_{2}^\pm=\cos \beta \phi_{1}^\pm+\sin \beta \phi_{2}^\pm$$ and

$$G^0=\frac{v_{1}}{V}a_{1}+\frac{v_{2}}{V}a_{2}=\cos \beta a_{1}+\sin \beta a_{2}$$, where $\tan \beta=v_{2}/v_{1}$.

The physical fields are

$$H^\pm=-\sin \beta \phi^\pm_{1} + \cos \beta \phi_{2}^\pm,\;\;\;\;\;\;\;\;\;\;A^0=-\sin \beta a_{1}+\cos \beta a_{2}$$.

Since there are no other charged scalars in the theory that they could mix with, $H^\pm$ must be mass eigenstates. If CP is conserved by the new scalar sector, then the CP-odd scalar $A^0$ cannot mix with any other scalars, which are all CP-even. Hence, $A^0$ must also be a mass eigenstate. The two CP-even real scalars are

$$h^0=-\sin \alpha h_{1}+\cos \alpha h_{2},\;\;\;\;\;\;\;\;\;\;H^0=\cos \alpha h_{1}+\sin \alpha h_{2}$$.

We now use $v_{1}=V\cos \beta$ and $v_{2}=V\sin \beta$ as well as the inversion of the above.

The $hWW$ and $hZZ$ couplings in the Lagrangian have the form

$$\mathcal{L}\supset \frac{g^{2}}{2}[v_{1}h_{1}+v_{2}h_{2}]W^+_{\mu}W^{-\mu}+ \frac{g^{2}+g'^{2}}{4}[v_{1}h_{1}+v_{2}h_{2}]Z_{\mu}Z^\mu$$.

Thus, $$v_{1}h_{1}+v_{2}h_{2}=V[\sin(\beta-\alpha)h^0+\cos(\beta-\alpha)H^0]$$.

#### Yukawa Term

$$\mathcal{L}_{\text{Yukawa}}\supset-\left( y_{ij}^{d,1} \frac{v_{1}}{\sqrt{ 2 }}+y_{ij}^{d,2} \frac{v_{2}}{\sqrt{ 2 }} \right)\bar{d}_{R_{i}}d_{L_{j}}+\text{h.c.}$$.

This is interesting since we can readily diagonalise one of the Yukawa matrices in the SM. In general however, we cannot diagonalise both matrices simultaneously. In the absence of alignment of the Yukawas, the 2HDMs then allow for flavour-changing neutral current processes mediated by scalar interactions at tree-level, i.e., couplings of the form:

(diagram)

