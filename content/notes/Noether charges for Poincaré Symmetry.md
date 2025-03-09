Poincaré Invariance is a global symmetry in the D-dimensional #Minkowski space-time $\mathbb{R}^{1,D-1}$. Hence, by [[Noether’s Theorem]], there are associated conserved charges and currents, which are spacetime momentum and angular momentum.

#### Spacetime Momentum

For an infinitesimal symmetry transformation acting on a field $\phi(\sigma)$, 

$$\phi(\sigma)\mapsto \phi(\sigma)+\epsilon\delta \phi(\sigma)$$,

the Noether current is given by $$J^a=\delta \phi\frac{\delta S}{\delta (\partial_{a}\phi)}$$.

This current is conserved, $\partial_{a} J^a=0$ as a consequence of the equations of motion and this leads to a conserved charge 

$$Q=\int_{0}^\pi d\sigma\;J^0$$.

This satisfies $\partial_{\tau}Q=0$, with appropriate boundary conditions.

![[noether current.light.svg]]

We can now apply this to infinitesimal translations $X^\mu\mapsto X^\mu+a^\mu$ with $\delta X^\mu=\epsilon^\mu$, a constant. Then, we obtain D conserved currents 

$$P^\mu_{a}=\frac{\delta S}{\delta(\partial^aX^\mu)}=-T\partial_{a}X^\mu$$

where $$S=-\frac{T}{2}\int d^2\sigma\;\partial^aX^\mu \partial_{a}X_{\mu}$$.

Now, $$\partial^aP^\mu_{a}=-T\partial^a\partial_{a}X^\mu=0$$ since the equations of motion $\partial^a\partial_{a}X^\mu=0$.

$P^\mu_{a}$ describes the spacetime momentum density, the D-dimensional momentum carried by the world-sheet. Then, the total momentum carried by a string is 

$$P^\mu:=\int_{0}^\pi d\sigma\;(P^\mu)^0=T\int_{0}^\pi d\sigma\;\partial_{\tau }X^\mu$$

We claim that $P^\mu=p^\mu$ (check [[Boundary Conditions]]), which justifies our identification of $p^mu$ as the total spacetime momentum carried by the string.

#### Spacetime Angular Momentum

Similarly, if we consider infinitesimal Lorentz transformations $\delta X^\mu=\epsilon^\mu_{\nu}X^\nu$ with $\epsilon_{\mu\nu}=-\epsilon_{\nu\mu}$, we obtain conserved currents

$$J^{\mu\nu}_{a}=T(X^\mu \partial_{a}X^\nu-X^\nu \partial_{a}X^\mu)$$,

which describe the D-dimensional angular momentum density. Then, the total angular momentum is

$$J^{\mu \nu}=T\int^\pi_{0}d\sigma\;(X^\mu \partial_{\tau}X^\nu-X^\nu \partial_{\tau}X^\mu)$$.

For Lorentz rotations, $$J^{\mu \nu}=l^{\mu \nu}+E^{\mu \nu}$$ with $l^{\mu \nu}=x^\mu p^\nu-x^\nu p^\mu$ and $$E^{\mu \nu}=-i\sum_{n=1}^\infty \frac{1}{n}(\alpha_{-n}^\mu \alpha^\nu_{n}-\alpha^\nu_{-n}\alpha^\mu_{n})$$.

We can also show that $P^\mu_{\sigma}=0$ at $\sigma=0,\pi$, meaning that no momentum flows out of the string ends, by taking $\partial_{\mu}X^\mu|_{\sigma=0,\pi}$.