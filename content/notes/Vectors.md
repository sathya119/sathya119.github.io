Three notions of vectors:
- Displacement vector - Pointing from a point to another.
- Tangent vector to a curve - eg. Velocity.
- Normal vector - Gradient of a function.

On a manifold, displacement vectors are not really “vector-like”, i.e., vector addition is not commutative.
- To understand this, imagine a flat graph and a sphere with two vectors. Now, in the flat space, you can move the vectors in two ways to add them. You will see that on the sphere, moving the vectors in two different ways results in two different resultant vectors. (insert a sketch)

Hence we use tangent vectors that are “well-behaved”. $$V^\mu = \frac{dx^\mu}{d\lambda}$$ These vectors form a vector space called the Tangent Space to a manifold M at p, Tₚ.
- If we embed M in the n-dimensional real space, then the tangent space is the tangent plane at the point p.

We can also define a Vector Field, which is a choice of vector V in Tₚ at each point p in M; a vector-valued function on M.
- Note that while every vector V, a part of Tₚ, can be realised as the tangent vector to some curve through p, given a field V, we will not in general be able to find a family of curves such that V is tangent to the curves at every point.

Now, the components of V are$$V^\mu = \frac{dx^\mu}{d\lambda}=\mathring{x}^\mu$$ On changing coordinates, $$V = V^\mu\frac{\partial}{\partial x^\mu}=\tilde{V}^\nu\frac{\partial}{\partial \tilde{x}^\nu} = \tilde{V}^\nu\frac{\partial x^\mu}{\partial \tilde{x}^\nu}\frac{\partial}{\partial x^\mu}$$Hence, $$V^\mu = \tilde{V}^\nu\frac{\partial x^\mu}{\partial \tilde{x}^\nu}$$Alternatively, $$\tilde{V}^\mu = V^\nu\frac{\partial \tilde{x}^\mu}{\partial x^\nu}$$Thus, the components of a tangent vector change linearly under a coordinate transformation.
- Note that the transformation matrix changes from point to point in space-time, unlike in #Lorentz Transformations. This is a reason why if we made the components equal in one system, they won’t be equal in another.