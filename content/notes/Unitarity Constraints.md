Consider the scattering of two longitudinally polarised gauge bosons $W^+_{L}W^-_{L}\rightarrow W^+_{L}W^-_{L}$:

![[WW scatter.light.svg]]

Recall that 

$$\Phi ^{\dagger}\Phi=\frac{1}{2} (\phi_{1}^{2}+\phi_{2}^{2}+(v+h)^{2}+\phi_{4}^{2})=\phi^+\phi^- +\frac{1}{2}\phi^0\phi^0+\frac{1}{2}(v+h)^{2}$$,

where we abbreviate $\phi^\pm=(\phi_{1}\pm i\phi_{2})/\sqrt{ 2 }$ and relabel $\phi^0=\phi_{4}$. Inserting this into the Higgs potential, we obtain 

$$V(\Phi)=\frac{m^{2}_{h}}{2}\Phi ^{\dagger}\Phi+\frac{m^{2}_{h}}{2v^{2}}(\Phi ^{\dagger}\Phi)^{2}=\frac{m^{2}_{h}}{8v^{2}}[(v+h)^2+2\phi^+\phi^- +\phi^0\phi^0]^{2}+\text{irrelevant terms}$$

$$=\frac{m^{2}_{h}}{2v^{2}}\phi^+\phi^-\phi^+\phi^- \frac{m^{2}_{h}}{v}h\phi^+\phi^- +\dots$$

From this, we can obtain the Feynman rules for the interaction of the Nambu-Goldstone bosons.

<u>Note</u>: There is no direct coupling of the three Nambu-Goldstone bosons.

Consequently, for the highly-boosted $W^+W^-$ scattering, we obtain:

![[WW high.light.svg]]

where the wavy-dashed lines represent the Nambu-Goldstone bosons $\phi^\pm$.

The scattering amplitude is given by 

$$\mathcal{A}(W^+_{\lambda=0}W^-_{\lambda=0}\rightarrow W^+_{\lambda=0}W^-_{\lambda=0})=\mathcal{A}(\phi^+\phi^-\rightarrow \phi^+\phi^-)+\mathcal{O}\left( \frac{M^{2}_{W}}{s} \right)$$

$$=-\left[ \frac{2m^{2}_{h}}{v^{2}} +\left( \frac{m^{2}_{h}}{v} \right)^{2} \frac{1}{s-m^{2}_{h}}+\left( \frac{m^{2}_{h}}{v} \right)^{2} \frac{1}{t-m^{2}_{h}}\right]$$

$$=- \frac{m^{2}_{h}}{v^2} \left[2 + \frac{m^{2}_{h}}{s-m^{2}_{h}}+\frac{m^{2}_{h}}{t-m^{2}_{h}}\right]$$,

where $s=(p_{1}+p_{2})^{2}$ and $t=(p_{1}-p_{3})^{2}$ are the [[Mandelstam variables]].

<u>Sidenote:</u> [[Partial Wave Amplitudes]]

Using the $J=0$ partial wave amplitude as an example, we find and apply the unitarity constraint to $W^+W^-$ scattering. The $J=0$ partial wave amplitude is given by 

$$A_{J=0}(s)=- \frac{m_{h}^{2}}{16\pi v^{2}}\left[ 2+ \frac{m_{h}^{2}}{s-m^{2}_{h}}- \frac{m^{2}_{h}}{s}\ln\left( 1+ \frac{s}{m^{2}_{h}} \right) \right]$$

In the limit $s\gg m^{2}_{h}$,

$$\mathcal{A}_{J=0}(s)\rightarrow- \frac{m^{2}_{h}}{8\pi v^{2}}=- \frac{\lambda^{2}}{2\pi}$$.

This result implies a bound on the Higgs mass of $m_{H}\lesssim 870 \text{ GeV}$, known before the discovery of the Higgs boson at the LHC. A similar constraint can be obtained from $W^+W^-\rightarrow ZZ$ scattering, which yields a slightly more stringent upper bound of $m_H\lesssim 710 \text{ GeV}$.

But, in the limit $m^{2}_{h}\ll s$, we obtain 

$$\mathcal{A}_{0}(s)\rightarrow - \frac{s}{32\pi v^{2}}$$

, from which we extract $s_{c}<(1.8\text{ TeV})^{2}$. Using different channels, this can be further refined to $s_{c}<(1.2\text{ TeV})^{2}$.

