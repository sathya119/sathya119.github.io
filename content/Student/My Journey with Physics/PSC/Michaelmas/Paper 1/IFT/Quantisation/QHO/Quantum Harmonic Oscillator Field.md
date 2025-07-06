---
title: QHO Field
slug: quantum-harmonic-oscillator-field
---
$$[\phi(\vec{x}),\Pi(\vec{y})]=i\hbar\delta^3(\vec{x}-\vec{y})\mathbb{I}$$

Let us try an ansatz just as for $X$ and $P$.

$$\phi(\vec{x})=\int [d\vec{k}]A(a_ke^{i\vec{k}.\vec{x}}+a_k^\dagger e^{-i\vec{k}.\vec{x}})$$

$$\Pi(\vec{x})=-i\int [d\vec{k'}]B(a_{k'}e^{i\vec{k'}.\vec{x}}-a_{k'}^\dagger e^{-i\vec{k'}.\vec{x}})$$

with the notation $$[d\vec{k}]=\frac{d^3k}{(2\pi)^3N_k},\:[a_k,a_{k'}^\dagger]=(2\pi)^3N_k\delta^3(\vec{k}-\vec{k'})$$.

Here’s how: [[Solving the commutator]]

Now the Hamiltonian will dictate the energy relation to momentum and give us the spectrum of the theory, which should be bounded from below on energy.

- [[Example: Klein-Gorden Field]]
