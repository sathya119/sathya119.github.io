We immediately encounter two problems with the action principle:
1. The limit m->0 gives us a zero action that is not useful.
2. The square root term makes quantisation difficult.

Thus, we try find an action principle that is classically equivalent but quadratic in the coordinate functions $$x^\mu(\sigma)$$.

Let us consider the coordinate functions as fields on a one-dimensional QFT on the world-line. We also add one-dimensional gravity $$g_{\sigma\sigma}(\sigma)$$ and introduce another field $$e(\sigma)\equiv\sqrt{-g_{\sigma\sigma}(\sigma)}$$.

The new action principle is

$$S=-\frac{1}{2}\int d\sigma\;\sqrt{-g_{\sigma\sigma}}(g^{\sigma\sigma}\eta_{\mu\nu}\frac{dx^\mu}{d\sigma}\frac{dx^\nu}{d\sigma}+m^2)$$

$$=-\frac{1}{2}\int d\sigma\;(e^{-1}\eta_{\mu\nu}\frac{dx^\mu}{d\sigma}\frac{dx^\nu}{d\sigma}-em^2)$$

Here, $$g^{\sigma\sigma}$$ is the intrinsic metric on the one-dimensional world-line.

Now, the massless limit is not problematic and the action is quadratic in the coordinate functions.

This action principle is again invariant under Poincaré transformations and world-line reparametrisations.

The equation of motion for e gives

$$e^{-2}\eta_{\mu\nu}\frac{dx^\mu}{d\sigma}\frac{dx^\nu}{d\sigma}+m^2=0$$

$$\implies e=\frac{1}{m}\sqrt{-\eta_{\mu\nu}\frac{dx^\mu}{d\sigma}\frac{dx^\nu}{d\sigma}}$$.

This sets the intrinsic world-line metric proportional to the induced metric by the map $$x^\mu:\gamma\rightarrow\mathbb{R}^{1,D-1}$$, namely

$$g^{\sigma\sigma}=\frac{1}{m^2}\eta_{\mu\nu}\frac{dx^\mu}{d\sigma}\frac{dx^\nu}{d\sigma}$$.

Plugging this in the action to eliminate e recovers the original action principle, making them classically equivalent.

We can now use the gauge redundancy under reparametrisations of the world-sheet to fix a convenient form for e, for instance, by choosing it to be the constant e=1/m. With this choice, the action becomes,

$$S=\frac{m}{2}\int d\sigma (\eta_{\mu\nu}\frac{dx^\mu}{d\sigma}\frac{dx^\nu}{d\sigma}-1)$$.

However, we must supplement this action with the constraint $$\eta_{\mu\nu}\frac{dx^\mu}{d\sigma}\frac{dx^\nu}{d\sigma}+1=0$$ to avoid introducing spurious degrees of freedom not present in the original system.

Quantisation is hence possible (but must be supplemented by the constraint).