---
title: Review of QHO
slug: review-of-qho
---
$$H = \frac{P^2}{2m} + \frac{m\omega^2X^2}{2}$$ where $X$ and $P$ are the position and momentum operators respectively.

Let us introduce the creation and annihilation operators such that, $$[a,a^\dagger] = 1$$ and we write ansatz for $X$ and $P$ in terms of the ladder operators as, 

$$X = (a+a^\dagger)C$$

$$P = i\hbar(a-a^\dagger)B$$.

Then, $$[X,P] = -2i\hbar BC$$ and to recover the commutation to be $iℏ$, we require $-2BC = 1$.

Further, we can fix the Hamiltonian to have the form, 

$$H = (\frac{1}{2m}(-B^2\hbar^2)(a^2 + (a^\dagger)^2-\{a,a^\dagger\}))\hbar+\frac{m\omega^2}{2}(C^2)(a^2 + (a^\dagger)^2+\{a,a^\dagger\})\hbar$$

$$=E(\{a,a^\dagger\})=E(aa^\dagger+\frac{1}{2})\hbar$$.

Hence, using these two equations, we can solve for B and C obtaining,

$$X=\sqrt{\frac{\hbar}{2m\omega}}(a+a^\dagger)$$

$$P=-i\sqrt{\frac{\hbar m\omega}{2}}(a-a^\dagger)$$.

We also obtain a relation E = ℏω, i.e., 

$$H=\hbar\omega(aa^\dagger+\frac{1}{2})$$.

Hence, we interpret these ladder operators as creating and destroying quanta since,

$$[H,a^\dagger]=\hbar\omega a^\dagger$$

$$[H,a]=-\hbar\omega a$$.

The action of $a^{\dagger}(a)$ on a Hamiltonian eigenstate is to increase (decrease) the energy by $\omega$. Given the positive definite spectrum, there must be a state $\ket{0}$ such that $a\ket{0}=0$ and the whole spectrum is spanned by the Hilbert space: $$\oplus(a^{\dagger})^n\ket{0}$$ which has the following features:
- Energy is $\sim \sqrt{ \omega^{2} }$ and we have a positive spectrum.
- Creation and annihilation operators offer a simple picture of quanta.

