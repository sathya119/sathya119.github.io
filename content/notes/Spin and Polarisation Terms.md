Recall the spinor/polarisation completeness relations:

$$\sum_s u_\alpha(p,s)\bar u_\beta(p,s)=(\not p+m)_{\alpha\beta}$$

$$\sum_s v_\alpha(p,s)\bar v_\beta(p,s)=(\not p-m)_{\alpha\beta}$$

$$\sum_\lambda \epsilon^a_\mu(p,\lambda)\epsilon^{*a}_\nu(p,\lambda)=-g_{\mu\nu}+\frac{p_\mu n_\nu+p_\nu n_\mu}{(p.n)}$$

Here, s labels the spin states of the fermions, λ labels the two helicities of the gluon and n is an arbitrary reference vector.

In QED, we could use the replacement, $$\sum_\lambda \epsilon_\mu\epsilon_\nu^*\rightarrow-g_{\mu\nu}$$ to simplify our calculations.

But in QCD, this does not give the correct result!

### **QED Case**
Consider the scattering $$q\bar q\rightarrow \gamma\gamma$$.

![[feynman diagram for qq-rr.light.svg]]

The amplitude may be written as:

$$M_{q\bar q\rightarrow \gamma\gamma}=M_{q\bar q\rightarrow\gamma\gamma}^{\mu_1\mu_2}\epsilon_{\mu_1}^*(k_1,\lambda_1)\epsilon_{\mu_2}^*(k_2,\lambda_2)$$

$$M_{q\bar q\rightarrow\gamma\gamma}^{\mu_1\mu_2}=M_{q\bar q\rightarrow\gamma\gamma}^{(1),\mu_1\mu_2}+M_{q\bar q\rightarrow\gamma\gamma}^{(2),\mu_1\mu_2}$$

Charge conservation (or Ward identity) tells us that the QED amplitude vanishes when we replace the photon polarisation with its momentum, as

QED: $$k_{1,\mu_1}M_{q\bar q\rightarrow\gamma\gamma}^{\mu_1\mu_2}=k_{2,\mu_2}M_{q\bar q\rightarrow\gamma\gamma}^{\mu_1\mu_2}=0$$

This justifies the polarisation sum replacement rule, as the terms in the sum polarisation proportional to the photon momentum do not contribute to the squared amplitude.

### **QCD Case**
Analogous to QED, considering the scattering $$q\bar q\rightarrow gg$$.

![[feynman diagrams for qq-gg.light.svg]]

The amplitude can be written as:

$$M_{q\bar q\rightarrow gg}=M_{q\bar q\rightarrow gg}^{\mu_1\mu_2}\epsilon^*_{\mu_1}(k_1,\lambda_1)\epsilon^*_{\mu_2}(k_2,\lambda_2)$$

Considering the polarisation stripped amplitude $$M_{q\bar q\rightarrow gg}^{\mu_1\mu_2}$$ in QCD, we obtain,

$$M_{q\bar q\rightarrow gg}^{\mu_1\mu_2}=(t^{a_2}t^{a_1})M_{\mu_1\mu_2}^{(1)}+(t^{a_1}t^{a_2})M_{\mu_1\mu_2}^{(2)}+if^{a_1a_2a_3}t^{a_3}M_{\mu_1\mu_2}^{(3)}$$

$$=(t^{a_1}t^{a_2})\underbrace{[M_{\mu_1\mu_2}^{(1)}+M_{\mu_1\mu_2}^{(2)}]}_{=QED}+if^{a_1a_2a_3}t^{a_3}[-M_{\mu_1\mu_2}^{(1)}+M_{\mu_1\mu_2}^{(3)}]$$

Hence, in QCD, $$k_{1,\mu_1}M_{q\bar q\rightarrow\gamma\gamma}^{\mu_1\mu_2}\not=k_{2,\mu_2}M_{q\bar q\rightarrow\gamma\gamma}^{\mu_1\mu_2}\not=0$$. Instead, the gluons are physical, i.e., if their polarisations are transverse, $$\epsilon_{\mu_1}k_1^{\mu_1}=\epsilon_{\mu_2}k_2^{\mu_2}=0$$

