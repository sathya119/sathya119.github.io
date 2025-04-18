#### Low-Energy Theorem

Based on the observation that the Higgs boson is a scalar particle. At low energies ($p^\mu_{h}$ is negligible), then $$[p^\mu_{h},h]=i\partial^\mu h=0$$, which implies that the Higgs field is approximately a constant at low energies and $p^{2}=M^{2}_{h}\ll m^{2}_{f},M^{2}_{Z},M^{2}_{W}$. The SM Lagrangian after Electroweak SSB can be written as 

$$\mathcal{L}_{\text{SM}}=-\left( 1+ \frac{h}{v} \right)^{2}(M^{2}_{W}W^{+\mu}W^-_{\mu}+  \frac{1}{2}M^{2}_{Z}Z^\mu Z_{\mu}$$.

The low-energy theorem is inspired by the fact that the Higgs boson couples uniformly to the masses of the fermions and gauge bosons. The idea is to rescale the fermion and gauge boson masses such that they absorb the Higgs field at low energies,

$$m_{f}\rightarrow m_{f}\left( 1+ \frac{h}{v} \right),\;\;\;\;\;\;\;\;\;M_{W,Z}\rightarrow M_{W,Z}\left( 1+ \frac{h}{v} \right)$$.

If this were to be applied to the matrix element of a generic $A\rightarrow Bh$ process,

$$\lim_{ p_{h} \to 0} \mathcal{M}(A\rightarrow Bh)=\frac{1}{v}\left( \sum_{f}m_{f} \frac{\partial}{\partial m_{f}}+\sum_{V=W,Z} \frac{\partial}{\partial M_{V}} \right)\mathcal{M}(A\to B)$$.

This is valid only for the bare theory. Renormalisation yields a correction of the form

$$M \frac{\partial}{\partial M}\to \frac{M}{1+\gamma_{M}} \frac{\partial}{\partial M}$$, where $\gamma_M$ is the anomalous dimension of that mass.

#### Effective Field Theory

$$\mathcal{L}_{\text{eff}}=\mathcal{L}_{\text{SM}}- \frac{1}{4}C_{ggh}(\mu)G^a_{\mu \nu}G^{a,\mu \nu}h$$.

The new term is a dimension-5 operator, which renders the Lagrangian not conventionally renormalisable. But we can as long as it involves only finitely many operators of mass dimension larger than four. Hence, by matching the effective field theory to SM at the scale $\mu=M_{h}$, we get (for $y_{t}=1$),

$$C_{ggh}(M_{h})=-\frac{\alpha_{s}}{3\pi v}+\mathcal{O}(\alpha^{2}_{s})$$.

The theory is valid as long as $2m_{b}\ll \mu\ll 2m_{t}$, i.e., as long as the top quark is the only relevant particle running in the loop. For $\mu=M_{h}\simeq 125\text{ GeV}$, corrections are of the order of 10%.

#### Computing the cross section

For two gluons with momenta $p_i$, polarisation vectors $\varepsilon_i(p_i;\lambda_i)$ and adjoint colour index $a_{i}\in\{1,\dots,8\}$,

$$i\mathcal{M}(g_{a_{1}}g_{a_{2}}\to h)=iC_{ggh}(\mu)\delta_{a_{1}a_{2}}[(p_{1}.p_{2})(\varepsilon_{1}.\varepsilon_{2})-(p_{1}.\varepsilon_{2})(p_{2}.\varepsilon_{1})]$$,

where $p_{1}.p_{2}=M^{2}_{h}/2$. The spin and colour summed matrix element reads

$$\sum_{\text{spins}}\sum_{\text{colours}}|\mathcal{M}(gg\to h)|^{2}=2(N_{c}^{2}-1)|C_{ggh}(\mu)|^{2}(p_{1}.p_{2})=4|C_{ggh}(\mu)|^{2}M_{h}^4$$.

The partonic cross section for this scattering is given by

$$\hat{\sigma}(gg\to h)= \frac{1}{2\hat{s}}\left( \frac{1}{2} \frac{1}{N_{c}^{2}-1} \right)^{2}\sum_{\text{spins}}\sum_{\text{colours}}|\mathcal{M}|^{2} d\Phi_{2\to 1}$$

$$= \frac{1}{2\hat{s}.16.16}4|C_{ggh}(\mu)|^{2}M^4_{h}d\Phi_{2\to 1}=\frac{\alpha^{2}_{s}}{576\pi v^{2}} \frac{M^4_{h}}{\hat{s}}\delta(\hat{s}-M^{2}_{h})$$.

Thus, $$\hat{\sigma}(gg\to h)\equiv \hat{\sigma}^0(gg\to h) \frac{1}{\hat{s}}\delta(\hat{s}-M^{2}_{h})$$.

In the center of mass frame of the proton-proton collision, the partonic momenta are two light-like ($p_i^2=0$) vectors 

$$p_{1}^\mu= \frac{\sqrt{ s }}{2}x_{1}(1,0,0,1),\;\;\;\;\;\;\;\;\;\;\;p^\mu_{2}=\frac{\sqrt{ s }}{2}x_{2}(1,0,0,-1)$$.

Then, by convoluting the partonic cross section with the gluon PDFs, we obtain the gluon-gluon contribution the the total Higgs cross section,

$$\sigma(pp\to HX)|_{gg\text{ part only}}=\int \int_{0}^1dx_{1}dx_{2}f_{g}(x_{1})f_{g}(x_{2})\hat{\sigma}(gg\to h)$$

$$=\sigma^0(gg\to h) \frac{1}{s}\int \int_{0}^1 dx_{1}dx_{2} f_{g}(x_{1})f_{g}(x_{2}) \frac{1}{x_{1}x_{2}}\delta(M^{2}_{h}-x_{1}x_{2}s)$$.
