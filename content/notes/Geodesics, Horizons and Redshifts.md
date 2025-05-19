### 1. Geodesics

In our FRW universe, gravity is inherently incorporated into the metric. Test particles follow geodesics, which are paths of minimal spacetime distance, governed by the geodesic equation.

Their motion is described by 4-momentum $P^\mu=\frac{dx^\mu}{d\sigma}=(E,P^i)$. 	The effects of gravity emerge from the connection (aka Christoffel Symbols: metric’s first derivative), not explicit forces.

Dynamics: $$ds^2=dt^2-a(t)^2(d\chi+S_K^2(\chi)(d\theta+sin(\theta)^2d\phi^2))=dt^2-a^2(t)\hat{g}_{ij}dx^idx^j$$.

Then, the definition of the connection is

$$\Gamma_{\nu\rho}^\mu=\frac{g^{\mu\kappa}}{2}(\frac{\partial}{\partial x^\nu}g_{\rho\kappa}+\frac{\partial}{\partial x^\rho}g_{\nu\kappa}-\frac{\partial}{\partial x^\kappa}g_{\nu\rho})$$.

Now, the system to be solved is 

$$[\frac{dx^\nu}{d\sigma}\nabla_\nu]\frac{dx^\mu}{d\sigma}=\frac{dx^\nu}{d\sigma}(\frac{\partial}{\partial x^\nu}\frac{dx^\mu}{d\sigma}+\Gamma^\mu_{\nu\alpha}\frac{dx^\alpha}{d\sigma})=\frac{d^2x^\mu}{d\sigma^2}+\Gamma^\mu_{\nu\alpha}\frac{dx^\nu}{d\sigma}\frac{dx^\alpha}{d\sigma}$$.

This yields a connection which can be synthesised as

$$\Gamma^0_{ij}=a\frac{\partial a}{\partial t}\hat{g}_{ij}\;\;\;\;\Gamma^i_{0j}=\Gamma^i_{j0}=\frac{1}{a}\frac{\partial a}{\partial t}\delta^i_j\;\;\;\;\Gamma^i_{jj}=\frac{-1}{2\hat{g}_{ii}}\frac{\partial \hat{g}_{jj}}{\partial x^i}\;\;\;\;\Gamma^i_{ij}=\frac{1}{2\hat{g}_{ii}}\frac{\partial \hat{g}_{ii}}{\partial x^j}$$.

The spacelike components are

![[Pasted image 20241127124820.png]]

We can then write the differential equation for our trajectory

$$\frac{d^2x^\mu}{d\sigma^2}+\Gamma^\mu_{\nu\rho}\frac{dx^\nu}{d\sigma}\frac{dx^\rho}{d\sigma}=\frac{d}{d\sigma}P^\mu+\Gamma^\mu_{\nu\rho}P^\nu P^\rho=0$$.

Substituting the definition of 4-momentum for the 0th component, we get 

$$\frac{dE}{d\sigma}+2\Gamma^0_{0i}EP^i+\Gamma^0_{ij}P^iP^j=\frac{dt}{d\sigma}\frac{dE}{dt}+a\frac{da}{dt}\hat{g}_{ij}P^iP^j$$.

Now, if we apply the on-shell condition and definition of momentum 

$$\frac{dx^0}{d\sigma}=\frac{dt}{d\sigma}=E\;\;\;\;\;\;\;\;\;\;E^2-a^2\hat{g}_{ij}P^iP^j=m^2$$

we obtain, $$E\frac{d}{dt}E+\frac{1}{a}\frac{da}{dt}(E^2-m^2)=0$$.

Hence we have that the energy of fast moving massless particles (Photons) scales inversely with the expansion of the universe whereas the energy of heavy particles stays the same.

We could also look at it from the definition of energy of a photon

$$E_{photon}=2\pi\hbar\nu=2\pi\hbar \frac{c}{\lambda}$$.

If space itself expands, then wavelength too should expand along with it. On the other hand, a point particle with mass m will have a first order contribution to energy a.

### 2. Redshifts and Horizons

The redshift z can be related to the scale factor 

$$z=\frac{\nu(t)}{\nu(t_0)}-1=\frac{a(t_0)}{a(t)}-1 \;\;\;\;\;\;\;\;\;\;\;\;\;\boxed{\frac{a(t)}{a(t_0)}=\frac{1}{1+z}}$$.

How far would we have to look to see the “birth” of the known universe (when a=0)? In co-moving distance, it is $\eta(t_0)=\int_0^{t_0}\frac{dt}{a(t)}$ called the co-moving horizon since we have no way of knowing about anything beyond this radius (yet).

Our skepticism of the limit t->0 is still justified; it should not be taken literally as physical laws break down under such extreme conditions. However, this contributes negligibly to integrals describing the universe, which are highly dominated by later times, making the limit practical for our calculations.

We can make our answer time independent by introducing conformal time: 

$$\boxed{\eta(t)=\int_0^t\frac{dt'}{a(t')}}$$.

This gives the horizon at time t: the maximal co-moving distance that information about an event at t = 0 can travel by time t.

**Causality**

1. Causally Disconnected Events:
    Two events are causally disconnected if the co-moving horizon of the earlier event by the later time is smaller than their co-moving distance.
	
	Example: A supernova’s light couldn’t influence a decision on Earth if it hadn't yet reached us.
	
2. Co-Moving Horizon Calculation:
	The horizon distance is given by: $\int_{t_1}^{t_2} \frac{dt}{a(t)} = \eta_2 - \eta_1$.
	
	If η2−η1<|χ2−χ1|, no causal connection exists.
	
3. Events on Opposite Sides of the Sky:
	Light from two simultaneous events at time $t$ reaches Earth today if: $|\chi_A - \chi_{us}| = |\chi_B - \chi_{us}| = \eta(t_0) - \eta(t)$.
	   
    Events are causally connected if η(t)≥η(t0)/2, meaning they could share a common cause.
     
	Events in the first half of the universe’s conformal lifetime are causally disconnected from those observed today. When we say causally connected, they could have been but not necessarily.