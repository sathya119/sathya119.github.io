$$A=\bra{\text{out}}S\ket{\text{in}}$$

where S is the S-matrix or Scattering matrix that relates that relates the initial and final states of a physical system undergoing a scattering process.

$$\bra{\text{out}}$$ and $$\ket{\text{in}}$$ are the states at $$t=\pm\infty$$. Hence, they are non-interacting states and are the direct products of single-particle states, with definite [[on-shell]] momentum and polarisation $$\ket{p_i,\epsilon_i}$$, where i is the particle label.

On-shell momentum: $$p^2_i=+(p^0_i)^2-\vec p_i^2=m_i^2$$

Metric convention: $$\eta_{\mu\nu}=\text{diag}(+1,-1,-1,-1)$$

We decompose the S-matrix as $$S=\mathbb{1}+iT$$, so that we can separate out the interaction effects into a new matrix called the T-matrix.

LSZ Reduction Formula: $$\bra{\text{out}}iT\ket{\text{in}}=\prod_{i=1}^{p_i+p_f}\sqrt{Z_i}\;(\text{Sum of all amputated and connected Feynman graphs})$$

There are $$n_i$$ incoming and $$n_f$$ outgoing legs. Z is the wavefunction renormalisation.


| Feynman Diagrams                       | Amplitudes          |
| -------------------------------------- | ------------------- |
| - Not gauge invariant                  | - Gauge invariant   |
| - Have off-shell states in propagators | - On-shell          |
|                                        | - Hidden symmetries |
