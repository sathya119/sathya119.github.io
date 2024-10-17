## What is a Group?
	A group is a set of elements along with an operation that satisfies the following:
	1.  Closure
	2. Associativity
	3. Existence of Identity
	4. Invertibility of elements
Can be classified into [[Discrete]] and [[Continuous Groups]].
A group is defined to be finite iff it has a finite number of elements (duh). This number is called the order of the group.
A group is called [[abelian]] if all the elements commute with each other under the group operation. Otherwise, they are called [[non-abelian]].
## [[Representation]] of a Group
	Mapping D of the elements of G onto a set of linear operators or matrices such that:
	1. D(e) = I, the identity matrix
	2. D(g1)D(g2) = D(g1g2) where g1, g2 are elements of G. This is known as the group multiplication law.
Similarity Transformation - Preserves group multiplication law:
	$$D(g) \longrightarrow D'(g)=S^{-1}D(g)S$$
	where S is a non-singular matrix, i.e., |S| != 0
	