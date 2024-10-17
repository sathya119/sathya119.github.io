A subject that I understood 0% of since lecture 1 and yet, making “notes”!
## Why?
1. I did not learn these conventions in my undergrad and so was unprepared for all that was covered in the first week.
2. The lecturer speaks in his own European accent and to himself, which quite adds to my discomfort with the subject.
3. Almost 80% of my class are research students and hence he just assumes that everyone “knows” few concepts and moves on.

Check [[Conventions and Formulae]]
 “Review” of Classical Mechanics
	Newtonian Mechanics
		$$F=ma$$
	Lagrangian Mechanics
		A Lagrangian is defined as
		$$L = T - U $$
			where $$T = \frac{1}{2}m(\mathring{x}^2 + \mathring{y}^2 + \mathring{z}^2) \; and\; U = U(x,y,z)$$
		Let us now define the “action”,
		$$S = \int_{t_1}^{t_2}L(y,\mathring{y},t)\:dt$$
			It basically describes the variation of the Kinetic and Potential energies along the trajectory
		Euler-Lagrange Equation
		$$\frac{\partial{L}}{\partial{q}} - \frac{d}{dt}\:\frac{dL}{d\mathring{q}} = 0$$
			where q is the coordinate.
		4 Steps:
			1. Pick Coordinates
			2. Find T, U and hence L
			3. Use the Euler-Lagrange Equation for L
			4. Get “stuff”
	Legendre Transform
		For a function F(v), define $$w = \frac{\partial{F}}{\partial{v}}$$
		Then, $$G(w) = w.v(w) - F(v(w))$$
		is the Legendre Transform of F(v).
			Basically, go from $$[F(v),v] \longrightarrow [G(w),w]$$
			Then, $$G' = \frac{\partial{G}}{\partial{w}} = v\:+\:w\frac{\partial{v}}{\partial{w}}\:-\:\frac{\partial{F}}{\partial{w}}$$ $$= v\:+\:\frac{\partial{F}}{\partial{v}}.\frac{\partial{v}}{\partial{w}}\:+\:\frac{\partial{F}}{\partial{v}}.\frac{\partial{v}}{\partial{w}}$$
			Hence, we obtain, $$\frac{\partial{G}}{\partial{w}} = v$$
			which is the inverse of w
	Hamiltonian Mechanics
		A Hamiltonian (total energy) is defined as $$H = T\:+\:U$$
		which can also be written as (for say a pendulum) $$=\frac{1}{2}ml^2\mathring{\theta}^2 \:- \:mglcos\theta$$
		Now, $$momentum, \:p =ml^2\mathring{\theta} \Rightarrow H = \frac{p^2}{2ml^2}\:-\:mglcos\theta$$
		Also note that, $$H=p\mathring{\theta}\:-\:L$$
		or in general for any coordinate q, $$H=p\mathring{q}\:-\:L$$
		Hence, we obtain the Hamiltonian Equations as, $$\mathring{q} = \frac{\partial{H}}{\partial{p}},\:\mathring{p} = -\frac{\partial{H}}{\partial{q}}$$
	Poisson Bracket
		This is a binary operator defined as, $$[A,B]_P = \frac{\partial{A}}{\partial{p}}\frac{\partial{B}}{\partial{q}}-\frac{\partial{A}}{\partial{q}}\frac{\partial{B}}{\partial{p}}$$
		Now, for any operator O = O(q,p,t), $$\frac{dO(q,p,t)}{dt}=\mathring{q}\frac{\partial{O}}{\partial{q}}+\mathring{p}\frac{\partial{O}}{\partial{p}}+\frac{\partial{O}}{\partial{t}}$$
		But from the Hamiltonian Equations, we know $$\mathring{q} = \frac{\partial{H}}{\partial{p}},\:\mathring{p} = -\frac{\partial{H}}{\partial{q}}$$
		Hence, on substituting the above, we obtain $$\frac{dO}{dt}=\frac{\partial{H}}{\partial{p}}\frac{\partial{O}}{\partial{q}}-\frac{\partial{H}}{\partial{q}}\frac{\partial{O}}{\partial{p}}+\frac{\partial{O}}{\partial{t}}$$
		By the definition of a Poisson Bracket, $$\frac{dO}{dt}=[H,O]_P \: +\:\frac{\partial{O}}{\partial{t}}$$
			1. Any operator O for which, $$[H,O]_P = -\frac{\partial{O}}{\partial{t}}$$
			is conserved.
			2. If H is not explicitly dependent on t, H is conserved.
	Field Mechanics
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
			Note that the second term cancels for Dirichlet boundary conditions and on assuming that ϕ → 0, the third term also goes to zero. Then, we can extract the field equations as, $$\frac{\partial}{\partial{t}}\frac{\partial{\mathcal{L}}}{\partial{\mathring{\phi}}}+\frac{\partial}{\partial{x}}\frac{\partial\mathcal{L}}{\partial{\partial_x\phi}}-\frac{\partial{\mathcal{L}}}{\partial{\phi}}=0$$
			We can rewrite this as $$\frac{\partial}{\partial{x^\mu}}\frac{\partial{\mathcal{L}}}{\partial\partial_x\phi}-\frac{\partial\mathcal{L}}{\partial\phi} = 0$$
		Hamiltonian Formulation
			