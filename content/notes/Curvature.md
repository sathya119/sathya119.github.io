Covariant derivatives commute on scalars, but not on other tensors. So, consider $$[\nabla_\mu,\nabla_\nu]V^\lambda=\nabla_\mu(\nabla_\nu V^\lambda)-\nabla_\nu(\nabla_\mu V^\lambda)$$
Recall $$\nabla_\mu T^\lambda_\nu=\partial_\mu T^\lambda_\nu+\Gamma^\lambda_{\mu\rho}T^\rho_\nu -\Gamma^\rho_{\mu\nu}T^\lambda_\rho$$
Then, $$[\nabla_\mu,\nabla_\nu]V^\lambda=[\partial_\mu\Gamma^\lambda_{\nu\rho}-\partial_\nu\Gamma^\lambda_{\mu\rho}+\Gamma^\lambda_{\mu\sigma}\Gamma^\sigma_{\nu\rho}-\Gamma^\lambda_{\nu\sigma}\Gamma^\sigma_{\mu\rho}]V^\rho$$
We define a (1,3) type tensor called the #Riemann-Tensor or the Curvature Tensor $$R^\lambda_{\rho\mu\nu}=\partial_\mu\Gamma^\lambda_{\nu\rho}-\partial_\nu\Gamma^\lambda_{\mu\rho}+\Gamma^\lambda_{\mu\sigma}\Gamma^\sigma_{\nu\rho}-\Gamma^\lambda_{\nu\sigma}\Gamma^\sigma_{\mu\rho}$$ and hence $$[\nabla_\mu,\nabla_\nu]V^\lambda=R^\lambda_{\rho\mu\nu}V^\rho$$
- The commutator is always related to the #Riemann-Tensor . For a one-form, $$[\nabla_\mu,\nabla_\nu]\omega_\lambda=-R^\lambda_{\rho\mu\nu}\omega_\rho$$
- If spacetime is flat (i.e., the metric is #Minkowski ), then the #Christoffel-symbols vanish and hence #Riemann-Tensor is also zero. The converse is also true. Hence, spacetime is flat iff #Riemann-Tensor is zero.

[[Path Independence of parallel transport]]
[[Geodesic Deviation]]
[[Riemann Normal Coordinates]]
[[Symmetries and Ricci Tensor]]