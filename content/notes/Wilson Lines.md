When compactifying a coordinate on a circle of radius R, $x^d\sim x^d+2\pi R$, we will introduce a classical background gauge field 

$$A_{d}=-\frac{1}{2\pi R}\text{diag}(\theta_{1},\dots \theta_{N})$$.

This background is flat; it has a vanishing field strength and hence can be set locally to zero by a gauge transformation. We can only shift $\theta_{j}\sim \theta_{j}+2\pi n_{j}$, for $n\in \mathbb{Z}$ by a globally defined gauge transformation $A_{d}\to f^{-1}(-i\partial_{d}+A_{d})f$ with $$f=e^{-in x^d/R}$$. Then,

$$A_{d}\mapsto-\frac{n}{R}+A_{d}$$

$$-\frac{1}{2\pi R}\theta\mapsto-\frac{1}{2\pi R}\theta-\frac{n}{R}$$

$$\theta\mapsto \theta+2\pi n$$.

Thus $\theta_j$ are naturally periodic. This is known as the [[Aharonov-Bohm effect]].

The background that we chose spontaneously breaks $U(N)\to U(1)^N$, which is its maximal torus.

The non-abelian version of the Aharonov-Bohm effect means a particle transforming in the fundamental representation will undergo a non-trivial transformation upon transportation around the circle,

$$P\; \text{exp}\;i \oint dx^dA_{d}=\text{diag}(e^{-i\theta_{1}},\dots,e^{-i\theta_{N}})$$.

This is known as holonomy of the gauge field. A point particle in state $\ket{j}$ will pick up a phase $e^{-i\theta_{j}}$ around the circle.

This modifies the quantisation of the KK momentum. This arose from the condition $e^{2\pi Rp^d}=1$, representing the fact that translation by $x^d\to x^d+2\pi R$ is trivial. The Wilson line modifies this condition. The $ij$-strings must satisfy

$$e^{2\pi iRp^d}e^{-i(\theta_{i}-\theta_{j})}=1$$

and therefore

$$p^d=\frac{\theta_{i}-\theta_{j}+2\pi n}{2\pi R}$$.

For $ii$-strings, it reduces to our previous result of $p^d=n/R$.
