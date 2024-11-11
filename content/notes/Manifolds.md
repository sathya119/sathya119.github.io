Let n be a positive integer. Given a set M, an n-dimensional **chart** (coordinate system) on M is a bijection ϕ from a subset U of M to an open subset φ(U) of the n-dimensional real space.
An **atlas** for M is a collection of charts {(Ua, ϕa)} such that
- The union of all Ua is the set M
- If the intersection of two charts is not null, then the map$$F = ϕ_a◦ϕ^{−1}_b : \mathbb{R}^n → \mathbb{R}^n (\tilde{x}^µ(x^ν))$$ is differentiable where it is defined.
A **maximal atlas** is one containing all the charts satisfying the above definition.
An n-**dimensional manifold** is the set M along with a maximal atlas.
Examples:
- n-dimensional real space - just take ϕ to be the identity map. A maximal atlas includes the identity map and all differentiable coordinates.
- Two sphere - needs at least 2 charts to cover it.
- Circle - need 2 charts {(0 < θ < 2π), (-π < 0 < π)}

Mathematically, the utility of a manifold is that it defines a differentiable structure on the underlying set (smoothness). Given any function $$f:M\rightarrow \mathbb{R},\;f:p\rightarrow f(p)$$ we can define functions$$f◦\phi^{-1}:\mathbb{R}\rightarrow\mathbb{R},\;f:x^\mu\rightarrow f(p(x^\mu))$$
We say that f is differentiable if these functions are differentiable where they are defined.