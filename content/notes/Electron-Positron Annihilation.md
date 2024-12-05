(insert diagram)
This process is actually a rotated version of the Electron-Muon scattering. Hence, we will exploit the [[Crossing Symmetry]] which relies on the Lorentz Invariance of the Amplitude.
We need to cross the initial state muon into the final state and the final state electron into its initial state, i.e., k2 -> -k2 and p1 -> -p1. Thus, Mandelstam variables change to $$s=(k_1+k_2)^2 \;\;\;\;\;\;\;\;\longrightarrow\;\;\;\;\;\;\;\;(k_1-k_2)^2=t$$$$t=(k_1-p_1)^2 \;\;\;\;\;\;\;\;\longrightarrow\;\;\;\;\;\;\;\;(k_1+p_1)^2=s$$$$u=(k_1-p_2)^2 \;\;\;\;\;\;\;\;\longrightarrow\;\;\;\;\;\;\;\;(k_1-p_2)^2=u$$
Thus, $$\bra{}\mathcal{M}\ket{^2}=2e^4\frac{s^2+u^2}{t^2}\longrightarrow2e^4\frac{t^2+u^2}{s^2}$$
	The crossing relation has turned a #t-channel process into an #s-channel process.
We need to careful to not apply these crossing relations to the flux factor. It has to be recomputed from the new initial states. Hence, $$\text{flux }=2s=2(k_1+p_1)^2$$
In a collider environment with $$t=-s\frac{1-cos\theta}{2}\;\;\;\;\;\;\;\;\;u=-s\frac{1+cos\theta}{2}$$
The annihilation #cross-section is then $$\frac{d\sigma}{d\Omega}=\frac{e^4}{32\pi^2s}\frac{t^2+u^2}{s^2}=\frac{e^4}{64\pi^2s}(1+cos^2\theta)$$
Now, the total annihilation cross section is, $$\text{(Using }d\Omega=d\phi dcos\theta)$$$$\sigma=\int_0^{2\pi}d\phi\int_{-1}^1dcos\theta\frac{e^4}{64\pi^2s}(1+cos^2\theta)$$$$=\frac{e^4}{32\pi s}\frac{8}{3}=\frac{4\pi\alpha^2}{3s}\;\;\;\;\;\;\;\;\;\;\;\;\;\text{with }\alpha=\frac{e^2}{4\pi}$$ where α is the fine-structure constant.