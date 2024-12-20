To redefine the theory of gravity, we want the metric to be determined by the distribution of matter and energy => Einstein’s Equations

In Newtonian gravity, $$\vec{F}=-\frac{GMm}{r^2}\vec{e}_r$$

Since this is a conservative force, $$\vec{F}=-m\vec\nabla\phi\;\;\;\;\;\;\;\;\;\;\; \text{with }\phi=-\frac{GM}{r}$$
	We can think of this as a solution of Poisson’s Equation with a delta function source, $$\nabla^2\phi=4\pi GM\delta^3(\vec{x})$$
	In general, for a mass density ρ, $$\nabla^2\phi=4\pi G\rho$$

In General Relativity, the role of this potential is played by the metric.

Consider the vacuum case, the Poisson’s Equation becomes Laplace’s Equation. Then, the Ricci tensor, $$R_{\mu\nu}=0$$

Now, what about sources? In Newtonian theory, the source was a mass density -> energy density in non-relativistic theory. In special relativity, the energy of a particle gets generalised to its four-momentum. That is, $$p^\mu=\int_V \rho^\mu$$
Thus, the relativistic generalisation of energy density is the #Stress-Energy tensor, a (2,0) tensor field which maps a covector to a vector as, $$T:n\rightarrow\rho\;\;\;\;\;\rho^\mu=T^{\mu\nu}n_\nu$$

We assume it to be symmetric. Let us now understand the components of the tensor:
	- Consider a surface t=0, so the normal has the first component as 1, rest 0. Hence, $$\rho^\mu=T^{\mu 0};\;T^{00}-\text{energy density }\rho;\;T^{i0}-\text{spatial momentum density }\rho^i$$
	- The purely spatial components are the stress tensor.

**Conservation of Energy**: In a relativistic theory, $$\partial_t\rho+\partial_i\rho^i=0$$ which in integrated form translates to - the change in energy in a region is equal to the momentum flux through its boundaries. This is equivalent to saying that the change in #Stress-Energy tensor is zero. In a curved spacetime, $$\nabla_\mu T^{\mu\nu}=0$$

Physically, the #Christoffel-symbols terms in this generalisation express the exchange of energy between matter fields and gravitational field.

**Examples:
- Cosmological constant: Suppose $$T^{\mu\nu}=\Lambda g^{\mu\nu}$$
	
	This is automatically conserved since $$\nabla_\mu g_{\rho\sigma}=0$$
	
	In QFT, vacuum fluctuations make such a constant contribution where the length scale is naturally the UV cutoff scale.
	
	Observationally, there seems to be such a contribution where the length scale is the size of the observable universe - Cosmological Constant Problem.

- Electromagnetic field: $$T^{\mu\nu}=\frac{1}{4\pi}(F^{\mu\lambda}F^\nu_\lambda-\frac{1}{4}g^{\mu\nu}F^{\lambda\sigma}F_{\lambda\sigma})$$
- 