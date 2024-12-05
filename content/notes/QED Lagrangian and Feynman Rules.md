1. Lagrangian:
	$$\mathcal{L}_{QED}=-\frac{1}{4}F_{\mu\nu}F^{\mu\nu}+\bar\psi(i\cancel\partial-m)\psi+Qe\bar\psi\cancel A\psi-\mathcal{L}_{GF}$$
	Where the 1st term corresponds to the Photon, 2nd to the Fermion, 3rd to the Photon-Fermion interaction and the 4th fixes the otherwise arbitrary gauge as
	$$\mathcal{}L_{GF}=
\begin{cases}
    \frac{1}{2\xi}(\partial_\mu A^\mu)^2,& \text{covariant gauges}\\
    n_\mu A^\mu, \;n^2=1,          & \text{axial gauges}
\end{cases}
$$ We usually choose the covariant gauge as a Feynman Gauge with ξ=1.

- A general form of a physical #cross-section is 
$$d\sigma=\frac{1}{flux}|\mathcal{M}_{i\rightarrow f}|.\text{phase space}$$
	We use a Lorentz Invariant Phase Space element, aka LIPS:
	$$\text{LIPS}=(2\pi)^4\delta^4(\sum_{f=1}^{n_f}{}p_f-\sum_{f=1}^{n_i}p_i) {\prod_{f=1}^{n}\frac{d^3\vec{p_f}}{(2\pi)^32E_f}}$$

- A 2 -> n #cross-section
$$d\sigma=\frac{1}{4\sqrt{(p_1.p_2)-m_1^2m_2^2}}d\text{LIPS}<|\mathcal{M}_{i\rightarrow f}|^2>$$
	where the final term is an average over final state spins and polarisations and a sum over the initial state ones.
- 1 -> n processes #decay-rates
$$d\Gamma=\frac{1}{2m}d\text{LIPS}<|\mathcal{M}_{i\rightarrow f}|^2>$$
2. Feynman Diagram Rules
$$\alpha,\beta \text{ are Dirac Indices; }\mu,\nu \text{ are Lorentz Indices; }\lambda,\kappa \text{ are Polarisation Indices}$$
$$\text{and } s,s' \text{are Spin Indices}$$
	1. External Wavefunctions
		![[External Wavefunctions]]
	2. Propagators:
		Photon
		$$\frac{-i(g^{\mu\nu}+(\xi-1)\frac{q^\mu q^\nu}{q^2})}{q^2+i\epsilon}$$
		Fermion
		$$\frac{i(\cancel q + m)_{\alpha\beta}}{q^2-m^2+i\epsilon}$$
	3. Vertex:
		$$iQe\gamma^\mu_{\alpha\beta}$$
3. Amplitude construction:
		- Draw all topologically distinct Feynman Diagrams.
			- Only connected diagrams
			- No disconnected parts
			- No vacuum bubbles in the external legs
		- Assign momenta to all external lines.
		- Assign momenta to internal lines using momentum conservation at each vertex.
		- Integrate over all undefined internal momenta
		- $$\int \frac{d^4k}{(2\pi)^4}$$ for each internal momentum k.
			- At tree level, there will be no undefined internal momenta.
			- At n loop level, there will be n undefined internal momenta.
		- Include a factor of (-1) for every closed fermion loop. Include another factor of (-1) for diagrams differing only by exchange of identical fermions.
			- Finally divide by the respective symmetry factor.
