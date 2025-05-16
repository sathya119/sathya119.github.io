- **Isotropy**: Covered, with examples like Hubble's Law applying uniformly across directions.
- **Homogeneity**: Explained, with references to galaxy surveys showing consistent density.
- **Cosmological Principle**: Addressed as the theoretical basis linking isotropy and homogeneity.
- **Scale Dependence**: Discussed, highlighting local inhomogeneities versus large-scale uniformity.
- **Role of Galaxies**: Noted as tracers for cosmic expansion and their small contribution to energy density.
- **Large-Scale Simplicity**: Mentioned as a clue to early-time dynamics, simplifying cosmological models.

## 1. The metric

- Due to the expanding nature of the universe, the distance between any two points will grow with time. We describe this effect by introducing a scale factor a(t) as $$l=a(t)|\Delta\underline{x}|$$, where $l$ is the physical distance, $$\Delta \underline{x}=\underline{x}_A-\underline{x}_B\text{ with }\underline{x}_A=(x^1_A,x^2_A,x^3_A),\;|\Delta\underline{x}|^2=(\Delta x^i)^2$$ and we have used “a” to factor out time from a space like variable x. Now, $$|\Delta x|\equiv l(t_0)\text{      and      }a(t_0)=1$$
- Now, as in Hubble’s Law, 

$$v=\frac{dl(t)}{dt}=\frac{d(a(t)|\Delta x|)}{dt}=\frac{da}{dt}\frac{l}{a(t)}=H(l)t$$

$$\boxed{H(t)=\frac{1}{a(t)}\frac{da(t)}{dt}}$$
- The inverse of H gives the time scale that takes for the universe to double in size. Now, the line element:

$$ds^2=dt^2-a(t)^2d \underline{x}^2=dt^2-a(t)^2(dr^2+r^2(d\theta^2+sin^2\theta d\phi^2))=g_{\mu\nu}dx^\mu dx^\nu$$
- The metric is different in each frame, 

$$g_{\mu\nu}=\pmatrix{1&&&\\&-a^2(t)&&\\&&-a^2(t)&\\&&&-a^2(t)}\;\;\;\;\;x^\mu=(t,x^1,x^2,x^3)$$

$$g_{\mu\nu}=\pmatrix{1&&&\\&-a^2(t)&&\\&&-a^2(t)r^2&\\&&&-a^2(t)r^2s^2_\theta}\;\;\;\;\;(x')^\mu=(t,r,\theta,\phi)$$

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
- It is an unavoidable fact that we are very much stuck in the same place for cosmological observations. For instance, the Voyager 1 (farthest flown human object yet) is only 10^-9 Mpc from us!
- Hence, we rely on the information reaching the earth from **very** far away, in the form of light (we have “seen” the universe through neutrinos and gravitational waves too).
- So we need to examine how these particles, be they photons or gravitons, propagate in our coordinate system.
	- Assume a radial ray of light $$ds(\sigma)^2=\left [\left (\frac{dt}{d\sigma}\right) ^2-a(t(\sigma))^2\left(\frac{d\chi}{d\sigma}\right)^2\right](d\sigma)^2=0\implies dt=+_-a(t)d\chi$$
	- How far has light emitted some ∆t ago travelled to reach us? $$l(t)=\int dl=\int a(t)d\chi=\int dt=c(t_0-t)$$
	The result is then that light travels a physical distance equal to the time interval ∆t in our frame (times c).
	- Instead, if we ask what is the co-moving distance (physical distance today) to the object that emitted light, $$\Delta\chi=\int d\chi=\int_t^{t_0}\frac{dt}{a(t)}$$
	Simply, if the universe has been expanding since t, then $$\Delta\chi_{light}>\Delta l_{light}$$
- If we picture the expansion of the universe as merely an explosion, then, the distance light would have travelled would be equal to the distance of the object from us when the light was emitted. This distance can be obtained from the co-moving distance by rescaling with a(t)/a(t_0). Then, $$\text{distance at emission }=a(t)\int_t^{t_0}\frac{dt'}{a(t')}$$
$$\text{distance travelled by light }=\int_t^{t_0}dt'$$
$$\text{Now, }a(t)\int_t^{t_0}\frac{dt'}{a(t')}<\int_t^{t_0}dt'<a(t_0)\int_t^{t_0}\frac{dt'}{a(t')}$$
- This means that space itself has expanded in the intervening time ∆t!

## 3. Measuring Distance
- There are two methods of distance determination:
	1. **Luminosity Distance**
		Some objects have a known luminosity (energy (light) emitted per unit time) which can be compared with how much reaches our detector per unit time (How do we know? Read about it)
		The energy emitted will dilute into a shell around the emission point of radius (today) a(t0)χ=χ. The area of this shell depends on the geometry. Hence, $$A= 4\pi\begin{cases}R_U^2sin^2(\chi/R_U)\\\chi^2\\R_U^2sinh^2(\chi/R_U)\end{cases}=4\pi S_K^2$$
		Additionally, the rate at which one receives the photon is dilated with respect to the rate of emission. Since the energy of a photon is proportional to its frequency, with the expansion of the universe, the wavelength is redshifted and hence the photon loses energy.
		Now, the flux F we observe on earth is related to the Luminosity L, $$F=\frac{a(t)^2L}{4\pi S_K^2(\chi)}=\frac{L}{4\pi d_L^2}$$
		where dL is the luminosity distance. This equation can be inverted to find χ, which results in the fact that the same star seems dimmer in an open universe and brighter in a closed one.
	2. **Angular Distance**
		We could also look at objects whose dimensions are known along with trigonometry, since angles do not change for a homogeneously and isotropically expanding universe.
		Consider a unidimensional rod of length l laid perpendicular to the line of sight at a far distance such that θ<<1 rad. Tracing time back to when the light reaching us now was emitted, we find that the object was at a distance a(t)χ. As a general case, we obtain $$l=a(t)S_K(\chi)\theta\equiv d_A\theta$$
		Then, the same object at a distance χ, $$\theta=\frac{l}{a(t)}\begin{cases}(R_Usin(\chi/R_U))^{-1}\\\chi^{-1}\\(R_Usinh(\chi/R_U))^{-1}\end{cases}$$
		This means that objects seem larger in a positive curvature space and smaller in a negative curvature space.
		If one knows both luminosity and dimensions, extracting χ from both methods provides a useful consistency check.$$\boxed{d_L=\sqrt{\frac{L}{4\pi F}}=\frac{S_K(\chi)}{a(t)}\;\;\;\;\;\;\;\;\;\;d_A=\frac{l}{\theta}=a(t)S_K(\chi)}$$