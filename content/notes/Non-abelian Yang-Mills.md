This is a generalisation of [[Electrodynamics]]. Here, the gauge fields (gluons) are matrices and do not commute, i.e., they will be self-interacting, unlike photons.

$$(A_{\mu})_{i}^j=A_{\mu}^a(T^a)_{i}^j;\;\;\;\;\;a=1,\dots,N^{2}-1$$,

where $T^a$ are $N\times N$ traceless Hermitian matrices corresponding to generators of $SU(N)$.

- $N=3$ corresponds to QCD, describing strong interactions. 

$$[T^a,T^b]=i\sqrt{ 2 }f^{abc}T^c$$ and $$\text{Tr}(T^aT^b)=\delta^{ab}\implies A_{\mu}^a=\text{Tr}(T^aA_{\mu})$$.

Now, $$\mathcal{L}=-\frac{1}{4}\text{Tr}(F_{\mu \nu}F^{\mu \nu})$$ with $$F_{\mu \nu}=\partial_{\mu}A_{\nu}-\partial_{\nu}A_{\mu}- \frac{ig}{\sqrt{ 2 }}[A_{\mu},A_{\nu}]$$.

$$F^a_{\mu \nu}=\partial_{\mu}A_{\nu}^a-\partial_{\nu}A_{\mu}^a+\sqrt{ 2 }gf^{abc}A^b_{\mu}A^c_{\nu}$$.

Now, the gauge symmetry can be generalised to $$A_{\mu}\to UA_{\mu}U^{\dagger}+ \frac{i}{g}U\partial_{\mu} U^{\dagger}$$ where $U(x)\in SU(N)$.

<u>Note</u>: For $U(x)\in U(1)$, e.g., $U(x)=e^{i\alpha(x)}$, we recover the gauge symmetry from electromagnetism since $\alpha(x)$ is just a function.

The action is invariant under the above symmetry. Further,

$$F_{\mu \nu}= \frac{\sqrt{ 2 }i}{g}[D_{\mu},D_{\nu}];\;\;\;\;\;\;\;(D_{\mu})^i_{j}=\delta_{j}^i\partial_{\mu}- \frac{ig}{\sqrt{ 2 }}(A_{\mu})_{j}^i$$.

Under a gauge transformation,

$$D_{\mu}\to UD_{\mu}U^{\dagger};\;\;\;\;\;\;\;\;F_{\mu \nu}\to UF_{\mu \nu}U^{\dagger}$$,

$$\text{Tr}(F_{\mu \nu}F^{\mu \nu})\to \text{Tr}(UF_{\mu \nu}U^{\dagger}UF^{\mu \nu}U^{\dagger})=\text{Tr}(F_{\mu \nu}F^{\mu \nu})$$, using the cyclicity of trace and the fact that $U$ is unitary.

We can fix the gauge using the Fadeev-Popov procedure:

$$\mathcal{L}=-\frac{1}{4}\text{Tr}(F_{\mu \nu}F^{\mu \nu})-\frac{1}{2}\text{Tr}(GG)+\text{ghosts}$$, where $G$ is the gauge-fixing functional and we will neglect the ghosts since we are interested only in the tree-amplitudes.

We will choose the Gervais-Neveu gauge, which is convenient for amplitudes,

$$G=\partial_{\mu }A^\mu- \frac{ig}{\sqrt{ 2 }}A_{\mu}A^\mu$$.

The Lagrangian then becomes $$\mathcal{L}=\text{Tr}\left( \frac{1}{2}A_{\mu}\partial^{2}A^\mu-i\sqrt{ 2 }g \partial^\mu A^\nu \partial_{\nu}\partial_{\mu} +\frac{1}{4}g^{2}A^\mu A^\nu A_{\mu}A_{\nu}\right)$$.