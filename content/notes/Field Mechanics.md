Now, we go from just a time-dependent function like q or p to a “field” that is dependent on both temporal and spatial components:
	$$q(t) \longleftrightarrow \phi(t,x)\: and\: p(t) \longleftrightarrow \Pi(t,x)$$
The field can be imagined as:
	![[field]]
	where the field points can move up & down (we neglect horizontal motion).

Lagrangian Formulation
	$$\mathring{\phi}=\frac{\partial{\phi}}{\partial{t}}$$
Then, we can write the action as, $$S=\int dtL(\phi,\mathring{\phi},\nabla\phi,...)$$$$=\int dt(\int d^3xA(\phi(x))+\int d^3xd^3yB(\phi(x),\phi(y))+...)$$
	But, due to locality (the fact that it takes time for the effect to be felt) the field at (t,0) does not get influenced directly and instantaneously by the field at some (t,z). So, the B term becomes zero. Hence, let us introduce Langrangian Density, $$S = \int dt\int \mathcal{L}(\phi,\mathring{\phi},\nabla\phi)$$
	If we introduce a small deviation in the action,$$\delta S = \int dtd^3x(\delta\phi\frac{\partial{\mathcal{L}}}{\partial{\phi}}+\delta\mathring{\phi}\frac{\partial{\mathcal{L}}}{\partial{\mathring{\phi}}}+\delta\nabla\phi\frac{\partial\mathcal{L}}{\partial{\nabla\phi}})$$
	$$=\int dtd^3x\delta \phi(\frac{\partial{\mathcal{L}}}{\partial{\phi}}-\frac{\partial}{\partial{t}}\frac{\partial{\mathcal{L}}}{\partial{\mathring{\phi}}}+\frac{\partial}{\partial{x}}\frac{\partial\mathcal{L}}{\partial{\partial_i\phi}})\:+\:\int\delta \phi\frac{\partial{\mathcal{L}}}{\partial{\mathring{\phi}}}d^3x\:+\:\int dt\delta \phi\frac{\partial{\mathcal{L}}}{\partial{\partial_x\phi}}d^3x\:+\:...$$
	Note that the second term cancels for Dirichlet boundary conditions and on assuming that ϕ → 0, the third term also goes to zero.
	Then, we can extract the field equations as, $$\frac{\partial}{\partial{t}}\frac{\partial{\mathcal{L}}}{\partial{\mathring{\phi}}}+\frac{\partial}{\partial{x}}\frac{\partial\mathcal{L}}{\partial{\partial_x\phi}}-\frac{\partial{\mathcal{L}}}{\partial{\phi}}=0$$
	We can rewrite this as $$\frac{\partial}{\partial{x^\mu}}\frac{\partial{\mathcal{L}}}{\partial\partial_x\phi}-\frac{\partial\mathcal{L}}{\partial\phi} = 0$$

Hamiltonian Formulation
	$$\int d^3x\delta\mathring{\phi}\Pi\equiv\int d^3x\delta\mathring{\phi}\frac{\partial\mathcal{L}}{\delta\mathring{\phi}}$$
	$$=\int d^3x\delta\mathring{\phi}(\frac{\partial\mathcal{L}}{\partial\mathring{\phi}}-\nabla\frac{\partial\mathcal{L}}{\partial\nabla\mathring{\phi}})$$
	such that the canonical coordinate is $$\Pi(\vec{x})=\frac{\partial\mathcal{L}}{\partial\mathring{\phi}}-\nabla\frac{\partial\mathcal{L}}{\partial\nabla\mathring{\phi}}$$
	We can now write the Hamiltonian as $$H=\int d^3x\mathcal{H}=\int d^3x(\Pi.\mathring{\phi}-\mathcal{L})$$
	Now the equations of motion follow from the #Legendre inverse transform such that $$\int d^3x\delta\phi(\frac{\delta\mathcal{H}}{\delta\phi})=\int d^3x(\frac{\delta\mathring{\phi}}{\delta\phi}(\Pi-\frac{\delta\mathcal{L}}{\delta\mathring{\phi}})-\frac{\delta\mathcal{L}}{\delta\phi})$$
	$$\mathring{\phi}=\frac{\partial\mathcal{H}}{\partial\Pi}-\nabla\frac{\partial\mathcal{H}}{\partial\nabla\Pi} \:\:and\:\:\mathring{\Pi}=-\frac{\partial\mathcal{H}}{\partial\phi}+\nabla\frac{\partial\mathcal{H}}{\partial\nabla\phi}$$
	#Poisson Bracket has a generalisation such that $$\frac{d}{dt}\Theta=[H,\Theta]_P+\frac{\partial\Theta}{\partial t}$$