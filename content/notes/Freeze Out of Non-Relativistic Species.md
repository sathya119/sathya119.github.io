We can define the quantity $$\Delta_Y\equiv Y-Y_{eq}$$.

Now, if we solve the Boltzmann equation acquired earlier,

**For early times**, $$1<x\ll x_f$$, the yield closely follows its equilibrium value, $$Y\approx Y_{eq}$$, and we can assume that $$d\Delta_Y/dx=0$$. Then, 

$$\Delta_Y=-\frac{\frac{dY_{eq}}{dx}}{Y_{eq}}\frac{x^2}{2\lambda\langle\sigma v\rangle}$$.

Thus, at freeze-out we obtain,

$$\Delta_{Y_f}\approx\frac{x^2_f}{2\lambda\langle\sigma v\rangle}$$

**For late times**, $$x\gg x_f$$, we can assume that $$Y\gg Y_{eq}$$ and thus $$\Delta_{Y_\infty}\approx Y_\infty$$. Then,

$$\frac{d\Delta_Y}{dx}\approx -\frac{\lambda\langle\sigma v\rangle}{x^2}\Delta^2_Y$$.

Separating variables and integrating from freeze-out time up to nowadays,

$$\int_{\Delta_{Y_f}}^{\Delta_{Y_\infty}} \frac{d\Delta_Y}{\Delta^2_Y}=-\int_{x_f}^{x_\infty}\frac{\lambda\langle\sigma v\rangle}{x^2}dx$$.

Since $$x_\infty \gg x_f$$,

$$\frac{1}{\Delta_{Y_\infty}}=\frac{1}{\Delta_{Y_f}}+\frac{\lambda}{x_f}(a+\frac{b}{2x_f})$$.

Note that, here, we have expanded the thermally averaged annihilation cross-section in powers of $$x^{-1}$$ as $$\langle\sigma v\rangle=a+\tfrac{b}{x}$$.

The first term of the RHS is generally ignored. This leads to

$$\Delta_{Y_\infty}=Y_\infty=\frac{x_f}{\lambda(a+\tfrac{b}{2x_f})}$$.

The relic density can be expressed as

$$\Omega h^2=\frac{m_\chi Y_\infty s_0h^2}{\rho_c}\approx \frac{10^{-10}\;GeV^{-2}}{a+\tfrac{b}{40}}\approx \frac{3\times10^{-27}\;cm^3\;s^{-1}}{a+\tfrac{b}{40}}$$.

