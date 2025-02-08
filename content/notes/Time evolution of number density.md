To compute the evolution of the number density operator, let us apply the covariant form of the Liouville’s operator to the corresponding phase space distribution function:

$$\hat{L}[f]=C[f]$$ where $$\hat L=p^\mu\frac{\partial}{\partial x^\mu}-\Gamma^\mu_{\sigma\rho} p^\sigma p^\rho\frac{\partial}{\partial p^\mu}$$ and C\[f\] is the collisional operator, which takes into account the processes which change the number of particles (like annihilations or decays).

In the case of a FRW Universe for which $$f(x^\mu,p^\mu)=f(t,E)$$, we have

$$\hat L=E\frac{\partial}{\partial t}-\Gamma^0_{\sigma\rho}p^\sigma p^\rho \frac{\partial}{\partial E}=E\frac{\partial}{\partial t}-H|\textbf{p}|^2\frac{\partial}{\partial E}$$

Integrating over phase space, we can relate this to the time evolution of the number density,

$$\frac{g}{(2\pi)^3}\int \frac{\hat L[f]}{E}d^3\textbf{p}=\frac{g}{(2\pi)^3}\int \frac{C[f]}{E}d^3\textbf{p}$$

$$\frac{dn}{dt}+3Hn=\frac{g}{(2\pi)^3}\int \frac{C[f]}{E}d^3\textbf{p}$$

Regarding the collisional operator, let us concentrate on annihilation processes, where SM particles (A, B) can annihilate to form DM particles (1, 2) or vice-versa. The phase space corresponding to each particle is defined as 

$$d\Pi_i=\frac{g_i}{(2\pi)^3}\frac{d^3\textbf{p}_i}{2E_i}$$, from where

$$\frac{g}{(2\pi)^3}\int \frac{C[f]}{E}d^3\textbf{p}=-\int d\Pi_Ad\Pi_Bd\Pi_1d\Pi_2(2\pi)^4\delta(p_A+p_B-p_1-p_2)[|\mathcal{M}_{12\rightarrow AB}|^2f_1f_2(1\pm f_A)(1\pm f_B)-|\mathcal{M}_{AB\rightarrow 12}|^2f_Af_B(1\pm f_1)(1\pm f_2)]$$

$$=-\int d\Pi_Ad\Pi_Bd\Pi_1d\Pi_2(2\pi)^4\delta(p_A+p_B-p_1-p_2)[|\mathcal{M}_{12\rightarrow AB}|^2f_1f_2-|\mathcal{M}_{AB\rightarrow 12}|^2f_Af_B]$$.

The terms $$(1\pm f_i)$$ account for viable phase space of the produced particles, taking into account whether they are fermions (-) or bosons (+). Assuming no CP violation in the DM sector (T invariance), $$|\mathcal{M}_{12\rightarrow AB}|^2=|\mathcal{M}_{AB\rightarrow 12}|^2\equiv|\mathcal{M}|^2$$. Also, energy conservation in the annihilation process allows us to write $$E_A+E_B=E_1+E_2$$, thus,

$$f_Af_B=f_A^{eq}f_B^{eq}=e^{-\frac{E_A+E_B}{T}}=e^{-\frac{E_1+E_2}{T}}=f_1^{eq}f_2^{eq}$$

Since the SM particles are in equilibrium, $$\frac{g}{(2\pi)^3}\int \frac{C[f]}{E}d^3\textbf{p}=-\langle\sigma v\rangle(n^2-n^2_{eq})$$, where we have defined the thermally-averaged cross-section as

$$\langle\sigma v\rangle\equiv\frac{1}{n^2_{eq}}\int d\Pi_Ad\Pi_Bd\Pi_1d\Pi_2(2\pi)^4\delta(p_A+p_B-p_1-p_2)|\mathcal{M}|^2f_1^{eq}f_2^{eq}$$.

Hence, we are left with the familiar form of Boltzmann equation,

$$\frac{dn}{dt}+3Hn=-\langle\sigma v\rangle(n^2-n^2_{eq})$$

Notice that this is an equilibrium restoring equation. If the RHS dominates, then $$n$$ traces its equilibrium value $$n\approx n_{eq}$$. However, when $$Hn>\langle\sigma v\rangle n^2$$, the RHS can be neglected, and the resulting differential equation $$\frac{dn}{n}=-3\frac{da}{a}$$ implies that $$n\propto a^{-3}$$. This equivalent to saying that the DM particles do not annihilate anymore and their number density decreases only because the scale factor of the universe increases.

- [[Freeze Out of Relativistic Species]]
- [[Freeze Out of Non-Relativistic Species]]
- [[WIMPs]]
