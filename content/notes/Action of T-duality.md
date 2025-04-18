Recall the open string mode expansion

$$X^\mu(\tau,\sigma)=x^\mu+\ell^{2}p^\mu \tau+i\ell \sum_{n\neq0} \frac{1}{n}\alpha^\mu_{n} e^{-i n \tau}\cos(n\sigma)$$.

We can decompose the mode expansion into the left- and right- moving components depending on the combinations $\sigma^+=\tau+\sigma$ and $\sigma^-=\tau-\sigma$.

$$X^\mu_{L}(\sigma^+)=\frac{x^\mu+c^\mu}{2}+\frac{\ell^{2}}{2}p^\mu \sigma^++\frac{i\ell}{2}\sum_{n\neq 0} \frac{1}{n} \alpha_{n}^\mu e^{-i n \sigma^+}$$

$$X^\mu_{R}(\sigma^-)=\frac{x^\mu-c^\mu}{2}+\frac{\ell^{2}}{2}p^\mu \sigma^-+\frac{i\ell}{2}\sum_{n\neq 0} \frac{1}{n} \alpha_{n}^\mu e^{-i n \sigma^-}$$

where we have allowed an arbitrary constant shift $c^\mu$ that cancels out between the two.

Now, we will compactify on a circle by demanding $x^d\sim x^d+2\pi R$. Then, momentum must be quantised $p^d=\frac{n}{R}$ for $n\in \mathbb{Z}$. However, for the open string with Neumann boundary conditions, there is no conserved winding number (quantum number). Therefore, we cannot implement T-duality as a transformation that interchanges KK momentum and the winding number.

However, we also saw that T-duality could be implemented by a parity transformation on the right-moving mode expansion $X^d_{R}\to-X^d_{R}$. Thus, there are T-dual expansions

$$X^d(\sigma^+,\sigma^-)=X^d_{L}(\sigma^+)+X^d_{R}(\sigma^-)$$

$$X'^d(\sigma^+,\sigma^-)=X^d_{L}(\sigma^+)-X^d_{R}(\sigma^-)$$,

which provide equivalent descriptions of the same string theory at radii $R$ and $R’=\alpha/R$. This equivalence is local in nature from a world-sheet perspective and can be applied to the open string as well.

The T-dual mode expansion of the open string is

$$X'^d(\tau,\sigma)=c^d+\ell^{2} \frac{n}{R}\sigma+\ell \sum_{n\neq 0} \frac{1}{n}\alpha^d_{n}e^{-i n \tau}\sin(n\sigma)$$.

Note that there is no $\tau$ dependence in the zero-mode sector; there is no total momentum $p'^d=0$. Moreover, the endpoints of the string are fixed

$$X'^d(\tau,0)=c^d$$

$$X'^d(\tau,\pi)=c^d+ \frac{2\pi \alpha'}{R}n$$

with $$X'^d(\tau,\pi)-X'^d(\tau,0)=\frac{2\pi \alpha'}{R}n=2\pi R'n$$.

Note that $R'=\alpha'/R$ is the radius of the T-dual circle.

Both endpoints have Dirichlet boundary conditions from the T-dual perspective and KK momentum $n$ becomes the winding number. The hyperplane $x^d=c^d$ where the open strings end, spanning the directions $x^m=\{x^0,x^1,\dots,x^{d-1}\}$, is called a D-brane.

The mass-shell condition is $$m^{2}=\left( \frac{n}{R} \right)^{2}+\frac{2}{\alpha'}(N-a)=\left( \frac{R'}{\alpha'}n \right)^{2}+\frac{2}{\alpha'}(N-a)$$.

From the original perspective, the first term is the contribution to mass from the KK momentum. In the T-dual picture, it arises from the potential energy of wrapped strings beginning and ending on the D-brane.

We now consider the massless spectrum when $a=1$. For a generic radius, this consists of states with $n=0$ and $N=1$. In the original description, $\alpha^\mu_{-1}\ket{0;k}$ correspond to excitations of a $U(1)$ gauge field $A_\mu$. In the T-dual perspective, the D-brane breaks translation invariance and we must decompose it into components:

- States $\alpha^m_{-1}\ket{0;k}$ correspond to excitations of a $U(1)$ gauge field $A_{m}$ on the D-brane spanning the directions $x^m=\{x^0,x^1,\dots,x^{d-1}\}$.
- State $\alpha^d_{-1}\ket{0;k}$ corresponds to excitations of a scalar field $\phi$ on the D-brane spanning teh directions $x^m=\{x^0,x^1,\dots,x^{d-1}\}$.

We can argue that the scalar field corresponds to fluctuations of the position of the D-brane in the $x^d$-direction and therefore, D-branes are dynamical objects in string theory.
