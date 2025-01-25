**1. Classical part**

Consider quarks - spin-1/2 fermions. They exist in 6 different flavours and can be arranged in 3 generations (check [[The Quark Model]])

Starting with the Dirac Lagrangian, we can write a kinetic and mass term for the quarks, 

$$\mathcal{L}_\psi=\sum_q \bar{\psi}_q^i(i\not\partial-m_q)\delta^{ij}\psi_q^j$$

Here, q = (u,d,s,...) are the quark flavours and i = r, g, b are the colour indices. The quarks live in the fundamental representation of SU(Nc).

The Lagrangian has a global SU(Nc) symmetry. If U is matrix in SU(Nc), then the quark and anti-quark fields transform as

$$\psi_q^i\rightarrow U_{ij}\psi_q^j$$

$$\bar\psi_q^i\rightarrow \bar\psi_q^jU_{ji}^\dagger$$

Since SU(Nc) is an exact symmetry, we can “gauge” it by requiring a gauge invariance. To do this, we allow the group elements to depend on the position in space-time, by allowing the real parameters to depend on space-time. Then,

$$\psi_q^i(x)\rightarrow U_{ij}(x)\psi_q^j(x)$$

$$\bar\psi_q^i(x)\rightarrow \bar\psi_q^j(x)(U^\dagger(x))_{ji}$$

But, the first term in the Dirac Lagrangian is not locally gauge invariant then!

$$\bar\psi(x)U^\dagger(x)\not\partial[U(x)\psi(x)]=\bar\psi(x)U^\dagger(x)\not\partial[U(x)]\psi(x)+\bar\psi(x)U^\dagger(x)U(x)\not\partial[\psi(x)]$$

$$=\bar\psi(x)U^\dagger(x)\not\partial[U(x)]\psi(x)+\bar\psi(x)\not\partial\psi(x)\not=\bar\psi(x)\not\partial\psi(x)$$

So, we introduce a covariant derivative D in place of the partial derivatives, with the property,

$$D_\mu\rightarrow D_\mu'=U(x)D_\mu U^\dagger(x)$$

To achieve this property, we introduce the gluon field A and defining

$$A_\mu\equiv A_\mu^at^a$$

$$D_\mu\equiv \partial_\mu+ig_s\underbrace{A^a_\mu t^a}_{A_\mu}$$

We will require that the gluons transform according to the adjoint representation of SU(Nc) under global gauge transformations. We also demand that the gluon field has the following local transformation property 

$$A_\mu(x)\rightarrow A_\mu'(x)=U(x)A_\mu(x)U^\dagger(x)+\frac{i}{g_s}(\partial_\mu U(x))U^\dagger(x)$$

Analogous to [[Quantum Electrodynamics]], we can give dynamics by introducing a field strength tensor 

$$F^{\mu\nu}=\frac{-i}{g_s}[D_\mu,D_\nu]=\partial_\mu A_\nu-\partial_\nu A_\mu+ig_s[A_\mu,A_\nu]$$

which transforms as 

$$F_{\mu\nu}\rightarrow F'_{\mu\nu}=UF_{\mu\nu}U^\dagger$$

$$F_{\mu\nu}\equiv F_{\mu\nu}^at^a$$

$$\implies F_{\mu\nu}^a=\partial_\mu A_\nu^a-\partial_\nu A_\mu^a-g_sf^{abc}A_\mu^b A_\nu^c$$

The third term is not present in QED and arises because the gluon field is non-abelian (gives rise to gluon self-interaction).

Finally, we add to our Lagrangian a kinetic term for the gluon field

$$\mathcal{L}_A=-\frac{1}{4}F_{\mu\nu}^aF^{a,\mu\nu}$$

This new term is Lorentz and gauge invariant. It introduces new gluon self-interactions!

Hence, our final classical Lagrangian is given by

$$\mathcal{L}_{classical}=\sum_q \bar\psi_q(i\not D-m_q)\psi-\frac{1}{4}F_{\mu\nu}^aF^{a,\mu\nu}$$

**2. Gauge fixing and Ghost terms**

The equation of motion for the gluon can be derived from Euler-Lagrange equation

$$\partial_\mu(\frac{\partial\mathcal{L}}{\partial(\partial_\mu X)})-\frac{\partial\mathcal{L}}{\partial X}=0\;\;\;\;\text{ with } X=A_\nu^a$$

If we try to calculate with the classical Lagrangian, we get 

$$(g^{\mu\nu}\partial^2-\partial^\mu\partial^\nu)A^a_\nu=0$$

This means that we cannot straightforwardly define a gluon (or photon) propagator. This is because of a gauge symmetry leading to modes with 0-eigenvalue 

$$A_\nu^a\rightarrow A_\nu^a+\partial_\mu\Lambda$$

$$\implies(g^{\mu\nu}\Box-\partial^\mu\partial^\nu)(\partial_\mu\Lambda)\equiv0$$

The path integral over-counts the configurations for the gauge field. The solution is to impose a gauge-fixing condition $$f_\omega^a[A_\mu]$$ which selects a particular gauge. This is done by the Fadeev-Popov procedure.

Now, $$\mathcal{L}_{QCD}=\mathcal{L}_{classical}+\mathcal{L}_{fix}+\mathcal{L}_{ghost}$$

$$\mathcal{L}_{fix}=-\frac{1}{2\xi}(f_\omega^a[A_\mu])^2$$

$$\mathcal{L}_{ghost}=-\bar c^a(x)M^{ab}(x)c^b(x)$$

Where $$\frac{\delta f_\omega^a[A_\mu]}{\delta \theta^b(y)}=M^{ab}(x)\delta(x-y)$$

The gauge-fixing term breaks gauge invariance, allowing unphysical modes to propagate.
The ghost field c is a scalar, anti-commuting (Grassman) and transforms in the adjoint representation of SU(Nc), and introduces unphysical modes that cancel those left by the gauge-fixing term.

<u>Note:</u> $$\delta A_\mu^a=g_sf^{abc}\delta\theta^b A_\mu^c+\partial_\mu(\delta\theta^a)$$
	**1. Covariant Gauge** ($$R_\xi$$ gauge)
	
	Defined by $$f^a[A_\mu]=\partial^\mu A^a_\mu$$
	
	Using 

