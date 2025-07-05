Now, we go from just a time-dependent function like q or p to a “field” that is dependent on both temporal and spatial components:

$$q(t) \longleftrightarrow \phi(t,x)\: and\: p(t) \longleftrightarrow \Pi(t,x)$$.

The field can be imagined as:

![[field.light.svg]]

where the field points can move up & down (we neglect horizontal motion).

## Lagrangian Formulation

$$\dot{\phi}=\frac{\partial{\phi}}{\partial{t}}$$

Then, we can write the action as,

$$S=\int dtL(\phi,\dot{\phi},\nabla\phi,...)$$

$$=\int dt(\int d^3xA(\phi(x))+\int d^3xd^3yB(\phi(x),\phi(y))+...)$$.

But, due to locality (the fact that it takes time for the effect to be felt) the field at $(t,0)$ does not get influenced directly and instantaneously by the field at some $(t,z)$. So, the $B$ term becomes zero. Hence, let us introduce Langrangian Density $$\mathcal{L}=\mathcal{L}(\phi,\partial_\mu\phi)$$.

If we introduce a small deviation in the action,

$$\delta S = \int dtd^3x(\delta\phi\frac{\partial{\mathcal{L}}}{\partial{\phi}}+\delta\dot{\phi}\frac{\partial{\mathcal{L}}}{\partial{\dot{\phi}}}+\delta\nabla\phi\frac{\partial\mathcal{L}}{\partial{\nabla\phi}})$$

$$=\int dtd^3x\delta \phi(\frac{\partial{\mathcal{L}}}{\partial{\phi}}-\frac{\partial}{\partial{t}}\frac{\partial{\mathcal{L}}}{\partial{\dot{\phi}}}+\frac{\partial}{\partial{x}}\frac{\partial\mathcal{L}}{\partial{\partial_i\phi}})\:+\:\int\delta \phi\frac{\partial{\mathcal{L}}}{\partial{\dot{\phi}}}d^3x\:+\:\int dt\delta \phi\frac{\partial{\mathcal{L}}}{\partial{\partial_x\phi}}d^3x\:+\:...$$

Note that the second term cancels for Dirichlet boundary conditions and on assuming that $ϕ → 0$, the third term also goes to zero.

Then, we can extract the field equations as, 

$$\boxed{\frac{\partial}{\partial{t}}\frac{\partial{\mathcal{L}}}{\partial{\dot{\phi}}}+\frac{\partial}{\partial{x^i}}\frac{\partial\mathcal{L}}{\partial{\frac{\partial\phi}{\partial x^i}}}-\frac{\partial{\mathcal{L}}}{\partial{\phi}}=0}$$.

We can rewrite this as 

$$\frac{\partial}{\partial{x^\mu}}\frac{\partial{\mathcal{L}}}{\partial\partial_x\phi}-\frac{\partial\mathcal{L}}{\partial\phi} = 0$$.

## Hamiltonian Formulation

$$\int d^3x\delta\dot{\phi}\Pi\equiv\int d^3x\delta\dot{\phi}\frac{\partial\mathcal{L}}{\delta\dot{\phi}}$$

$$=\int d^3x\delta\dot{\phi}(\frac{\partial\mathcal{L}}{\partial\dot{\phi}}-\nabla\frac{\partial\mathcal{L}}{\partial\nabla\dot{\phi}})$$

such that the canonical coordinate is 

$$\Pi(\vec{x})=\frac{\partial\mathcal{L}}{\partial\dot{\phi}}-\nabla\frac{\partial\mathcal{L}}{\partial\nabla\dot{\phi}}$$.

We define the Hamiltonian Density as $$\mathcal{H}=\Pi.\dot{\phi}-\mathcal{L}$$.

We can now write the Hamiltonian as 

$$H=\int d^3x\mathcal{H}=\int d^3x(\Pi.\dot{\phi}-\mathcal{L})$$.

Now the equations of motion follow from the #Legendre inverse transform such that 

$$\int d^3x\delta\phi(\frac{\delta\mathcal{H}}{\delta\phi})=\int d^3x(\frac{\delta\dot{\phi}}{\delta\phi}(\Pi-\frac{\delta\mathcal{L}}{\delta\dot{\phi}})-\frac{\delta\mathcal{L}}{\delta\phi})$$.

$$\dot{\phi}=\frac{\partial\mathcal{H}}{\partial\Pi}-\nabla\frac{\partial\mathcal{H}}{\partial\nabla\Pi}\text{ and }\dot{\Pi}=-\frac{\partial\mathcal{H}}{\partial\phi}+\nabla\frac{\partial\mathcal{H}}{\partial\nabla\phi}$$

#Poisson Bracket has a generalisation,

$$\frac{d}{dt}\Theta=[H,\Theta]_P+\frac{\partial\Theta}{\partial t}$$.

- [[Klein-Gorden Field]]
- [[Low Energy Acoustic Phonons]]
- [[Electromagnetism]]
- [[Complex, Constrained Field]]

