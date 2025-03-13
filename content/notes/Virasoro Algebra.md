To implement the classical constraints in canonical quantisation, we must promote the Fourier modes of the energy-momentum tensor to quantum operators. Classically,

$$L_{m}:=\frac{1}{2}\sum_{n=-\infty}^\infty \alpha_{m-n}.\alpha_{n}$$ where $\alpha_0:=lp^\mu$ for the open string and $\alpha_{0}:=lp^\mu/2$ for the closed string.

Since the classical expressions are quadratic in the raising and lowering operators, promoting them to quantum operators is ambiguous due to non-trivial commutation relations. Since $\alpha_{m-n}$ and $\alpha_n$ commute unless $m=0$, the only ambiguity arises in $L_0$: we would choose $\alpha_{-n}.\alpha_{n}$ or $\alpha_{n}.\alpha_{-n}$ or a linear combination of both for each $n\not= 0$.

Let us define quantum operators $L_m$ by normal ordering and then parametrise by a constant.

$$L_{0}:=\frac{1}{2}\sum_{n=-\infty}^\infty :\alpha_{-n}.\alpha_{n}:=\frac{\alpha_{0}^2}{2}+\sum_{n=1}^\infty \alpha_{-n}.\alpha_{n}=\frac{\alpha_{0}^2}{2}+N$$.

We can parametrise this by allowing a shift of $L_{0}\rightarrow L_{0}-a$, where $a$ is an arbitrary constant parameter. Then, from the properties of raising and lowering operators, $L_{m}^{\dagger}=L_{-m}$.

Now, $$[L_{m},L_{n}]=(m-n)L_{m+n}+\frac{D}{12}m(m^{2}-1)\delta_{m+n}$$, known as Virasoro algebra, is the result because manipulations used in the computation of Poisson brackets will no longer be valid due to infinite ordering ambiguities.
