Consider the QCD Lagrangian

$$\mathcal{L}_{\text{QCD}}=-\frac{1}{2}F_{\mu \nu}^aF^{a,\mu \nu}+\sum_{q}\bar{\psi}_{q}(i\not D-m_{q})\psi_{q}+\dots$$ with $$F^a_{\mu \nu}=\dots-g_{s}f^{abc}A^b_{\mu}A^c_{\nu}$$.

The masses and couplings are free parameters of the theory and must be measured. But, the fields and parameters in the Lagrangian are bare quantities. Experiments will probe pnly renormalised quantities.

Let us denote the set of free parameters by $\{\lambda_{i}\}$. We can fix these parameters by matching some set of experimental measurements with a set of theoretical predictions,

$$\text{Obs}_{1}^{\text{EXP}}\stackrel{!}{=}\text{Obs}_{1}^\text{TH}(\{\lambda_{i}\})$$

$$\vdots$$

$$\text{Obs}_{\text{M}}^{\text{EXP}}\stackrel{!}{=}\text{Obs}_{\text{M}}^\text{TH}(\{\lambda_{i}\})$$.

The remaining observables, which have not been used to fix parameters, are predictions of the theory.

When we compute observables beyond leading order, they will contain UV divergences, which we must absorb into the definition of the bare and renormalised fields/parameters. The relations between the bare and renormalised fields/parameters of QCD are given by

$$A^a_{\mu,0}=\sqrt{ Z_{3} }A_{\mu}^a\;\;\;\;\;\;\;\;\text{gluons}$$

$$\psi_{q,0}=\sqrt{ Z_{2} }\psi_{q}\;\;\;\;\;\;\;\;\text{quarks}$$

$$c_{0}^a=\sqrt{ Z_{3}^c }c^a\;\;\;\;\;\;\;\;\text{ghosts}$$

$$m_{q,0}=Z_{m}m_{q}\;\;\;\;\;\;\;\;\text{masses}$$

$$\xi_{0}=Z_{\xi}\xi\;\;\;\;\;\;\;\;\text{gauge parameter}$$

$$g_{s,0}=\mu^\epsilon Z_{g}g_{s}\;\;\;\;\;\;\;\;\text{strong coupling}$$.

Note that we have used an arbitrary mass scale $\mu$ in the relation between the bare and renormalised strong coupling. Since, to handle UV divergences, we introduce regularisation (here Dimensional Regularisation) and vary the space-time dimensions from 4 to $D=4-2\epsilon$. This alters the mass dimension of our Lagrangian, $\mathcal{L}^{(4)}\to\mathcal{L}^{(D)}$, such that

$$[\mathcal{L}^{(4)}]=4\to[\mathcal{L}^{(D)}]=D$$.

Thus we obtain,

$$[m_{q,0}]=[\partial^\mu]=1$$

$$[m_{q,0}\bar{\psi}_{q,0}\psi_{q,0}]=D\implies[\psi_{q},0]=[\bar{\psi}_{q,0}]=\frac{D-1}{2}$$

$$[F_{0}^{\mu \nu}F_{\mu \nu,0}]=D\implies[\partial ^\mu A_{\mu,0}]=\frac{D}{2},\;[A_{\mu,0}]=\frac{D}{2}-1$$

$$[g_{s,0}\bar{\psi}_{q,0}\not A_{0}\psi_{q,0}]=D\implies[g_{s,0}]=\frac{4-D}{2}$$.

Since here the strong coupling has a dimension, we fix the mass dimension of the renormalised coupling to be zero by extracting some arbitrary parameter $\mu$ with $[\mu]=1$.

#### Fixing renormalisation constants

First, we express the bare Lagrangian in terms of the renormalised fields/parameters. Next, we rewrite $Z_{i}=1+\delta Z_{i}$ for each renomalisation constant,

$$\Phi_{0}=\sqrt{ Z_{0} }\Psi=\left( 1+\frac{1}{2}\delta Z_{\Phi}+\dots \right)\Phi\;\;\;\;\;\;\;\;\text{fields}$$

$$\lambda_{0}=Z_{\lambda}\lambda=(1+\delta Z_{\lambda})\lambda\;\;\;\;\;\;\;\;\text{parameters}$$.

Thus, $$\mathcal{L}(\Phi_{0},\lambda_{0})=\mathcal{L}(\Phi,\lambda)+\underbrace{\mathcal{L}_{\text{CT}}}_{\sim\delta Z_{X}}$$.

Note that the counter-term Lagrangian is not added; it is just obtained by expressing the bare Lagrangian in terms of the renormalised parameters.

![[Pasted image 20250414201240.png]]

Now, in principle, we could have introduced different renormalisation constants for each vertex. However, the gauge invariance of our theory after gauge fixing leaves a residual symmetry known as the Becchi-Rouet-Stora-Tyutin (BRST) symmetry which gives rise to the Slavnov-Taylor identities.

These are the non-abelian generalisation of the Ward identity of QED. In QED, the Ward identities led to the relation $Z_{1}=Z_{2}$ where $Z_{1}$ was associated with the $\psi \bar{\psi}\gamma$ vertex and $Z_{2}$ belonged to the $\psi$ (electron) field.

The Slavnov-Taylor identities of QCD are

$$Z_{\xi}=Z_{3}$$

$$Z_{g}=\frac{(Z^{4g})^{1/2}}{Z_{3}}=\frac{Z^{3g}}{(Z_{3})^{2/3}}=\frac{Z^{c\bar{c}g}}{(Z_{3})^{1/2}Z_{3}^c}=\frac{Z^{\psi \bar{\psi}g}}{(Z_{3})^{1/2}Z_{2}}$$.

Basically, the coupling in each vertex is renormalised in the same way.
