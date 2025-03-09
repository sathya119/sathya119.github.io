The gauge-fixed world-sheet metric is $$h^{ab}=\begin{pmatrix}
-1&0\\0&1
\end{pmatrix}$$

By imposing the equations of motion, we obtain $T_{ab} \stackrel{!}{=}0$ as a constraint in the canonical formalism. Then,

$$T_{00}=T_{11}=\frac{1}{2}(\dot{X}^2+X'^2)$$

$$T_{01}=T_{10}=\dot{X}.X'$$

In light-cone coordinates,

$$T_{+ -}=T_{- +}=0$$

$$T_{++}=\dot{X}_{L}^2\text{ and }T_{--}=\dot{X}^2_{R}$$

#### Closed String

We define the Fourier modes of the closed strings constraints by 

$$L_{m}:=\frac{T}{2}\int^\pi_{0}d\sigma\;e^{-2im\sigma}T_{--}=\frac{1}{2}\sum_{n\in\mathbb{Z}}\alpha_{m-n}.\alpha_{n}$$

$$\tilde{L}_{n}:=\frac{T}{2}\int^\pi_{0}d\sigma\;e^{2im\sigma}T_{++}=\frac{1}{2}\sum_{n\in\mathbb{Z}}\tilde\alpha_{m-n}.\tilde{\alpha}_{n}$$

where $$\alpha^\mu_{0}=\tilde{\alpha}^\mu_{0}=\frac{1}{2}lp^\mu$$.

The constraints are then $L_{m}=\tilde{L}_{m}=0\;\forall\;m \in \mathbb{Z}$. These are known as the classical Virasoro constraints. They have the following Poisson brackets (Virasoro Algebra):

- $$\{L_{m},\;L_{n}\}=-i(m-n)L_{m+n}$$
- $$\{\tilde L_{m},\;\tilde L_{n}\}=-i(m-n)\tilde{L}_{m+n}$$
- $$\{L_{m},\;\tilde L_{n}\}=0$$.

The combinations of $L_0$ and $\tilde L_0$ are

- $$L_0+\tilde{L}_{0}=\frac{\alpha'}{2}p^2+\sum_{n=1}^\infty(\alpha_{-n}.\alpha_{n}+\tilde{\alpha}_{n}.\tilde{\alpha_{-n}})=H$$
- $$L_0-\tilde{L}_{0}=\sum_{n=1}^\infty(\alpha_{-n}.\alpha_{n}-\tilde{\alpha}_{n}.\tilde{\alpha_{-n}})$$

###### Mass-Shell Constraint

$$H=L_{0}+\tilde{L}_{0}\stackrel{!}{=}0$$

Then, $$\frac{\alpha'M^2}{2}=\sum_{n=1}^\infty(\alpha_{-n}\alpha_{n}+\tilde{\alpha}_{n}.\tilde{\alpha}_{-n})$$

where we have considered the relativistic definition of mass $M^2:=-p^2$.

###### Level-Matching Constraint

$$L_{0}-\tilde{L}_{0}\stackrel{!}{=}0$$ is called level-matching. In terms of the mode expansion,

$$\sum_{n=1}^\infty \alpha_{-n}\alpha_{n}=\sum_{n=1}^\infty \tilde{\alpha}_{n}\tilde{\alpha}_{-n}$$.

#### Open String

The Neumann boundary conditions relate the left-moving and right-moving modes. Hence, there will be no level-matching constraint.

We have a single set of Virasoro generators

$$L_{m}:=\frac{1}{2}\sum_{n\in \mathbb{Z}} \alpha_{m-n}.\alpha_{n};\;\;\;\;\;\;\;\;\;\;\;\alpha^\mu_{0}:=lp^\mu$$.

These generators satisfy the Poisson brackets $\{L_{m},\;L_{n}\}=-i(m-n)L_{m+n}$.

###### Mass-Shell Constraint

$$\alpha'M^2=\sum_{n=1}^\infty \alpha_{-n}.\alpha_{n}$$ with the same relativistic definition for mass.