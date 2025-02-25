Since there is a square root in the Nambu-Goto action, quantisation is difficult. So, we switch to a classically equivalent action that is quadratic in $$X^\mu(\sigma)$$.

We introduce an additional field $$h_{ab}(\sigma)$$ describing the world-sheet gravity.

The new action principle: $$S=-\frac{T}{2} \int_{\Sigma} d^2\sigma \sqrt{-h} \;h^{ab}\gamma_{ab}=-\frac{T}{2} \int_{\Sigma} d^2\sigma \sqrt{-h} \;h^{ab}\partial_{a}X^\mu\partial_{b}X^\nu\eta_{\mu\nu}$$.

Here, $$h_{ab}(\sigma)$$ is the intrinsic metric on the world-sheet with inverse $$h^{ab}(\sigma)$$ and $$h:=\det(h_{ab})<0$$ is the determinant of the intrinsic world-sheet metric. This is known as the Polyakov Action.

The Nambu-Goto and Polyakov actions are classically equivalent. How?

The equations of motion are $$0=\frac{\delta S}{δh^{ab}}=-\frac{T}{2}\sqrt{ -h }T_{ab}$$

where $$T_{ab}:=-\frac{2}{T}\frac{1}{\sqrt{ -h }}\frac{δS}(δh^{ab})$$, known as the world-sheet energy-momentum tensor.

Note: $$T_{ab}=\partial_{a}X^\mu\partial_{b}X_{\mu}-\frac{1}{2}h_{ab}h^{cd}\partial_{c}X^\mu\partial_{d}X_{\mu}$$.

Since the world-sheet metric must be non-degenerate, $$\sqrt{-h}\not=0$$, and the equation of motion is simply $$T_{ab}=0$$.

This can be expressed as

$$\gamma_{ab}=\frac{1}{2}(h^{cd}\gamma_{cd})h_{ab}$$

which implies that intrinsic world metric and the induced world metric are proportional. Taking the determinant,

$$\det(\gamma)=\frac{1}{4}(h^{cd}\gamma_{cd})^2\det(h)$$, which produces the Nambu-Goto action when substituted back in.