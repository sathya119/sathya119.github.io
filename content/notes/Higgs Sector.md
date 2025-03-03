The [[Standard Model]] is a spontaneously broken Yang-Mills theory based on the non-abelian gauge symmetry group $SU(3)_C\times SU(2)_L \times U(1)_Y$. The $SU(3)_C$ part is irrelevant to the Higgs sector.

The Higgs Mechanism is introduced via a complex scalar field $\Phi$, which is a doublet under $SU(2)_L$ with hypercharge $Y_\Phi=1$. We parametrise this field as

$$\Phi(x)=\frac{1}{\sqrt{ 2 }}\begin{pmatrix}
\phi^+(x)\\\phi^0(x)
\end{pmatrix}=\frac{1}{\sqrt{ 2 }}\begin{pmatrix}
\phi_1(x)+i\phi_2(x)\\\phi_3(x)+i\phi_4(x)
\end{pmatrix}$$.

Here, $\phi^+(x)$ and $\phi^0(x)$ are complex scalar fields that represent the charged and neutral components of the Higgs doublet, respectively, and $\phi_1$ to $\phi_4$ are properly-normalised scalar fields. The terms in the Lagrangian that involve $\Phi$ are

$$\mathcal{L}=(D_{\mu}\Phi)^{\dagger}(D^{\mu}\Phi)-V(\Phi)+\mathcal{L}_{\text{Yukawa}}$$.

1. The kinetic term $(D_{\mu}\Phi)^{\dagger}(D^{\mu}\Phi)$ is a gauge-invariant term that involves the covariant derivative. It gives rise to kinetic terms of the Higgs boson and its interactions with the gauge bosons.
2. The potential $V(\Phi)$ is a gauge-invariant term that involves the Higgs doublet $\Phi$. It gives rise to the mass terms of the Higgs boson and its interactions with the gauge bosons.
3. The Yukawa term $\mathcal{L}_{\text{Yukawa}}$ is gauge-invariant term that involves the Higgs doublet $\Phi$ and the fermion fields. It gives rise to the mass terms of the fermion fields.

The Higgs potential is given by

$$V(\Phi)=\mu^2\Phi ^{\dagger}\Phi+\lambda(\Phi ^{\dagger}\Phi)^2,\text{ with }\Phi ^{\dagger}\Phi=\frac{1}{2}(\phi_1^2+\phi_2^2+\phi_3^2+\phi_4^2)$$.

The potential is invariant under the global $SU(2)_L\times U(1)_Y$ transformation, and for $\lambda>0$ and $\mu^2<0$, it undergoes SSB. The false vacuum is $\Phi=0$ and the true vacuum is a degenerate ground state $|\Phi|=v$, where $v=\sqrt{-\mu^2/\lambda}$. We choose the ground state as

$$\bra{0}\phi_{1}\ket{0} = \bra{0}\phi_{2}\ket{0} = \bra{0}\phi_{4}\ket{0} = 0,\;\;\;\;\;\bra{0}\phi_{3}\ket{0}=\frac{v}{\sqrt{ 2 }}$$.

We also define a new real-valued scalar field h with zero vev, which represents small deviations about the ground state in $\phi_3(x)=v+h(x)$. Then,

$$\Phi(x)=\frac{1}{\sqrt{ 2 }}\text{exp}\left[i\frac{\xi^a(x)\sigma^a}{v}\right]\begin{pmatrix}
0\\v+h(x)
\end{pmatrix}$$,

where $\sigma^a$ are the [[Pauli Matrices]] and $\xi^a(x)/v$ are local gauge phases. Identifying these phases with the three Goldstone bosons $\phi_1$, $\phi_2$ and $\phi_4$, observe that

$$\Phi(x)=\frac{1}{\sqrt{ 2 }}\begin{pmatrix}
0\\v+h(x)
\end{pmatrix}$$

is a conveniently gauged form of the Higgs doublet. This means that with the gauge fixed, we can interpret this theory in a way such that the Goldstone bosons are absent. Hence, they are not physical degrees of freedom. In our choice (Unitary) of gauge, the massive Higgs field h remains present and always shows up in the combination $v+h$. The Goldstone bosons have been absorbed by three of the four gauge bosons of $SU(2)_L\times U(1)_Y$, providing them with a third degree of freedom in the form of a longitudinal polarisation state.
