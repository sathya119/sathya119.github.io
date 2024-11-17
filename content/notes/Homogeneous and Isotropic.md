- **Isotropy**: Covered, with examples like Hubble's Law applying uniformly across directions.
- **Homogeneity**: Explained, with references to galaxy surveys showing consistent density.
- **Cosmological Principle**: Addressed as the theoretical basis linking isotropy and homogeneity.
- **Scale Dependence**: Discussed, highlighting local inhomogeneities versus large-scale uniformity.
- **Role of Galaxies**: Noted as tracers for cosmic expansion and their small contribution to energy density.
- **Large-Scale Simplicity**: Mentioned as a clue to early-time dynamics, simplifying cosmological models.
## 1. The metric
- Due to the expanding nature of the universe, the distance between any two points will grow with time. We describe this effect by introducing a scale factor a(t) as $$l=a(t)|\Delta\underline{x}|$$$$\text{where }l\text{ is the physical distance, }\Delta \underline{x}=\underline{x}_A-\underline{x}_B\text{ with }\underline{x}_A=(x^1_A,x^2_A,x^3_A),\;|\Delta\underline{x}|^2=(\Delta x^i)^2$$ and we have used “a” to factor out time from a space like variable x. Now, $$|\Delta x|\equiv l(t_0)\text{      and      }a(t_0)=1$$
- Now, as in Hubble’s Law, $$v=\frac{dl(t)}{dt}=\frac{d(a(t)|\Delta x|)}{dt}=\frac{da}{dt}\frac{l}{a(t)}=H(l)t$$$$\boxed{H(t)=\frac{1}{a(t)}\frac{da(t)}{dt}}$$
- The inverse of H gives the time scale that takes for the universe to double in size. Now, the line element:
$$ds^2=dt^2-a(t)^2d \underline{x}^2=dt^2-a(t)^2(dr^2+r^2(d\theta^2+sin^2\theta d\phi^2))=g_{\mu\nu}dx^\mu dx^\nu$$
- The metric is different in each frame, $$g_{\mu\nu}=\pmatrix{1&&&\\&-a^2(t)&&\\&&-a^2(t)&\\&&&-a^2(t)}\;\;\;\;\;x^\mu=(t,x^1,x^2,x^3)$$$$g_{\mu\nu}=\pmatrix{1&&&\\&-a^2(t)&&\\&&-a^2(t)r^2&\\&&&-a^2(t)r^2s^2_\theta}\;\;\;\;\;(x')^\mu=(t,r,\theta,\phi)$$
### 1.1 Curvature
- The metric​ could depend on space as well as time, but isotropy and homogeneity constrain its spatial dependence.
- Space, if curved, must have uniform curvature everywhere and in all directions.
- **Positive curvature** (spherical geometry):
    - Described using a hypersurface in a higher-dimensional Euclidean space $$(x_4^2+x^2=R_U^2)$$
    - Metric is derived by substituting x_4​(x) back into the initial formulation, resulting in: $$dl^2 = \frac{dr^2}{1 - r^2/R_U^2} + r^2(d\theta^2 + \sin^2\theta \, d\phi^2)$$
    - Distances in θ,ϕ directions remain flat; r-direction has curvature effects.
    - r=0 is not special, as all points share the same curvature.
- **Negative curvature** (hyperbolic geometry):
    - Defined via a Minkowskian metric $$(-x_4^2 + x^2 = -R_U^2​)$$
    - Results in a similar metric with adjustments for negative curvature: $$ds^2 = \frac{dr^2}{1 + r^2/R_U^2} + r^2(d\theta^2 + \sin^2\theta \, d\phi^2)$$
- **Unified Metric**:
    
    - The results for different curvatures are synthesized into a general line element: $$ds^2 = dt^2 - a(t)^2 \left[ \frac{dr^2}{1 - Kr^2} + r^2(d\theta^2 + \sin^2\theta \, d\phi^2) \right]$$
- **Curvature Parameter K**
	$$K=\begin{cases}\frac{1}{R^2_U}\\0\\\frac{-1}{R^2_U}\end{cases}$$
	To extend to a curved case, we change variables from r to χ as $$\boxed{ds^2=dt^2−a(t)^2[dχ^2+S_K^2​(χ)(d\theta^2+sin^2\theta d\phi^2)]}\;\;\;\;\;\;\;S_K(\chi)=\begin{cases}R_Usin(\frac{\chi}{R_U})\\\chi\\R_Usinh(\frac{\chi}{R_U})\end{cases}$$
	As R tends to infinity, we get a flat geometry. This metric, known as Friedman Robertson Walker, is the most general one, adhering to isotropy and homogeneity.

## 2. The Path of Light
