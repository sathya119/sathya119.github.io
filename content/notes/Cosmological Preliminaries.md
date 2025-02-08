FLRW Metric: $$ds^2=dt^2-a^2(t)(\frac{dr^2}{1-kr^2}+r^2(d\theta^2+sin^2\theta d\phi^2))=g_{\mu\nu}dx^\mu dx^\nu$$

The constant $$k=\{-1,\; 0,\; +1\}$$ corresponds to the spatial curvature (k=0 => flat universe).

The affine connection (aka #Christoffel-symbols ) are: $$\Gamma^\mu_{\nu\lambda}=\frac{1}{2}g^{\mu\sigma}(\partial_\nu g_{\lambda\sigma}+\partial_\lambda g_{\sigma\nu}-\partial_\sigma g_{\nu\lambda})$$

Hubble Parameter: $$H\equiv\frac{\dot {a}(t)}{a(t)}$$

Dark matter freeze-out occurs before Big Bang Nucleosynthesis. Thus, for a radiation dominated universe, $$H=1.66g_*^{\tfrac{1}{2}}\frac{T^2}{M_P}$$ where $$M_P=1.22\times 10^{19}\;GeV$$.

We define a dimensionless parameter $$x=\frac{m}{T}$$ and define $$H(m)$$ as: 

$$H(m)=1.66g_*^{\tfrac{1}{2}}\frac{m^2}{M_P}=Hx^2$$

The phase space distribution function f describes the occupancy number in phase space for a given particle in kinetic equilibrium and distinguishes between fermions and bosons.

$$f= \frac{1}{e^{\tfrac{(E-\mu)}{T}}\pm1}$$, where the (-) sign corresponds to bosons and the (+) corresponds to fermions. E is the energy and µ is the chemical potential.

For species in chemical equilibrium, the chemical potential is conserved in the interactions. Thus, for processes such as $$i+j\leftrightarrow c+d$$, we have $$\mu_i+\mu_j=\mu_c+\mu_d$$. Since the number of photons is not conserved in the interactions, $$\mu_\gamma = 0$$.

Now, using the expression for the phase space distribution function f and integrating in phase space, we can compute a series of observables in the Universe. In particular, the number density of particles, n, the energy density, ρ, and pressure, p, for a dilute and weakly-interacting gas of particles with g internal degrees of freedom read

$$n=\frac{g}{(2\pi)^3}\int f(\textbf{p})d^3p$$

$$\rho=\frac{g}{(2\pi)^3}\int E(\textbf{p})f(\textbf{p})d^3p$$

$$p=\frac{g}{(2\pi)^3}\int \frac{|\textbf{p}^2|}{3E(\textbf{p})}f(\textbf{p})d^3p$$

Let us now define densities normalised by the time dependent volume $$V(t)=a(t)^3$$, the reason being in the absence of number changing processes, the comoving number density remains constant with time evolution. An expanding Universe is a closed system and in thermal equilibrium, the total entropy is conserved.

$$TdS=d(\rho V)+pdV=d((\rho+p)V)-Vdp=0$$

The entropy density is therefore $$s=\frac{S}{V}=\frac{(\rho+p)}{V}$$.

We define the #yield as a fraction of the number density and entropy density as $$Y=\frac{n}{s}$$

The evolution of entropy density as a function of the temperature is given by

$$s=\frac{2\pi^2}{45}g_{*s}T^3$$, where the effective number of relativistic degrees of freedom for entropy is $$g_{*s}=\sum_{bosons}g(\frac{T_i}{T})^3+\frac{7}{8}\sum_{fermions}g(\frac{T_i}{T})^3$$.

The energy density can be expressed as 

$$\rho=\frac{\pi^2}{30}g_*T^4$$ in terms of relativistic number of degrees of freedom $$g_*=\sum_{bosons}g(\frac{T_i}{T})^4+\frac{7}{8}\sum_{fermions}g(\frac{T_i}{T})^4$$.

In these two equations, T is the temperature of the plasma and $$T_i$$ is the effective temperature of each species.

The yield can be written as:

1. Relativistic Species

$$n=\frac{g_{eff}}{\pi^2}\zeta(3)T^3$$, where $$g_{eff}=g$$ for bosons and $$g_{eff}=\tfrac{3}{4}g$$ for fermions. Remember, $$\zeta(3)\approx 1.202$$.

Hence, $$Y_{eq}=\frac{45}{2\pi^4}\zeta(3)\frac{g_{eff}}{g_{*s}}\approx0.278\frac{g_{eff}}{g_{*s}}$$

2. Non-relativistic Species

$$n=g(\frac{mT}{2\pi})^{3/2}e^{-m/T}$$. Then at equilibrium, $$Y_{eq}=\frac{45}{2\pi^4}(\frac{\pi}{8})^{1/2}\frac{g}{g_{*s}}(\frac{m}{T})^{3/2}e^{-m/T}$$.

