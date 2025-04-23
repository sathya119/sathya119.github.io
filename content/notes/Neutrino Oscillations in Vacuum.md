**Atmospheric Neutrinos**

Neutrinos get produced via cosmic rays (accelerated protons, He) interacting with the atmosphere.

![[atm neutrinos.light.svg]]

$$R_{\tfrac{\mu}{e}}=\frac{N_{\nu_\mu}+N_{\bar\nu_\mu}}{N_{\nu_e}+N_{\bar\nu_e}}\sim2$$


#### Two Neutrino Oscillation

A neutrino has 3 flavours ($$\nu_e,\;\nu_\mu,\;\nu_\tau$$) and 3 mass states ($$\nu_1,\;\nu_2,\;\nu_3$$).

But, the flavour of a neutrino changes depending on where the neutrino was detected (distance/energy dependence). So, the system is described by a linear superposition of the 3 mass states.

Consider a charged current interaction.

![[cc int.light.svg]]


The Lagrangian for this interaction is

$$\mathcal{L}_{CC}\supset\frac{-ig}{\sqrt2}\bar l_\alpha\gamma^\mu P_L\nu_\alpha=\frac{-ig}{\sqrt2}\bar l_\alpha\gamma^\mu P_LU_{\alpha i}\nu_i$$ where α (= e, μ, τ) is the flavour index and i (= 1, 2, 3) denotes the mass index.

U is the PMNS mixing matrix:

$$\begin{pmatrix}\nu_e\\\nu_\mu\\\nu_\tau\end{pmatrix}=\underbrace{\begin{pmatrix} u_{e_1}&u_{e_2}&u_{e_3} \\ u_{\mu_1}&u_{\mu_2}&u_{\mu_3} \\ u_{\tau_1}&u_{\tau_2}&u_{\tau_3}\end{pmatrix}}_\text{PMNS matrix}\begin{pmatrix}\nu_1\\\nu_2\\\nu_3\end{pmatrix}$$

For example, $$\ket{\nu_e}=u_{e_1}\ket{\nu_1}+u_{e_2}\ket{\nu_2}+u_{e_3}\ket{\nu_3}$$

Hence, the neutrino travels as a linear superposition until it is measured. Then, the wavefunction collapses and neutrinos are measured a flavour state.

$$\hat{H}\psi=i\frac{d\psi}{dt}=E\psi$$

$$\psi(x,t)=\phi(x)e^{iEt}$$

The wavefunction evolves in time due to the phase shift and this allows for neutrino oscillations, i.e., the phenomenon of neutrino flavour transformation.

**Two Neutrino Mixing**

$$\ket{\nu_1(t)}=\ket{\nu_1}e^{i(p_1.x-E_1t)}$$

$$\ket{\nu_2(t)}=\ket{\nu_2}e^{i(p_2.x-E_2t)}$$

$$\begin{pmatrix}\nu_e\\\nu_\mu\end{pmatrix}=\begin{pmatrix}cos\theta&sin\theta\\-sin\theta&cos\theta\end{pmatrix}\begin{pmatrix}\nu_1\\\nu_2\end{pmatrix}$$

$$U^\dagger U=\mathbb{1}_{2\times 2}$$

Hence, $$U=\begin{pmatrix}cos\theta&sin\theta\\-sin\theta&cos\theta\end{pmatrix}$$

In the two-neutrino case, consider that a $$\nu_e$$ is created at t=0. Then,

$$\ket{\psi(0)}=\ket{\nu_e}=cos\theta\ket{\nu_1}+sin\theta\ket{\nu_2}$$

At time t,

$$\ket{\psi(L,t)}=cos\theta\ket{\nu_1}e^{-i\phi_1}+sin\theta\ket{\nu_2}e^{-i\phi_2}$$

with $$\phi_i=-\vec{p_i}L+E_it$$

