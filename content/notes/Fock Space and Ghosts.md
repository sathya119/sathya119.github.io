Let us construct a Fock space of states in a standard manner by choosing a ground state annihilated by lowering operators and acting with raising operators.

Since the position and momentum operators commute with all the oscillator modes and have canonical commutations among themselves, we may choose a basis of states that diagonalise momentum. Let us choose ground states $\ket{0;k}$ such that

$$p^\mu \ket {0;k}=k^\mu \ket{0,k}  $$ and $$a^\mu_{m}\ket{0;k}=0\;\;\;\;m>0 $$.

In other words, the ground states are annihilated by the lowering operators $a_m$.

We then generate a Fock space by acting with the raising operators. A general state is a linear combination of states of the form

$$\varepsilon_{\mu_{1}\dots \mu_{n}}(a^{\mu_{1}}_{m_{1}})^{\dagger}\dots(a^{\mu_{n}}_{m_{n}})^{\dagger}\ket{0;k} $$

with $m_{1},\dots,m_{n}>0$ and polarisation vector $\varepsilon_{\mu_1...\mu_n}$. This is an eigenstate of the level operator with $N=m_{1}+\dots+m_{n}$.

But, there are states with negative norm. For example, a general state at level $N=1$,

$$\ket{\varepsilon;k} =\varepsilon_{\mu}\alpha^\mu_{-1}\ket{0;k} $$, for some polarisation vector $\varepsilon^\mu$.

This state has normalisation

$$\braket{\varepsilon;k|\varepsilon;k}=\varepsilon^2 \braket{0;k|0;k} $$, which is negative if the polarisation vector is time-like ($\varepsilon^2<0$).

This is a direct consequence of the fact that $\eta^{00}=-1$. Such a negative norm state is called a ghost. If ghosts are present in the physical spectrum, it would violate the principles of quantum mechanics and indicates an inconsistency.

However, we have not yet implemented the classical constraints $L_m=0$ in the canonical quantisation. If these constraints are imposed, the ghosts in the spectrum are consistently eliminated such that the quantum mechanical theory is consistent. This is possible when $D\lt26$, with a strong preference for $D=26$.
