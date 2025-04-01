Another constraint on the Higgs sector emerges from quantum corrections to observable quantities at relatively low energies.

#### Electroweak Precision Observables

We will discuss only one parameter, the $\rho$-parameter.

Consider the W and Z bosons, that are massive and acquire their mass through the Higgs mechanism. In the SM, we predict that at tree-level,

$$\frac{M^{2}_{W}}{M^{2}_{Z}}=\frac{g^{2}}{g^{2}+g'^{2}}\equiv \cos ^{2}\theta_{W}$$.

The $\rho$-parameter is introduced to capture deviations from the above relation. It reads

$$\rho \equiv 1+\Delta \rho\equiv \frac{M^{2}_{W}}{M^{2}_{Z}\cos ^{2}\theta_{W}}$$.

At tree-level, $\rho=1$. However, quantum corrections to the W and Z propagators lead to deviations. (diagram)

The qualitative differences are:

- The WWh coupling and the ZZh coupling are not identical and scale with their vector boson masses. This leads to contributions to the W and Z propagators that scale differently with the Higgs mass. Recall: $$\Pi_{WW}\supset\frac{M^{2}_{W}}{v}\ln\left( \frac{M^{2}_{W}}{M^{2}_{H}} \right)$$ and $$\Pi_{ZZ}\supset \frac{M^{2}_{Z}}{v}\ln\left( \frac{M^{2}_{Z}}{M^{2}_{H}} \right)$$.
- The leading contributions from fermions are the $t\bar b$ for the W and the $t\bar{t}$ for the Z. They also scale differently with the fermion masses.

As a consequence $\Delta \rho \neq 0$ and the $\rho$-parameter receives quantum corrections which are sensitive to the Higgs mass $M_H$.

#### Fine-Tuning

The Higgs parameters $v$ and $\lambda$ are bare parameters. After renormalisation, they lead to the physical Higgs mass $m_h$ and the vev $v$. The physical Higgs mass receives contributions that scale quadratically with a UV cutoff $\Lambda$. The physical Higgs mass then has to result from a very fine-tuned balance between the bare Higgs boson mass and a counter term that depends on the UV cutoff. Assuming that the scale $\Lambda$ is well above the electroweak scale, the fine-tuning must cover several orders of magnitude. This is referred to as the “hierarchy problem”. It is directly related to the absence of a symmetry that would protect the Higgs mass from large quantum corrections. Basically, setting the Higgs mass to zero does not restore a symmetry of the theory.

To find the degree of fine-tuning, we define (to all loop orders)

$$M^{2}_{h}=M^{2}_{h,\text{bare}}+\delta M^{2}_{h},\;\;\;\;\;\;\;\;\;\text{where }\;\;\;\;\;\;\;\;\delta M^{2}_{h}= \frac{\Lambda^{2}}{16\pi^{2}}+\sum_{n=1}^\infty C_{n}\ln^n\left( \frac{\Lambda}{v} \right)$$.

Here, $C_{n}\equiv C_{n}(\{y_{i},g,g'\})$ are dimensionless coefficients that depend on SM parameters. At one loop,

$$C_{1}=12\lambda+\frac{3}{2}g'^{2}+\frac{9}{2}g^{2}-12y^{2}_{t}=\frac{1}{v^{2}}(6M^{2}_{W}+3M^{2}_{Z}+3M^{2}_{h}-12m^{2}_{t})$$.

![[Pasted image 20250401003442.png]]

As expected from the spin-statistics argument, the boson and fermion loop contributions have opposite sign. This implies that it is possible that $C_{1}$ vanishes and the Higgs mass is protected from quantum corrections at one loop. This is known as the Veltman condition.

In general, a degree of fine-tuning can be defined as

$$\mathcal{F}=\left | \frac{\delta M^{2}_{h}}{M^{2}_{h}}\right|$$.

- $\mathcal{F}\lesssim 10$ is “natural” or fine-tuning is absent.
- Requiring the above is used to set upper bounds on $\Lambda$ ($\Lambda\lesssim 3 \text{ TeV}$).
- If the SM needs to hold up to the Planck scale $\Lambda=M_{Pl}\approx 10^{19}\text{ GeV}$, then SM is fine-tuned at the level of $\mathcal{F}\gtrsim 10^{30}$.