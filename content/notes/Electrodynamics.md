$$\mathcal{L}=-\frac{1}{4}F_{\mu \nu}F^{\mu \nu};\;\;\;\;\;\;\;\;\;\;\; F_{\mu \nu}=\partial_{\mu}A_{\nu}-\partial_{\nu}A_{\mu}$$

We impose the Lorentz gauge: $\partial_{\mu}A^\mu=0$.

Then, $$\partial_{\mu}F^{\mu \nu}=\partial_{\mu}(\partial^\mu A^\nu-\partial^\nu A^\mu)=\partial^{2}A^\mu=0$$.

Let $A_{\mu}=\epsilon_{\mu}(p)e^{ipx}$. Then, the gauge condition becomes $\epsilon.p=0$ and the e.o.m becomes $p^{2}=0$.

There is a residual gauge symmetry that preserves the gauge condition: $A_{\mu}\to A_{\mu}+\partial_{\mu}\omega$, where $\partial^{2}\omega=0$.

Now, consider a plane wave solution of the form $\omega=\alpha(p)e^{ipx}$ with $p^{2}=0$. This corresponds to $\epsilon\to \epsilon+i\alpha p$, which is a gauge transformation on the polarisation vector. So, $\epsilon$ and $i\alpha p$ are physically equivalent.

Since $\epsilon$ satisfies $\epsilon.p=0$ and an additional gauge invariance, it has two physical degrees of freedom; $\epsilon_\pm$.

Let us now choose a frame in which $p^\mu=(E,0,0,E)$. Then,

$$\epsilon.p=0\implies \epsilon^\mu=(0,b,c,0)+a(1,0,0,1)$$.

We can choose a residual gauge transformation $$\alpha=-\frac{a}{iE}$$. Then,

$$\epsilon^\mu\to\epsilon^\mu- \frac{a}{E}p^\mu=(0,b,c,0)$$.

Then, we can write $$\epsilon_{\pm}^\mu=\frac{1}{\sqrt{ 2 }}(0,1,\pm i,0)$$.

Thus, we have the following properties:

- $$\epsilon_{+}=(\epsilon_{-})^*$$
- $$\epsilon_{+}.\epsilon_{-}=-1$$
- $$\epsilon_{+}.\epsilon_{+}=\epsilon_{-}.\epsilon_{-}=0$$. Since they are null vectors, they can be written in a bi-spinor form.

$$\epsilon_{+}^{\dot{\alpha}\alpha}=\epsilon_{+}^\mu(\bar{\sigma}_{\mu})^{\dot{\alpha}\alpha}=-\sqrt{ 2 } \frac{\tilde{\lambda}^\dot{\alpha}\mu^\alpha}{\langle\lambda \mu\rangle}$$ and $$\epsilon_{-}^{\dot{\alpha}\alpha}=\epsilon_{-}^\mu(\bar{\sigma}_{\mu})^{\dot{\alpha}\alpha}=\sqrt{ 2 } \frac{\lambda^\alpha \tilde{\mu}^\dot{\alpha}}{[\tilde{\lambda}\tilde{\mu}]}$$,

where $$p^{\dot{\alpha}\alpha}=\lambda^\alpha \tilde{\lambda}^\dot{\alpha}$$ is the momentum and $$q^{\dot{\alpha}\alpha}=\mu^\alpha \tilde{\mu}^\dot{\alpha}$$ is the reference momentum encoding the residual gauge symmetry.

We can also check if the above definition satisfies the properties mentioned before.

#helicity $h\epsilon_{\pm}=(\pm1)\epsilon_{\pm}$.

The $q$ dependence of $\epsilon_{\pm}$ is a reflection of the gauge freedom. Consider an arbitrary variation $\mu\to \mu+\delta \mu$. Without loss of generality, we can expand $\delta \mu$ in a basis of $\mu,\lambda$ as 

$$\mu\to \mu+a\mu+b\lambda = (1+a)\mu+b\lambda$$ for arbitrary $a \text{ and } b$.

Then, $$\epsilon_{+}^{\dot{\alpha}\alpha}\to-\sqrt{ 2 } \frac{\tilde{\lambda}^{\dot{\alpha}}((1+a)\mu^\alpha+b\lambda^\alpha)}{\langle\lambda,(1+a)\mu+b\lambda\rangle}=-\sqrt{ 2 } \frac{(1+a)\tilde{\lambda}^\dot{\alpha}\mu^\alpha+b\lambda^\alpha \tilde{\lambda}^\dot{\alpha}}{(1+a)\langle\lambda\mu\rangle}$$

$$=-\sqrt{ 2 } \frac{\tilde{\lambda}^\dot{\alpha}\lambda^\alpha}{\langle\lambda \mu\rangle}- \frac{\sqrt{ 2 }b}{(1+a)} \frac{\lambda^\alpha \tilde{\lambda}^\dot{\alpha}}{\langle\lambda \mu\rangle}=\epsilon_{+}^{\dot{\alpha}\alpha}- \frac{\sqrt{ 2 }b}{(1+a)\langle\lambda \mu\rangle} p^{\dot{\alpha}\alpha}$$

where the second term acts as a gauge transformation term.

