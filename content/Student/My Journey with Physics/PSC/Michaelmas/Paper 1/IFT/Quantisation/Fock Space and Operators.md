---
title: Fock Space and Operators
slug: fock-space-and-operators
---
Any CFT (classical field theory), upon quantisation, gives us the Hamiltonian and Fock Space. We use these to lay out the expectation for any given observable $\mathcal{O}$ (Hermitian operator).

- Schrödinger

$$\bra{s,t}\mathcal{O}(\vec{x})\ket{s,t}\;\;\;\;\;\;\;\;\;\;\;\;\;i\hbar \frac{\partial}{\partial t}\ket{s,t}=H\ket{s,t}$$.

- Heisenberg

$$\bra{s}\mathcal{O}(t, \vec{x})\ket{s}\;\;\;\;\;\;\;\;\;\;\;\;\;i\hbar \frac{\partial}{\partial t}\mathcal{O}=[\mathcal{O},H]$$.

Now, these two pictures are equivalent since the position is a label.

We define the evolution operator $$\ket{s,t}=U_{0}(t,0)\ket{s,0}$$ and $$\mathcal{O}(t,\vec{x})=U^{\dagger}_{0}(t,0)\mathcal{O}(0,\vec{x})U_{0}(t,0)$$ so both pictures give $$\bra{s,0}U^{\dagger}_{0}(t,0)\mathcal{O}(0,\vec{x})U_{0}(t,0) \ket{s,0} $$.

For quadratic harmonic-oscillator-like theories, evolution is simple:

$$i\hbar \partial_{t}U_{0}=HU_{0}\;\;\;\;\;\;\;\;\;\;\;\;\;U_{0}(t)=-e^{iHt/\hbar}$$.

Then, $$a_{k}(t)=e^{iHt/\hbar}a_{k}e^{-iHt/\hbar}$$

$$= a_{k}+\frac{it}{\hbar}\int [dk']E_{k'}[a^{\dagger}_{k'}a_{k'},a_{k}]+\mathcal{O}(H^{2})=a_{k}+\frac{it}{\hbar}\int[dk']E_{k'}[a^{\dagger}_{k'},a_{k}]a_{k'}+\mathcal{O}(H^{2})$$

$$=a_{k}-\frac{iE_{k}t}{\hbar}a_{k}+\mathcal{O}(H^{2})$$.

For higher terms, we use the Baker-Campbell-Housdorff formula $$e^BAe^{-B}=\sum_{n} \frac{1}{n!}\overbrace{[B[B[\dots[B,}^{\text{n times}}A]]]]$$

and show that $$[H,[H,a_{k}]]=[H,-iE_{k}a_{k}]=-E^{2}_{k} a_{k}$$ where $a_{k}(t)=e^{-iE_{k}t/\hbar}a_{k}$

which carries over to $$\Phi_{I}(t,\vec{x})=\hbar \int[d \vec{k}] \sqrt{ \frac{N_{k}}{2E_{k}} }(e^{-i\omega_{k}t+i \vec{k}.\vec{x}}a_{k}+\text{h.c.})$$.

The label $I$ will be useful when talking about [[Student/My Journey with Physics/PSC/Michaelmas/Paper 1/IFT/Interactions/index|Interactions]].

> We can also use the Euler-Lagrange equations for the operator to obtain this solution,
> 
> $$(\partial^{2}_{t}-c^{2}\nabla^{2}+\alpha)\Phi_{i}(t,\vec{x})=0$$.

Now, $$\bra{0}a_{k}Ha_{k}^{\dagger}\ket{0}=E_{k}\bra{0}a_{k}a_{k}^{\dagger}\ket{0}=E_{k}(2\pi)^{3}N_{k}\delta^{3}(\vec{k}-\vec{k'})$$.

Setting aside the infinity (resolved by renormalisation), the Hamiltonian expectation value is the energy, its squared will be $E_k^2$, etc. But what about the field itself?

$$\bra{0}a_{k}\Phi_{I}(t,\vec{x})a_{k}^{\dagger}\ket{0}=\int[d \vec{k}]A\left(\bra{0} a_{k}\left(a_{k'}e^{-ik'.x}+a_{k}^{\dagger}e^{ik'.x}\right)a_{k}^{\dagger}\ket{0} \right)$$

$$=\int[d \vec{k}]A\left(e^{-ik'x}\bra{0}a_{k}\left(a_{k}^{\dagger}a_{k'}+(2\pi)^{3}N_{k}\delta^3(\vec{k}-\vec{k'}) \right) \ket{0}+e^{ikx}\bra{0}\left(a^{\dagger}_{k'}a_{k}+(2\pi)^{3}N_{k}\delta^{3}(\vec{k}-\vec{k'})\right)a^{\dagger}_{k}\ket{0}\right)=0$$,

where we have used $a_{k}\ket{0}=0$ and $\bra{0}a^{\dagger}_{k}=0$. So the expectation value of a field in a one-particle state is zero, i.e., if we measure the field value at any point at any time, we will get a $0$ on average. This however does not mean that the field is not moving since for $\Phi_{I}(t,\vec{x})^{2}$, the expectation value is non-zero. From this, we can conclude that the field is moving (oscillating) around $0$. We can picture our states as “ripples” on the field, around an average level:

![[ripples ift.light.svg]]

Note: $$\bra{0}(a_{k})^n\phi(a^{\dagger}_{k})^n\ket{0}=0$$ for any $n$. We can build $\langle\phi\rangle\neq0$ with a superposition of different $n$ states. This allows us to qualify the statement “light is made up of photons” to “light is a superposition of multiphoton states”.

## Number and Momentum Operators

$$\mathcal{N}=\int[d \vec{k}]a^{\dagger}_{k}a_{k}\;\;\;\;\;\;\;\;\;\;\;\ket{n}=(a^{\dagger}_{k})^n \ket{0}$$.

Thus, $$\mathcal{N}\ket{n}=n\ket{n}$$.

An eigenstate of $\mathcal{N}$ then has a well-defined number of particles and since $$[\mathcal{N},\Phi]=0$$, they cannot be simultaneously $\Phi$ eigenstates.

This counting can be used to define total momentum $P^i$ as $$P^i\equiv \int[d \vec{k}]\hbar k^ia_{k}^{\dagger}a_{k}$$. Then,

$$P^ia^{\dagger}_{k}\ket{0}=\hbar k^ia^{\dagger}_{k}\ket{0}$$ and $$P^i a^{\dagger}_{k_{1}}a^{\dagger}_{k_{2}}\ket{0}=2\hbar k^i_{1}a^{\dagger}_{k_{1}}a^{\dagger}_{k_{2}}\ket{0}$$.
