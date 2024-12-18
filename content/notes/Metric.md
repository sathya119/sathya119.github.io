A metric is a symmetric non-degenerate (0,2) tensor field:
- Symmetric: The indices can be interchanged since $$g_{\mu\nu}=g_{\nu\mu}$$
- Non-degenerate: The determinant of a metric is non-zero; the inverse exists. So, the eigenvalues of a metric (as an nxn matrix) are non-zero.
The pattern of +ve and -ve eigenvalues is called a metric’s signature.
- (++++) - Riemannian Signature
- (-+++) - Lorentzian Signature
Although the values of the eigenvalues depend on the choice of coordinate system, Sylvester’s Law of Inertia says that the signature is coordinate-independent.
Uses of a metric:
1. It defines the inner product on Tₚ $$g:T_p \times T_p\rightarrow \mathbb{R}$$$$(V,W) \equiv g(V,W)=g_{\mu\nu}V^\mu W^\nu$$
2. It maps vectors to co-vectors $$g:T_p\rightarrow T_p^*, \omega_\mu=g_{\mu\nu}V^\nu$$This map has an inverse too, with a (2,0) tensor called the inverse metric defined such that  $$g^{\mu\nu}g_{\nu\lambda}=\delta^\mu_\lambda$$
3. More generally, from tensors of type (r, s) to (r+1, s-1) and (r-1, s+1), called raising and lowering indices.
4. Defines a notion of length: we can define the line element as $$ds^2=g_{\mu\nu}dx^\mu dx^\nu$$and hence the proper length and proper time are$$l = \int\sqrt {g_{\mu\nu}\mathring{x}^\mu \mathring{x}^\nu}d\lambda$$$$\tau = \int\sqrt {-g_{\mu\nu}\mathring{x}^\mu \mathring{x}^\nu}d\lambda$$
Examples:
1. The #Minkowski  metric - Although this is not a tensor equation since it is not a tensor under general coordinate transformations.
2. Unit Sphere with the “round” metric - Obtained by restricting the flat metric on the 3-d real space to a unit sphere, i.e., $$x=sin\theta cos\phi,\;y=cos\theta sin\phi,\;z=cos\theta$$$$ds^2=d\theta^2+sin^2\theta d\phi^2$$with $$g_{\mu\nu}=\begin{pmatrix}
1&0\\0&sin^2\theta
\end{pmatrix}$$
3. Poincare Disc - $$ds^2=\frac{4}{(1-r^2)^2}(dr^2+r^2d\phi^2)$$This arises as a hyperbolic surface $$-t^2+x^2+y^2=-1$$in 3d #Minkowski space. A simple coordinate system on this surface is $$t=cosh\rho,\;x=sinh\rho cos\phi,\;y=sinh\rho sin\phi$$$$ds^2=d\rho^2+sinh^2\rho d\phi^2$$