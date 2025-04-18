We now consider closed strings in the same background as before; same world-sheet action and so in particular, eom and constraints remain unchanged but boundary conditions are modified.

The periodicity now has two effects. The first is identical to particles, in that the total momentum in the periodic direction is quantised, $p^d=n/R$, with KK momentum $n\in\mathbb{Z}$. The second is that strings may wind around the periodic direction, which is captured by boundary conditions 

$$X^d(\tau,\sigma+\pi)=X^d(\tau,\sigma)+2\pi R\omega$$,

where $\omega \in\mathbb{Z}$ is known as the winding number. From the string world-sheet perspective, this is a topological [[soliton]] classified by $\pi_{1}(S^1)=\mathbb{Z}$. Configurations with winding numbers $\omega=-1,0,1,2$ are illustrated below. This phenomenon is unique to strings.

![[winding number.light.svg]]

#### Mode Expansion

A general classical solution for the world-sheet equations of motion is a sum of left- and right- moving modes

$$X^\mu(\boldsymbol{\sigma})=X^\mu_{L}(\sigma^+)+X^\mu_{R}(\sigma^-)$$.

The mode expansion for the non-periodic directions remains unchanged,

$$X^m_{L}(\sigma^+)=\frac{x^m}{2}+\frac{\ell^{2}}{2}p^m\sigma^++\frac{i\ell}{2}\sum_{n\neq0} \frac{1}{n} \tilde{\alpha}^m_{n}e^{-2in\sigma^+}$$,

$$X^m_{R}(\sigma^-)=\frac{x^m}{2}+\frac{\ell^{2}}{2}p^m\sigma^-+\frac{i\ell}{2}\sum_{n\neq0} \frac{1}{n} \alpha^m_{n}e^{-2in\sigma^-}$$,

 and for convenience, we define $\alpha^m_{0}=\tilde{\alpha}^m_{0}=\frac{\ell}{2}p^m$. In the periodic direction, we consider a slightly more general ansatz of the form

$$X^d_{L}(\sigma^+)=x^d+\ell^{2}p^d_{L}\sigma^++\frac{i\ell}{2}\sum_{n\neq0} \frac{1}{n} \tilde{\alpha}^d_{n}e^{-2in\sigma^+}$$,

$$X^d_{R}(\sigma^-)=x^d+\ell^{2}p^d_{R}\sigma^-+\frac{i\ell}{2}\sum_{n\neq0} \frac{1}{n} \alpha^d_{n}e^{-2in\sigma^-}$$,

with centre of mass position $x^d=x^d_{L}+x^d_{R}$ and momentum $p^d=p^d_{L}+p^d_{R}$ and for convenience, we define $\tilde{\alpha}^d_{0}=\ell p^d_{L}$ and $\alpha^d_{0}=\ell p^d_{R}$.

The quantisation of momentum and boundary conditions require that

$$p^d_{L}+p^d_{R}=\frac{n}{R}$$

$$p^d_{L}-p^d_{R}=\frac{R}{\alpha'}\omega$$

and thus

$$p^d_{L}=\frac{1}{2}\left( \frac{n}{R}+\frac{R\omega}{\alpha'} \right)$$

$$p^d_{R}=\frac{1}{2}\left( \frac{n}{R}-\frac{R\omega}{\alpha'} \right)$$.

Note that the contributions of the left- and right- moving modes are no longer equal when the winding number is non-trivial. But when it is, the mode expansion is the same for non-periodic directions but with the momentum quantised as $p^d=n/R$.

Computing the Virasoro generator at level zero,

$$L_{0}=\frac{\alpha_{0}^{2}}{2}+N=\frac{\alpha'}{4}\left( \frac{n}{R}-\frac{R\omega}{\alpha'} \right)^{2}-\frac{\alpha'}{4}m^{2}+N$$

$$\tilde{L}_{0}=\frac{\tilde{\alpha}_{0}^{2}}{2}+\tilde{N}=\frac{\alpha'}{4}\left( \frac{n}{R}-\frac{R\omega}{\alpha'} \right)^{2}+\frac{\alpha'}{4}m^{2}+\tilde{N}$$

where $N,\tilde{N}$ denote the classical number operators and $m^{2}:=-p^mp_{m}$ is the $d$-dimensional mass.

#### Quantisation

Let us proceed with covariant canonical quantisation. The oscillation modes are unchanged and we define ground states annihilated by all lowering operators $\alpha_{-m}^\mu$ with $m\geq1$. The ground states are again labelled by the momentum eigenvalue $p=n/R$, which is now discrete. However, we must introduce independent ground states for each winding number $\omega$, as these are distinct topological sectors. We denote the ground state by $$\ket{n,\omega} $$ with momentum $p=n/R$ and winding number $\omega$.

We now need to impose constraints in order to compute the spectrum. Let us consider the mass-shell and level-matching conditions arising from the constraints $L_{0}-a=0,\tilde{L}_{0}-a=0$. These constraints give

$$m^{2}=\left( \frac{n}{R}-\frac{R\omega}{\alpha'}^{2}\right)+\frac{4}{\alpha'} (N-a)$$

$$m^{2}=\left( \frac{n}{R}+\frac{R\omega}{\alpha'}^{2}\right)+\frac{4}{\alpha'} (\tilde{N}-a)$$.

The linear combinations $L_{0}+\tilde{L}_{0}-2a=0$ and $L_{0}-\tilde{L}_{0}=0$ give us the mass-shell and level-matching constraints

$$m^{2}=\left( \frac{n}{R} \right)^{2}+\left( \frac{R\omega}{\alpha'} \right)^{2}+\frac{2}{\alpha'}(N+\tilde{N}-2a)$$

$$0=n\omega+\tilde{N}-N$$.

There are now four contribution to the $d$-dimensional mass squared: the momentum in the periodic direction, potential energy due to winding, the left- and right- moving oscillators. For non-zero momentum and winding, the levels of the left- and right- moving modes need not match.

#### Massless Spectrum

Let us now consider the massless spectrum in $d$-dimensions with $a=1$ and compare it with the situation in field theory. In addition to the states corresponding to the excitations of the metric components $g_{mn}$, $A_m$ and $\varphi$ as in field theory, we also expect to see states corresponding to the excitations of the components $B_{mn}$, $B_{md}$ of the $B$-field and dilaton $\Phi$.

For a generic radius $R$, massless states require,

$$N=\tilde{N}=1$$ and $$n=\omega=0$$.

First, the states $$\frac{1}{2}(\alpha_{-1}^m\tilde{\alpha}_{-1}^n+\alpha_{-1}^n\tilde{\alpha}_{-1}^m)\ket{0,0}$$ and $$\frac{1}{2}(\alpha_{-1}^m\tilde{\alpha}_{-1}^n-\alpha_{-1}^n\tilde{\alpha}_{-1}^m)\ket{0,0}$$ correspond to excitations of the metric components and dilaton $g_{mn},\Phi$ and $B$-field components $B_{mn}$ respectively. Notice the additional contribution from components of the $B$-field compared to the field theory.

Second, the states $$\alpha^d_{-1}\tilde{\alpha}^m_{-1}\ket{0,0}$$ and $$\alpha^m_{-1}\tilde{\alpha}^d_{-1}\ket{0,0}$$ are excitations of $U(1)\times U(1)$ gauge fields $A^L_{m},A^R_{m}$, whose charges are the momenta $p_{L}, p_{R}$. The combination $A_{m}=A^L_{m}+A^R_{m}$ corresponds to the quantised momentum $p=p_{L}+p_{R}$ as in field theory. The additional combination $A^L_{m}-A^R_{m}$ in string theory corresponds to the winding number $\omega \propto p_{L}-p_{R}$ and arises from the components $B_{md}$ of the $B$-field.

The only remaining massless state $$\alpha^d_{-1}\tilde{\alpha}^d_{-1}\ket{0,0} $$ corresponds to excitations of the scalar field $\varphi=g_{dd}$ that determines the radius of the compactification circle.
