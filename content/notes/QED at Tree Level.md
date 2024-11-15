1. Electron-Muon Scattering
	(insert diagrams)
$$i\mathcal{M}=\bar{u}_\alpha(p_1,s^,)(-ie)\gamma^\mu_{\alpha\beta}u_\beta(k_1,s)\frac{-i(g_{\mu\nu}-(\xi-1\frac{q_\mu q_\nu}{q^2}))}{q^2+i\epsilon}\bar{u}_\gamma(p_2,r^,)(-ie)\gamma^\nu_{\gamma\delta}u_\delta(k_2,r)$$ where the middle term denotes the photon propagator with the electron and muon lines to its left and right respectively.
	Observe that
$$\bar{u}(p_1)\not qu(k_1) = 0\text{ since q = k1 - p1 = k2 - p2}$$
	To further simplify our result, we will choose the Feynman Gauge (ξ = 1) and drop the +iϵ from the propagators:
$$i\mathcal{M}=ie^2\bar u(p_1,s^,)\gamma^\mu_{\alpha\beta}u_\beta(k_1,s)\frac{1}{q^2}\bar u_\gamma(p_2,r^,)\gamma_{\gamma\delta ,\nu}u_\delta(k_2,r)$$
	Now, to compute the cross-section, we use the following identity:
$$[\bar u(p_1)\gamma^{\mu_1}...\gamma^{\mu_n}u(p_2)]^\dagger=\bar u(p_2)\gamma^{\mu_n}...\gamma^{\mu_1}u(p_1)$$
	So, 
$$|\mathcal{M}|^2 = \mathcal{M}.\mathcal{M}^*=\frac{e^4}{q^4}[\bar u(p_1)\gamma^\mu u(k_1)\bar u(p_2)\gamma_\mu u(k_2)].[\bar u(k_2)\gamma_{\mu^,} u(p_2)\bar u(k_1)\gamma^{\mu^,} u(p_1)]$$
	- Summing/Averaging
		- Few Identities
			1. $$\sum_su_\alpha(p,s)\bar u_\beta(p,s)=(\cancel{p}+m)_{\alpha\beta}\;;\;\cancel p=p_\mu\gamma^\mu$$
			2. $$\sum_sv_\alpha(p,s)\bar v_\beta(p,s)=(\cancel p - m)_{\alpha\beta}$$
			3. $$\sum_\lambda \epsilon_\mu(k,\lambda)\epsilon_\mu^*(k,\lambda)=-g_{\mu\nu}+\frac{k_\mu \bar k_\nu+\bar k_\mu k_\nu}{k.\bar k}\;;\;k^\mu=(E,\vec{k}),\;\bar k^\mu =(E,-\vec{k})$$
		$$\sum_{s, s'}\bar u_\alpha(p_1,s')\gamma^\mu_{\alpha\beta}u_\beta(k_1,s)\bar u_{\beta'}(k_1,s)\gamma^{\mu'}_{\beta'\alpha'}u_{\alpha'}(p_1,s')$$$$=\gamma^\mu_{\alpha\beta}\underbrace{\sum_{s}u_\beta(k_1,s)\bar u_{\beta'}(k_1,s)}_{(\cancel {k_1}+m)_{\beta\beta'}}\gamma^{\mu'}_{\beta'\alpha'}\underbrace{\sum_{s'}u_{\alpha'}(p_1,s')\bar u_\alpha(p_1,s')}_{(\cancel {p_1}+m)_{\alpha'\alpha}}$$$$=\gamma^\mu_{\alpha\beta}(\cancel{k_1}+m)_{\beta\beta'}\gamma^{\mu'}_{\beta'\alpha}(\cancel{p_1}+m)_{\alpha'\alpha}=Tr[\gamma^\mu(\cancel{k_1}+m)\gamma^{\mu'}(\cancel{p_1}+m)]$$
		So, $$<|\mathcal{M}|^2>=\frac{1}{2.2}\frac{e^4}{q^4}Tr[\gamma^\mu(\cancel{k_1}+m_e)\gamma^{\mu'}(\cancel{p_1}+m_e)]Tr[\gamma_\mu(\cancel{k_2}+m_\mu)\gamma_{\mu'}(\cancel{p_2}+m_\mu)]$$
		The two half factors come from the fact that we are averaging over both the electrons an muons two spin states s and s’.
	[[Dirac Matrices]]
		