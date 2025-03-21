Let us demand that the physical states are annihilated by all of the Virasoro generators. If we allow the constant a to be associated to the normal ordering ambiguity in $L_0$, it would correspond to demanding that the physical states satisfy $$(L_{m}-a\delta_{m,0})\ket{\psi}=0 $$ for all integers $m$.

However, this is too strong a constraint. For example, for any state $\ket{\psi}$ satisfying these conditions, the Virasoro algebra implies

$$0=\bra{\psi}[L_{m},L_{-m}]\ket{\psi}=\bra{\psi}( 2mL_{0}+\frac{D}{12}m(m^{2}-1))\ket{\psi} $$

$$=(2ma+\frac{D}{12}m(m^{2}-1))\braket{\psi|\psi}$$

for all integers $m$ and therefore $\braket{\psi|\psi}=0$.

The correct condition instead would be that physical states satisfy

$$(L_{m}-a\delta_{m,0})\ket{\psi}=0\;\;\;\;\;\;m\ge0$$.

Then, correlation functions of this constraint vanish between physical states,

$$\bra{\psi'} (L_{m}-a\delta_{m,0})\ket{\psi}=0 $$ for any pair physical states since $L_{m}^{\dagger}=L_{-m}$. In other words, the correct way to implement the constraints in canonical momentum is to demand that all correlation functions of the constraints vanish between physical states.

Let us now consider an open string in a general state at level $N=1$,

$$\ket{\varepsilon;k}=\varepsilon_{\mu}\alpha^\mu_{-1}\ket{0;k}$$,

where $\varepsilon_{\mu}$ is a polarisation vector with D components before the constraints are imposed. We saw in [[Fock Space and Ghosts]] that it has squared-norm proportional to $\varepsilon^2$. Now, we will impose the following constraints:

- The state is annihilated by $L_0-a$: determines the mass of the corresponding excitation (Recall $\alpha_{0}=lp^\mu$ for an open string). Then, $$\alpha'M^{2}=1-a$$.
- The state is annihilated by $L_1$: $$L_{1}(\varepsilon.\alpha_{-1}\ket{0;k} )=(\alpha_{0}.\alpha_{1})(\varepsilon.\alpha_{-1})\ket{0;k}=l(k.\varepsilon)\ket{0;k} $$ and therefore, $$k.\varepsilon=0$$. Thus, the polarisation vector is orthogonal to the D-momentum and has only (D-1) independent components.
- The state is automatically annihilated by $L_m$ with $m>1$.

There are now three possibilities:

###### a>1

In this case, $\alpha'M^{2}<0$ and the D-momentum is space-like $k^{2}<0$. Suppose we choose the D-momentum with components $k^\mu=(0,k^1,0,\dots,0)$. Then, a reasonable polarisation vector is $\varepsilon^\mu=(\varepsilon^0,0,\dots,0)$, which is time-like $\varepsilon^{2}<0$ and thus a ghost.

###### a<1

In this case, $\alpha'M^{2}>0$ and the D-momentum is time-like $k^{2}>0$. Suppose we choose the D-momentum with components $k^\mu=(k^0,0,\dots,0)$. Then, any polarisation vector satisfying $k.\varepsilon=0$ is space-like $\varepsilon^{2}>0$. There are hence (D-1) independent states of positive norm.

###### a=1

In this case, $\alpha'M^{2}=0$ and the D-momentum is null $k^{2}=0$. Suppose we choose the D-momentum with components $k^\mu=(k^0,k^0,0,\dots,0)$. There are (D-2) independent states with transverse polarisations $\varepsilon=(0,0,\varepsilon^{2},\dots,\varepsilon^{D-1})$ of positive norm $\varepsilon^{2}>0$, and one null state with longitudinal polarisation $\varepsilon^\mu=(\varepsilon^0,\varepsilon^0,0,\dots,0)$ of vanishing norm.

A condition for the elimination of ghosts is therefore $a\le1$.

The most interesting case is $a=1$. This is reminiscent of electrodynamics, where the constraint $k.\varepsilon=0$ is a consequence of the Lorentz gauge condition $\partial_{\mu}A^\mu=0$ for momentum eigenstates $A_\mu=\varepsilon_{\mu}e^{ik_{\mu}x^\mu}$. The constraint leaves (D-2) transverse polarisations of positive norm and one longitudinal polarisation of zero-norm. In electrodynamics, the longitudinal mode decouples from the S-matrix as a consequence of gauge invariance and a similar mechanism is at work here.

**Basically, massless gauge bosons arise in open string theory when a=1.

<u>No-ghost Theorem</u>: The constraints completely eliminate ghosts from the spectrum if $D=26$ and $a=1$ or $D<26$ and $a\le1$.
