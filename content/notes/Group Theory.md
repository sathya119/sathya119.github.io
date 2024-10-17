**What is a Group?**
	A _group_ is a set of elements along with an operation that satisfies the following (check [[Proofs]]):
	1.  Closure
	2. Associativity
	3. Existence of Identity
	4. Invertibility of elements
Can be classified into [[Discrete]] and [[Continuous Groups]].
A group is defined to be _finite_ iff it has a finite number of elements (duh). This number is called the _order_ of the group.
A group is called [[abelian]] if all the elements _commute_ with each other under the group operation. Otherwise, they are called [[non-abelian]].
**[[Representation]] of a Group**
	Mapping D of the elements of G onto a set of linear operators or matrices such that:
	1. D(e) = I, the identity matrix
	2. D(g1)D(g2) = D(g1g2) where g1, g2 are elements of G. This is known as the _group multiplication law_.
_Similarity Transformation_ - Preserves group multiplication law:
	$$D(g) \longrightarrow D'(g)=S^{-1}D(g)S$$
	where S is a non-singular matrix, i.e., |S| != 0 ([[Proofs]])
	
_Reducible Representation_ - Has an invariant subspace, i.e., the action of all D(g) on any vector in the subspace is still in the same space. Otherwise, it is _irreducible_.
_Completely Reducible Representation_ - If it can be put in the form: $$\begin{bmatrix}D_1(g)&&&&0\\&D_2(g)&&&&\\&&.&&&\\&&&.&&\\&&&&.&\\0&&&&D_n(g)\end{bmatrix}$$
for all the elements in the group such that their individual representations are irreducible.
	_Unitary Representation_ - Representing matrices are unitary, i.e.,$$UU^\dagger = U^\dagger U = 1$$
[[Theorems]]
1. If G is a finite group ([[compact lie group]]), then every reducible representation is completely reducible.
2. If G is finite ([[compact lie group]]), then every representation of G is equivalent to a unitary representation.