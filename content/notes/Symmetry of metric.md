A scalar field has a symmetry or isometry under a coordinate transformation if

$$\phi(\tilde{x}^\mu=x_0^\mu)=\phi(x^\mu=x_0^\mu)$$

Let us now consider an infinitesimal transformation 

$$\tilde{x}^\mu=x^\mu+\epsilon X^\mu\;\;\;\;\;\;\;\;\;\text{for some small }\epsilon\text{ and vector field }X^\mu$$

Then, in general 

$$\phi(x^\mu)=\phi(\tilde{x}^\mu(x^\rho))=\phi(\tilde{x}^\mu=x^\mu+\epsilon X^\mu)=\phi(\tilde{x}^\mu=x^\mu)+\epsilon X^\lambda\partial_\lambda\phi(\tilde{x}^\mu=x^\mu)+...$$

So, to first order in ε, for φ to be invariant, the derivative must vanish in some direction.

Let us generalise this to the metric. The metric has a symmetry under a coordinate transformation if 

$$\tilde{g}_{\mu\nu}(\tilde{x}^\mu=x_0^\mu)=g_{\mu\nu}(x^\mu=x_0^\mu)$$

Recall 

$$g_{\mu\nu}(x^\mu)=(\frac{\partial\tilde{x}^\rho}{\partial x^\mu})(\frac{\partial\tilde{x}^\sigma}{\partial x^\nu})\tilde{g}_{\rho\sigma}(\tilde{x}^\mu)$$

Again, consider an infinitesimal transformation and follow the steps to obtain 

$$\tilde{g}_{\mu\nu}(\tilde{x}^\mu=x_0^\mu)=g_{\mu\nu}(x^\mu=x_0^\mu)\implies \partial_\mu X^\rho g_{\rho\sigma}+\partial_\nu X^\sigma g_{\mu\sigma}+X^\lambda \partial_\lambda g_{\mu\nu}=0$$

To make it coordinate independent, let us change the partial derivatives to covariant derivatives and obtain the #Killings-Equation 

$$\nabla_\mu X^\nu+\nabla_\nu X^\mu=0$$
and a vector satisfying it is called the #Killing-Vector.

By [[Noether’s Theorem]], there must be a conserved quantity associated to geodesics for a symmetry of the metric: The scalar 

$$K=W_\mu V^\mu$$
is constant along the geodesic 

$$\frac{dK}{ds}=V^\alpha \nabla_\alpha(W_\mu V^\mu)=\frac{1}{2}V^\alpha V^\mu(\nabla_\alpha W_\mu+\nabla_\mu W_\alpha)=0$$

