---
title: Classical Mechanics Review
slug: classical-mechanics-review
---
## Newtonian Mechanics

The basis of Newtonian Mechanics revolves around Newton’s second law of motion, i.e., $$\vec{F}=m\vec{a}$$.

## Lagrangian Mechanics

A Lagrangian is defined as $$L = T - U $$, where

$$T = \frac{1}{2}m(\mathring{x}^2 + \mathring{y}^2 + \mathring{z}^2)\text{ and } U = U(x,y,z)$$

Let us now define the “action” as $$S = \int_{t_1}^{t_2}L(y,\mathring{y})\:dt$$.

It basically describes the variation of the Kinetic and Potential energies along the trajectory

- Euler-Lagrange Equation

$$\frac{\partial{L}}{\partial{q}} - \frac{d}{dt}\:\frac{dL}{d\mathring{q}} = 0$$, where $q$ denotes the coordinate.

- 4 Steps:

1. Pick Coordinates.
2. Find $T$, $U$ and hence $L$.
3. Use the Euler-Lagrange Equation for $L$.
4. Get “stuff”.

## Legendre Transform

For a function $F(v)$, define $$w = \frac{\partial{F}}{\partial{v}}$$.

Then, $$G(w) = w.v(w) - F(v(w))$$ is the Legendre Transform of $F(v)$.

Basically, go from $$[F(v),v] \longrightarrow [G(w),w]$$.

Then,

$$G' = \frac{\partial{G}}{\partial{w}} = v\:+\:w\frac{\partial{v}}{\partial{w}}\:-\:\frac{\partial{F}}{\partial{w}}$$

$$= v\:+\:\frac{\partial{F}}{\partial{v}}.\frac{\partial{v}}{\partial{w}}\:+\:\frac{\partial{F}}{\partial{v}}.\frac{\partial{v}}{\partial{w}}$$.

Hence, we obtain, $$\frac{\partial{G}}{\partial{w}} = v$$ which is the inverse of $w$.

## Hamiltonian Mechanics

A Hamiltonian (total energy) is defined as $$H = T\:+\:U$$ which can also be written as (for say a pendulum),

$$H=\frac{1}{2}ml^2\mathring{\theta}^2 \:- \:mglcos\theta$$.

Now, momentum $$\;p =ml^2\mathring{\theta} \implies H = \frac{p^2}{2ml^2}\:-\:mglcos\theta$$.

Also note that, $$H=p\dot{\theta}-L$$ or in general for any coordinate $q$, $$H=p\dot{q}\:-\:L$$ since $$p \equiv\frac{\partial L}{\partial \dot{q}}$$.

Hence, we obtain the Hamiltonian Equations as,

$$\dot{q} = \frac{\partial{H}}{\partial{p}},\;\;\; \dot{p} = -\frac{\partial{H}}{\partial{q}}$$.

## Poisson Brackets and Time Evolution

This is a binary operator defined as,

$$[A,B]_P = \frac{\partial{A}}{\partial{p}}\frac{\partial{B}}{\partial{q}}-\frac{\partial{A}}{\partial{q}}\frac{\partial{B}}{\partial{p}}$$.

Now, for any operator $O = O(q,p,t)$,

$$\frac{dO(q,p,t)}{dt}=\mathring{q}\frac{\partial{O}}{\partial{q}}+\mathring{p}\frac{\partial{O}}{\partial{p}}+\frac{\partial{O}}{\partial{t}}$$.

But from the Hamiltonian Equations, we know $$\dot{q} = \frac{\partial{H}}{\partial{p}},\;\;\; \dot{p} = -\frac{\partial{H}}{\partial{q}}$$.

Hence, on substituting the above, we obtain

$$\frac{dO}{dt}=\frac{\partial{H}}{\partial{p}}\frac{\partial{O}}{\partial{q}}-\frac{\partial{H}}{\partial{q}}\frac{\partial{O}}{\partial{p}}+\frac{\partial{O}}{\partial{t}}$$.

By the definition of a Poisson Bracket,

$$\frac{dO}{dt}=[H,O]_P +\frac{\partial{O}}{\partial{t}}$$.

1. Any operator $O$ for which $$[H,O]_P = -\frac{\partial{O}}{\partial{t}}$$is conserved.
2. If $H$ is not explicitly dependent on $t$, $H$ is conserved.

Few Poisson brackets,

- $$[x,x]=0=[p,p]$$
- $$[x,p]=1$$
- $$[x,H]=\dot{x},\:[p,H]=\dot{p}$$.

Applying it to fields: [[Classical Field Mechanics 1|Classical Field Mechanics]]
