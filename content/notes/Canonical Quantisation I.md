This refers to promoting Poisson brackets of functions of position and momentum to commutators of operators on Hilbert space

$$\{.,\;.\}\rightarrow-i[.,\;.]$$.

Such a map typically does not exist. But, we can focus on a distinguished class of elementary functions of position and momenta.

In the canonical formalism of the bosonic string, the position and momentum are $X^\mu(\sigma)$ and $\Pi^\mu(\sigma)$ with their canonical Poisson bracket. These can be promoted to Hermitian operators with commutators

$$[X^\mu(\sigma),\;\Pi^\nu(\sigma')]=i\eta^{\mu \nu}\delta(\sigma-\sigma')$$,

where we set $\hbar=1$.

We also promote the coefficients to operators with commutation relations

$$[x^\mu,p^\nu]=i\eta^{\mu \nu}$$

$$[\alpha^\mu_{m},\alpha^\nu_{n}]=m\delta_{m+n}\eta^{\mu\nu}$$

$$[\tilde{\alpha}^\mu_{m},\tilde{\alpha}^\nu_{n}]=m\delta_{m+n}\eta^{\mu\nu}$$

with all other commutators vanishing. In order for $X^\mu(\sigma)$ and $\Pi^\mu(\sigma)$ to be Hermitian, we require $x^\mu$ and $p^\mu$ to be Hermitian while $(\alpha^\mu_{n})^{\dagger}=\alpha^\mu_{-n}$ and $(\tilde{\alpha}^\mu_{n})^{\dagger}=\tilde{\alpha}^\mu_{-n}$. 

Let us now focus on the open string and write formulae for the modes $\alpha_{n}$ with the understanding that it holds good for modes $\tilde{\alpha}_{n}$ in the closed string.

We define

$$a^\mu_{m}:=\frac{1}{\sqrt{ m }}\hat{\alpha}^\mu_{m}\;\;\;\;\;\;\;\;m>0$$

$$(a^\mu_{m})^{\dagger}:=\frac{1}{\sqrt{ m }}\hat{\alpha}^\mu_{-m}\;\;\;\;\;\;\;\;m>0$$

such that 

$$[a^\mu_{m},(a^\nu_{n})^{\dagger}]=\eta^{\mu \nu}\delta_{m,n}$$

with all other commutators vanishing.

We also define a number or level operator

$$N:=\sum_{m=1}^\infty \alpha_{-m}.\alpha_{m}=\sum_{m=1}^\infty ma^{\dagger}_{m}.a_{m}$$ such that 

$$[N,a_{m}]=-ma_m\;\;\;\;\;\;\;\;\;\;\;\;\;[N,a^{\dagger}_{m}]=+ma^{\dagger}_{m}$$

and commutes with $x^\mu,p^\mu$. The modes therefore take the form of an infinite sequence of harmonic oscillators indexed by $m>0$ and $\mu=0,1,...,D-1$.
