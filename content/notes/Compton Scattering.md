(insert diagram)
(insert Feynman diagrams)
The two diagrams differ in the order both the external photons are connected to the fermion line. Therefore, by momentum conservation, the momenta flowing through the fermion propagators are $$q_1=p_1+k_1\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;q_2=p_1-k_2$$
Therefore, using Mandelstam invariants, these are #s-channel and #u-channel diagrams respectively.
Now we examine the scattering amplitude of the first diagram: $$\mathcal{M}_1=\bar{u}(p_2)(-ie\gamma^\nu)\frac{i(\cancel{p_1}+\cancel{k1})}{(p_1+k_1)^2}(-ie\gamma^\mu)u(p_1)\epsilon_\mu^*(k_2,\lambda)\epsilon_\nu(k_1,\kappa)$$
This gives $$\bra{}\mathcal{M}_1\ket{^2}=\frac{e^4}{s^2}Tr[\cancel{p_2}\gamma^\mu(\cancel{p_1}+\cancel{k_1})\gamma^\nu\cancel{p_1}\gamma^{\nu'}(\cancel{p_1}+\cancel{k_1})\gamma^{\mu'}]\sum_{\epsilon,\kappa}\epsilon^*_\mu(k_1,\lambda)\epsilon_{\mu'}(k_1,\lambda)\epsilon_\nu(k_2,\kappa)\epsilon_{\nu'}^*(k_2,\kappa)$$
Recall $$\sum_{\epsilon,\kappa}\epsilon_\mu(k,\lambda)\epsilon_{\mu'}^*(k,\lambda)=-g_{\mu\mu'}+\frac{k_\mu\bar{k}_{\mu'}+\bar{k}_\mu k_{\mu'}}{k.\bar{k}}$$ we find that the second term does not contribute.
	To see this, let us consider the gauge transformation of the photon field $$A^\mu\rightarrow A^\mu-\tfrac{1}{e}\partial^\mu\alpha$$
	We can then choose the field such that it satisfies the Lorentz gauge condition $$\partial_\mu A^\mu=0$$
	Then, the Maxwell equations simplify to $$\partial^2A^\mu=0$$ giving the plane wave solution $$A^\mu=N\epsilon^\mu e^{-ik.x}$$ where N is a normalisation factor. Then, the Lorentz gauge condition implies $$k.\epsilon=0$$
There is however another gauge freedom that can be exploited; α(x) only has to fulfil $$\partial_\mu \partial^\mu \alpha=\partial^2\alpha=0$$
For the plane wave solution, this is equivalent to shifting the photon polarisation vector by a multiple β of the photon momentum $$\epsilon^\mu\rightarrow\epsilon^\mu+\beta k^\mu$$
	It still satisfies k·ϵ=0 since the free-field photon is [[on-shell]] with k^2=0
The total scattering amplitude is gauge invariant. All its contributions contain an external photon and its associated polarisation vector. Thus, $$\mathcal{M}=\epsilon^\mu\mathcal{M}_\mu$$
Then, using the above gauge transformation $$\epsilon^\mu\mathcal{M}_\mu\overset{!}{=}(\epsilon^\mu+\beta k^\mu)\mathcal{M}_\mu$$
From this follows the Ward identity $$k^\mu\mathcal{M}_\mu=0$$
	Thus, of the polarisation sum, only the metric term survives.
$$\bra{}\mathcal{M}\ket{^2}_{g_{\mu\mu'}}=\frac{e^4}{4s^2}Tr[\cancel{p_2}\gamma^\mu(\cancel{p_1}+\cancel{k_1})\gamma^\nu\cancel{p_1}\gamma_\nu(\cancel{p_1}+\cancel{k_1})\gamma_\mu]$$$$=\frac{e^4}{4s^2}Tr[(-2\cancel{p_2})(\cancel{p_1}+\cancel{k_1})(-2\cancel {p_1})(\cancel{p_1}+\cancel{k_1})]$$
With$$\cancel{p}\cancel{p}=p^2\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;p_1^2=p_2^2=0$$$$\bra{}\mathcal{M}\ket{^2}_{g_{\mu\mu'}}=\frac{e^4}{s^2}Tr[\cancel{p_2}\cancel{k_1}\cancel{p_1}\cancel{k_1}]=-2e^4\frac{u}{s}$$

