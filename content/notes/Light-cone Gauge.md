Singling out one component of $X^\mu$ will manifestly break D-dimensional Poincaré invariance. Let us introduce spacetime light-cone coordinates:

$$X^\pm=\frac{1}{\sqrt{ 2 }}(X^0\pm X^1)$$.

The remaining transverse coordinates are denoted by $X^i=1,...,D-2$. In these coordinates, indices are raised and lowered by

$$V^+=-V_{-}\;\;\;\;\;V^-=-V_{+}\;\;\;\;\;V^i=V_{i}$$

and 

$$U.V=U^iV_{i}-U^+V^--U^-V^+$$.

The light-cone gauge condition singles out the components $X^+$.

Consider the expansion of $X^\mu(\tau,\sigma)$ for the classical open string:

$$X^\mu(\tau,\sigma)=x^\mu+\ell^2p^\mu \tau+i\ell \sum_{n\neq{0}} \frac{1}{n}\alpha^\mu_{n}e^{-i n\tau}\cos(n\sigma)$$.

The light-cone gauge condition uses the residual gauge transformation to choose the world-sheet time coordinate $\tau=X^+/p^++\text{constant}$, or more precisely

$$X^+(\tau,\sigma)=x^++\ell^{2}p^\mu \tau$$.

This condition sets the modes $\alpha_{n}^+=0$ for all $n\neq0$. Let us show that the Virasoro constraints can be solved and $X^-$ coordinate function be eliminated, leaving only the transverse coordinates $X^i$. Recall,

$$(\dot{X}\pm X')^{2}=0$$.

In light-cone gauge,

$$\dot{X}^+=\ell^{2}p^+\;\;\;\;\;\;\;\;X'^+=0$$.

Thus, our constraints become, $$\sum_{i} (\dot{X}^i\pm X'^i)^{2}=2\ell^{2}p^+(\dot{X}^-\pm X'^-)$$ where $i=2,\dots,D-1$. With the exception of the constant term $x^-$, these two equations allow us to completely solve for $X^-$ in terms of the $X^i$ and so, we no longer have independent oscillator modes in this direction either.

Let us now express the constraints in terms of the Fourier modes as $L_m=0$ for all integers $m$. Thus, expanding all the Virasoro generators in light-cone gauge,

$$L_{m}=\frac{1}{2}\sum_{n=-\infty}^\infty (\alpha^i_{m-n}\alpha^i_{n}-\alpha^-_{m-n}\alpha^-_{n}-\alpha^-_{m-n}\alpha^+_{n})=\frac{1}{2}\sum_{n=-\infty}^\infty \alpha^i_{m-n}\alpha^i_{n}-\frac{1}{2}(\alpha_{0}^+\alpha_{m}^--\alpha^-_{m}\alpha_{0}^+)$$

$$=\frac{1}{2}\sum_{n=-\infty}^\infty \alpha^i_{m-n}\alpha^i_{n}-\ell p^+\alpha^-_{m}$$.

The constraints $L_m=0$ are therefore solved by $$\alpha^-_{m}=\frac{1}{2\ell p^+}\sum_{n=-\infty}^\infty \alpha^i_{m-n}\alpha^i_{n}$$ and this eliminates the modes $\alpha^-_{m}$ in terms of the light-come momentum $p^+$ and the transverse modes $\alpha^i_{m}$. The special case $L_{0}=0$ reproduces the mass-shell condition

$$\alpha'M^{2}=N$$ where $$N=\sum_{m=1}^\infty \alpha^i_{-m}\alpha^i_{m}$$ is the classical number operator but now restricted to only the transverse modes.

Similarly, for the closed string, we obtain the classical mass-shell and level-matching conditions 

$$\alpha'M^{2}=2(N+\tilde{N})$$ and $$N-\tilde{N}=0$$ where $N,\tilde{N}$ are classical number operators for the right- and left- moving modes but now restricted to the transverse polarisations.
