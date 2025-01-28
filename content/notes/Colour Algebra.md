**1. Fundamental Properties**

The $$SU(N_c)$$  Lie group depends on the real parameters 

$$\theta^a \text{ with } a=1,...,N_c^2-1$$

Then, any arbitrary element of the group U can be written as 

$$U_{ij}=[e^{-ig_s\theta^at^a}]_{ij}$$ for generators $$t^{ij}$$ and strong coupling constant $$g_s$$ with $$U\in SU(N_c)$$

Here,

$$t^a=\frac{\lambda^a}{2}$$ where $$\lambda^a$$ are the 8 Gell-Mann matrices.

An important relation for generators is

$$[t^a,t^b]\equiv f_{abc}t^c$$

where f are the totally anti-symmetric structure constants.

**2. Fundamental Representation**

Consider the generators of the fundamental representation, $$t_{ij}^a$$ where $$a=1,...,N_c^2-1$$ and $$i,j=1,...,N_c$$

There are $$(N_c^2-1)$$ generators that can each be represented by an $$N_c\times N_c$$ matrix.

These generators have the following properties:
- Hermitian: $$(t^a)^\dagger=t^a$$

	- Proof: Using $$U=e^{-ig_s\theta^a t^a}$$ and since $$U\in SU(N_c)$$ (unitary),
	
	
	$$UU^\dagger=(1-ig_s\theta^at^a)(1+ig_s\theta^b(t^b)^\dagger)+...=1+ig_s\theta^a((t^a)^\dagger-t^a...=1)\implies(t^a)^\dagger=t^a$$

- Traceless: $$tr[t^a]=0$$

	- Proof: U is special,
	
	
	$$det[U]=e^{-ig_s\theta^atr[t^a]}=1\implies tr[t^a]=0$$

- Normalisation: $$tr[t^a t^b]=T_F\delta^{ab}$$ (we will pick $$T_F=\frac{1}{2}$$)
- Commutator: $$[t^a,t^b]=if^{abc}t^c$$
- Fierz Identity: $$t^a_{ij}t^a_{kl}=T_F(\delta_{il}\delta_{kj}-\frac{1}{N_c}\delta_{ij}\delta_{kl})$$

	- Proof: Let M represent an arbitrary hermitian $$N_c\times N_c$$ matrix, then:
	
	
	$$M=m_0\mathbb{1}_{N_c\times N_c}+m_at^a$$
	
	
	$$tr[M]=m_0\underbrace{tr[\mathbb{1}_{N_c\times N_c}]}_{=N_c}+m_atr[t^a]\implies m_0=tr[M]/N_c$$
	
	
	$$tr[t^aM]=m_0tr[t^a]+m_btr[t^at^b]\implies m_a=tr[t^aM]/T_F$$
	
	
	Therefore, we can write,
	
	$$M=\frac{1}{N_c}tr[M]\mathbb{1}_{N_c\times N_c}+\frac{1}{T_F}tr[t^aM]t^a$$
	
	
	Then,
	
	$$M_{ij}=\frac{1}{N_c}M_{kk}\delta_{ij}+\frac{1}{T_F}t^a_{kl}M_{lk}t^a_{ij}=M_{lk}\underbrace{(\frac{1}{N_c}\delta_{kl}\delta_{ij}+\frac{1}{T_F}t^a_{kl}t^a_{ij})}_{\delta_{il}\delta_{kj}}\;\;\;\;\;\forall M$$
	
	
	$$\implies t^a_{ij}t^a_{kl}=T_F(\delta_{il}\delta_{kj}-\frac{1}{N_c}\delta_{ij}\delta_{kl})$$

The totally anti-symmetric structure constants $$f^{abc}$$ have the following properties:

1. Totally anti-symmetric:

$$if^{abc}t^c=[t^a,t^b]=-[t^b,t^a]=-if^{bac}t^c\implies f^{abc}=-f^{bac}$$

2. Real:

$$if^{abc}t^c=[t^a,t^b]=([t^b,t^a])^\dagger=-i(f^{bac})^*t^c\implies f^{abc}=(f^{abc})^*$$

3. Obey the Jacobi identity:

$$f^{abc}f^{cde}+f^{adc}f^{ceb}+f^{dec}f^{cbd}=0$$

**3. Adjoint Representation**

The totally anti-symmetric structure constants are (up to normalisation) the generators of the adjoint representation,

$$(F^a)_{bc}\equiv -if^{abc}$$ for $$a=1,...,N_c^2-1,\;\;\;\;\;\;b,c=1,...,N_c^2-1$$

There are $$(N_c^2-1)$$ generators, each of which can be represented by an $$(N_c^2-1)\times (N_c^2-1)$$ matrix.

- Commutator: $$[F^a,F^b]=if^{abc}F^c$$

**4. Quadratic Casimir Invariants**

For each representation of the Lie Algebra, we can construct quadratic Casimir invariants which commute with all generators,

$$\mathbb{C}_2=T^aT^a=C_R\mathbb{1}_R$$ where $$T^a$$ are the generators of a some arbitrary representation R.

- Fundamental Casimir: $$(t^at^a)_{ij}=C_F\delta_{ij}$$ with $$C_F=T_F\frac{N_c^2-1}{N_c}$$
- Adjoint Casimir: $$(F^cF^c)_{ab}=C_A\delta_{ab}$$ with $$C_A=N_c$$
	- In terms of structure constants, $$(-if^{cad})(-if^{cdb})=f^{acd}f^{bcd}=C_A\delta^{ab}$$

**5. Symmetric Constants**

If we consider the anti-commutator,

$$\{t^a,t^b\}=\frac{2T_F}{N_c}\delta_{ab}\mathbb{1}_{N_c\times N_c}+d^{abc}t^c$$

The symmetric constants $$d^{abc}$$ have the following properties:

- $$d^{aac}=0$$
- $$d^{abc}d^{abd}=\frac{N_c^2-4}{N_c}d^{cd}$$