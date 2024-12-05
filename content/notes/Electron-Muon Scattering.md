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
	So, $$\bra{}\mathcal{M}\ket{^2}=\frac{1}{2.2}\frac{e^4}{q^4}Tr[\gamma^\mu(\cancel{k_1}+m_e)\gamma^{\mu'}(\cancel{p_1}+m_e)]Tr[\gamma_\mu(\cancel{k_2}+m_\mu)\gamma_{\mu'}(\cancel{p_2}+m_\mu)]$$
	The two half factors come from the fact that we are averaging over both the electrons an muons two spin states s and s’.
[[Dirac Matrices]]
We can now evaluate the traces, in particular the first, $$Tr[\gamma^\mu(\cancel{k_1}+m_e)\gamma^{\mu'}(\cancel{p_1}+m_e)]=Tr[\gamma^\mu\cancel{k_1}\gamma^\nu\cancel{p_1}]+m_e\underbrace{Tr[\gamma^\mu\gamma^\nu\cancel{p_1}]}_{=0}+m_e\underbrace{Tr[\gamma^\mu\cancel{k_1}\gamma^\nu]}_{=0}+m_e^2Tr[\gamma^\mu\gamma^\nu]$$
$$=4[k_1^\mu p_1^\nu-g^{\mu\nu}(k_1.p_1)+p_1^\mu k_1^\nu]+4m_e^2g^{\mu\nu}$$
A similar expression arises for the second trace. Finally, $$\bra{}\mathcal{M}\ket{^2}=\frac{4e^2}{q^4}[k_1^\mu p_1^\nu-g^{\mu\nu}(k_1.p_1-m_e^2)+p_1^\mu k_1^\nu][k_{2\mu} p_{2\nu}-g_{\mu\nu}(k_2.p_2-m_\mu^2)+p_{2\mu} k_{2\nu}]$$
	On multiplication and contraction of the Lorentz indices, $$\bra{}\mathcal{M}\ket{^2}=\frac{4e^2}{q^4}[(k_1.k_2)(p_1.p_2)$$$$-(k_1.p_1)(k_2.p_2-m_\mu^2)+(k_1.p_2)(k_2.p_1)-(k_2.p_2)(k_1.p_1-m_e^2)+4(k_1.p_1-m_e^2)(k_2.p_2-m_\mu^2)-(k_2.p_2)(k_1.p_1-m_e^2)$$$$+(k_1.p_2)(k_2.p_1)-(k_1.p_1)(k_2.p_2-m_\mu^2)+(k_1.k_2)(p_1.p_2)$$
We introduce [[Mandelstam variables]]
Now, t=q^2. We therefore call diagrams where the propagator carries t as its momentum, t-channel diagrams and the resulting scattering process is a t-channel process. Further, $$\frac{1}{2}[s-m_e^2-m_\mu^2]=(k_1.k_2)=(p_1.p_2)$$$$\frac{1}{2}[-t+2m_e^2]=(k_1.p_1)$$$$\frac{1}{2}[-t^2+2m_\mu^2]=(k_2.p_2)$$$$[-u+m_e^2+m_\mu^2]=(k_2.p_1)=(k_1.p_2)$$
Hence, by expressing t through s and u, we obtain, $$\bra{}\mathcal{M}\ket{^2}=\frac{e^4}{t^2}[2s^2+2u^2-8(s+u)(m_e^2+m_\mu^2)+12(m_e^2+m_\mu^2)^2]$$
	Now, in the high energy limit, all the kinematic invariants are much larger than the masses. Thus, we can approximate the squared momenta to zero. $$\bra{}\mathcal{M}\ket{^2}=2e^4\frac{s^2+u^2}{t^2}$$
Then, the differential #cross-section reads, $$\frac{d\sigma}{d\Omega}=\frac{e^4}{32\pi^2s}\frac{s^2+u^2}{t^2}$$
Now, to substitute explicit expressions for collider kinematics to examine where the collision products hit the detector, we will align the electron lines along the z-directions. We define (insert drawing of the collision with angle)$$k_1=\tfrac{\sqrt{s}}{2}(1,0,0,1)\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;p_1=\tfrac{\sqrt{s}}{2}(1,sin\theta,0,cos\theta)$$$$k_2=\tfrac{\sqrt{s}}{2}(1,0,0,-1)\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;p_2=\tfrac{\sqrt{s}}{2}(1,-sin\theta,0,-cos\theta)$$
	Using this parametrisation, s takes the role of square of the centre-of-momentum scattering energy, and we can write t and u in terms of the scattering angle, $$t=-s\frac{1-cos\theta}{2}\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;u=-s\frac{1+cos\theta}{2}$$
The scattering #cross-section is then $$\frac{d\sigma}{d\Omega}=\frac{e^4}{32\pi^2s}\frac{4+(1+cos^2\theta)}{(1-cos\theta)^2}$$
This expression clearly diverges for θ->0. But, this is because we considered the high energy limit. In the real world, the electrons and muons have masses, with the latter being heavier. Hence, if we repeat the calculation keeping only the muon mass, we find $$t\sim(1-\beta cos\theta)^2\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;(\beta<1)$$
With this expression, the scattering #cross-section never diverges.