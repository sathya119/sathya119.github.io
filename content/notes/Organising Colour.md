The [[Feynman Rules - Covariant Gauges]] contained both colour and kinematic factors. To organise the calculations, we separate the two components:

![[organising colour.light.svg]]

We can apply this colour decomposition to complete amplitudes, abstractly,

$$A=\sum_i C_iA_i$$ where A is an amplitude, the C are colour factors and the A are ordered of partial amplitudes (containing just the kinematic part of the amplitude). For cross sections, we need the squared amplitude, summed over all colours and averaged over the initial state,

$$\sum_{colours}|A|^2=\sum_{colours}A_i^\dagger C_i^\dagger C_jA_j=A_i^\dagger C_{ij}A_j$$ where the matrix $$C_{ij}=\sum_{colours}C_i^\dagger C_j$$ is a function of $$N_c$$ or the Casimir invariants.

- An example: Consider the scattering $$q\bar q\rightarrow gg$$
	 
	There 3 associated Feynman diagrams:
	![[feynman diagrams for qq-gg.light.svg]]
	
	The indices i, j, k indicate the fundamental colour indices of the quarks and a, b, c indicate the adjoint colour indices of the gluons.
	
	$$A=\sum_{i=1}^3 C_iA_i$$
	
	The colour factors C are given by:
	- $$C_1=t^b_{jk}t^a_{ki}$$
	- $$C_2=t^a_{jk}t^b_{ki}$$
	- $$C_3=t^c_{ji}if^{abc}=[t^a,t^b]_{ji}=t^a_{jk}t^b_{ki}-t^b_{jk}t^a_{ki}=C_2-C_1$$
	
	Hence, the amplitude can rearranged and written as 
	
	$$A=C_1A_1+C_2A_2+C_3A_3=C_1(A_1-A_3)+C_2(A_2+A_3)$$
	
	By defining the colour matrix $$C_{ij}=C_i^\dagger C_j$$, we can evaluate the colour interferences pictorially using the graphical rules introduced in [[Graphical Representation of Colour group Algebra]].
	
	(insert image)
	
	With $$C_{21}=C_{12}=-T_FC_F$$ by symmetry, the full matrix is given by,
	
	$$C_{ij}=\begin{pmatrix}C_F^2N_c&-T_FC_F\\-T_FC_F&C_F^2N_c\end{pmatrix}$$
