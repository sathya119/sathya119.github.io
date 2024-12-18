Need: coordinate-independent notion of derivatives of vector fields
The covariant derivative of a vector field is a (1,1) tensor field.
	Linearity implies $$\nabla(V+W)=\nabla V+\nabla W$$
	Satisfies the Leibniz rule $$[\nabla(fV)]^\nu_\mu=(\partial_\mu f)V^\nu+f(\nabla V)^\nu_\mu$$
A vector field is covariantly constant if the covariant derivative is zero.
Let us now write the covariant derivative of a general vector in terms of the covariant derivatives of the basis vectors: $$(\nabla V)_\mu^\nu=[\nabla(V^\lambda\partial_\lambda)]^\nu_\mu=\partial_\mu V^\lambda(\partial_\lambda)^\nu+V^\lambda[\nabla(\partial_\lambda)]^\nu_\mu=\partial_\mu V^\nu+V^\lambda[\nabla(\partial_\lambda)]^\nu_\mu$$
We define $$\Gamma^\nu_{\mu\lambda}=[\nabla(\partial_\lambda)]^\nu_\mu$$ as the connection coefficients.
Consider one-forms, $$\nabla_\nu(V^\mu\omega_\mu)=\partial_\nu(V^\mu\omega_\mu)=\partial_\nu V^\mu\omega_\mu+V^\mu\partial_\nu\omega_\mu=(\nabla_\nu V^\mu)\omega_\mu+V^\mu\nabla_\nu\omega_\mu\;\;\;\;\;\;\;\text{(from Leibniz rule)}$$
Then, we obtain $$V^\mu\nabla_\nu\omega_\mu=V^\mu\partial_\nu\omega_\mu-\Gamma^\nu_{\mu\lambda}V^\lambda\omega_\mu$$
For this to be satisfied for any vector, the covariant derivative of the covector must satisfy $$\nabla_\nu\omega_\mu=\partial_\nu\omega_\mu-\Gamma^\sigma_{\nu\mu}w_\sigma$$
Similarly, on a (1,1) tensor, $$\nabla_\nu T^\mu_\rho=\partial_\nu T^\mu_\rho + \Gamma^\mu_{\nu\lambda}T^\lambda_\rho-\Gamma^\lambda_{\nu\rho}T^\mu_\lambda$$
A connection is torsion-free if the connection coefficients are symmetric in the lower indices $$\Gamma^\lambda_{\mu\nu}=\Gamma^\lambda_{\nu\mu}$$
Such connections have the property that the covariant derivatives on a scalar commute, $$[\nabla_\mu,\nabla_\nu]f=\nabla_\mu\nabla_\nu f-\nabla_\nu\nabla_\mu f=(\partial_\mu\partial_\nu f-\Gamma^\lambda_{\mu\nu}f)-(\partial_\nu\partial_\mu f-\Gamma^\lambda_{\nu\mu}f)=0$$
[[Levi-Civita Connection]]
