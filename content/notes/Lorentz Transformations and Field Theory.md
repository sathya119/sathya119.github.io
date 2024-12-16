[[SR and LT]]
(Read the above for a recap of Special Relativity and Lorentz Transformations)
- **Scalars**
	$$\phi(x)\rightarrow \phi'(x')\equiv\phi(x)$$
	Similarly, $$\partial_\mu\phi(x)\rightarrow \partial_\mu'\phi'(x')=\Lambda_\mu^\nu\partial_\nu\phi'(x')\equiv\Lambda_\mu^\nu\partial_\nu\phi(x)$$
	and therefore, $$\partial_\mu\phi(x)\partial^\mu\phi(x)=\partial_\mu\phi(x)\partial_\nu\phi(x)g^{\mu\nu}\rightarrow \Lambda^\rho_\mu\partial_\rho\phi'(x')\Lambda^\sigma_\nu\partial_\sigma\phi'(x')g^{\mu\nu}$$$$=\partial_\rho\phi(x)\partial_\sigma\phi(x)\Lambda^\rho_\mu\Lambda^\sigma_\nu g^{\mu\nu}=\partial_\rho\phi(x)\partial_\sigma\phi(x)g^{\rho\sigma}$$
	so that the Lagrangian transforms simply as a scalar, $$\mathcal{L}(x)\rightarrow \mathcal{L}'(x')\equiv\mathcal{L}(x)$$
	and the #Klein-Gorden equation is also invariant.

- **Vectors**
	$$A^\mu(x)\rightarrow A'^\mu(x')=\Lambda^\mu_\nu A^\nu(x)$$$$F^{\mu\nu}(x)\rightarrow F'^{\mu\nu}(x')=\Lambda^\mu_\rho\Lambda^\nu_\sigma F^{\rho\sigma}(x)$$

- **Fermions**
	$$\Psi_a\rightarrow\Psi'_a=\mathcal{D}(\Lambda)_{ab}\Psi_b\equiv(\Lambda_\tfrac{1}{2})_{ab}\Psi_b$$
	where a,b = 1,...,4 denote the components of the Dirac Spinor and D(Λ) is 4x4 matrix in Dirac space. $$(\Lambda_\tfrac{1}{2})_{ab}=e^{1-\frac{i}{2}\epsilon_{\rho\sigma}\hat{S}^{\rho\sigma}}$$
	is the spinor representation of the LT D(Λ). How does the Dirac matrices transform? $$\gamma^\mu_{ab}\rightarrow\gamma'^\mu_{ab}=\Lambda^\mu_\nu\gamma^\nu_{ab}$$
	Now, from Dirac algebra, $$\{\gamma'^\mu,\gamma'^\nu\}=\{\Lambda^\mu_\rho\gamma^\rho,\Lambda^\nu_\sigma\gamma^\sigma\}=\Lambda^\mu_\rho\Lambda^\nu_\sigma\{\gamma^\rho,\gamma^\sigma\}=2g^{\rho\sigma}\Lambda^\mu_\rho\Lambda^\nu_\sigma\delta_{ab}=2g^{\mu\nu}\delta_{ab}$$

- **Invariance of the Dirac equation**
	$$(i\gamma^\mu\partial_\mu-m)\Psi(x)=0$$
	Under a LT, $$(i\gamma^\mu\partial_\mu-m)\Psi(x)\rightarrow(i\gamma^\mu\Lambda^\nu_\mu\partial_\nu-m)\Psi'(x')=(i\gamma^\mu\Lambda^\nu_\mu\partial_\nu-m)\Lambda_\tfrac{1}{2}\Psi(x')$$$$=\Lambda_\tfrac{1}{2}\Lambda_\tfrac{1}{2}^{-1}(i\gamma^\mu\Lambda^\nu_\mu\partial_\nu-m)\Lambda_\tfrac{1}{2}\Psi(x')=\Lambda_\tfrac{1}{2}(i\underbrace{\Lambda_\tfrac{1}{2}^{-1}\gamma^\mu\Lambda_\tfrac{1}{2}}_{\Lambda^\mu_\sigma\gamma^\sigma}\Lambda^\nu_\mu\partial_\nu-m)\Psi(x')$$$$=\Lambda_\tfrac{1}{2}(i\Lambda_\sigma^\mu\gamma^\sigma\Lambda^\nu_\mu\partial_\nu-m)\Psi(x')=\Lambda_\tfrac{1}{2}(i\gamma^\sigma\partial_\sigma-m)\Psi(x')=0$$
	In other words, the Dirac equation is Lorentz Invariant.

- **What is Ŝ?**
	$$(\hat{S}_{\rho\sigma})_{ab}=\frac{i}{4}([\gamma^\rho,\gamma^\sigma])_{ab}$$
		[[Weyl basis for Dirac matrices]]
	
	In the Weyl Representation, $$\hat{S}^{0i}=\frac{i}{4}[\gamma^0,\gamma^i]=-\frac{i}{2}\begin{pmatrix}\sigma_i&0\\0&-\sigma_i\end{pmatrix}$$$$\hat{S}^{ij}=\frac{i}{4}[\gamma^i,\gamma^j]=\frac{1}{2}\epsilon^{ijk}\begin{pmatrix}\sigma_k&0\\0&\sigma_k\end{pmatrix}$$
	The LT is not unitary because although the rotation generators are Hermitian, the boost generators are not. Hence, we define $$\bar{\Psi}=\Psi^\dagger\gamma^0$$ where $$\hat{S}^{ij}\gamma^0=\gamma^0\hat{S}^{ij},\;\;\;\;\;\;\;\;\;\;\;\;\;\;\hat{S}^{0i}\gamma^0=-\gamma^0\hat{S}^{0i}$$ such that $$\bar{\Psi}\rightarrow\Psi^\dagger(1+\frac{i}{2}\epsilon_{\rho\sigma}(\hat{S}^{\rho\sigma})^\dagger)\gamma^0=\Psi^\dagger\gamma^0(1+\frac{i}{2}\epsilon_{\rho\sigma}\hat{S}^{\rho\sigma})\equiv\bar{\Psi}\Lambda_\tfrac{1}{2}^{-1}$$
